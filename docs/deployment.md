
# Deployment Guide for PrecisionVPS

This document outlines the deployment process and integrations for the PrecisionVPS platform.

## GitHub Actions Deployment Pipeline

Our project uses GitHub Actions to automate deployments to our production VPS. The workflow is defined in `.github/workflows/deploy.yml`.

### Setting up GitHub Secrets

For the deployment workflow to function properly, add the following secrets to your GitHub repository:

1. `VPS_HOST`: The IP address or domain of your VPS
2. `VPS_USERNAME`: SSH username for accessing the VPS
3. `VPS_SSH_KEY`: Private SSH key for authentication
4. `ZOHO_API_KEY`: Your Zoho API key for billing integration

### VPS Setup Requirements

The VPS should have the following software installed:

- Node.js (v18+)
- Git
- PM2 (for process management)
- Nginx (for reverse proxy)

### Initial Server Configuration

```bash
# Install Node.js and npm
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 globally
sudo npm install -g pm2

# Set up the application directory
sudo mkdir -p /var/www/precision-vps
sudo chown $USER:$USER /var/www/precision-vps

# Clone the repository
git clone https://github.com/yourusername/precision-vps.git /var/www/precision-vps
cd /var/www/precision-vps

# Set up environment variables
echo "ZOHO_API_KEY=your_zoho_api_key_here" > .env

# Install dependencies and build
npm ci --production
npm run build

# Start the application with PM2
pm2 start npm --name "precision-app" -- start
pm2 save
pm2 startup
```

### Nginx Configuration

Create a new Nginx configuration file for your application:

```bash
sudo nano /etc/nginx/sites-available/precision-vps
```

Add the following configuration:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable the site and restart Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/precision-vps /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## Security Best Practices

### Firewall Setup

```bash
# Install UFW if not already installed
sudo apt-get install ufw

# Default policies
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Allow SSH, HTTP, and HTTPS
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow https

# Enable UFW
sudo ufw enable
```

### Regular Updates

Set up automatic security updates:

```bash
sudo apt-get install unattended-upgrades
sudo dpkg-reconfigure -plow unattended-upgrades
```

### SSL Configuration

Use Certbot to set up SSL with Let's Encrypt:

```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

## Zoho Billing Integration

To integrate Zoho Billing with your application:

1. Create a webhook in Zoho Billing pointing to your API endpoint
2. Set up environment variables for API keys

### Configuring Zoho Webhooks

1. Log in to your Zoho Billing account
2. Go to Settings > Integrations > Webhooks
3. Create a new webhook with the URL: `https://yourdomain.com/api/webhooks/zoho`
4. Select events: Invoice Created, Payment Received, Subscription Updated
5. Generate an API key in Zoho and set it as the `ZOHO_API_KEY` in your environment variables

### Verifying Webhook Integration

To verify your webhook integration is working correctly:

1. Log into Zoho and create a test invoice
2. Check your application logs for the webhook event
3. Verify that the corresponding action was taken in your application

### Handling Webhook Errors

If webhooks aren't working:

1. Check the Zoho webhook logs in your Zoho account
2. Verify the webhook URL is accessible from the internet
3. Check your application logs for errors
4. Ensure the `ZOHO_API_KEY` is correctly set in your environment variables

## Monitoring and Maintenance

### Setting Up Monitoring

```bash
# Install monitoring tools
pm2 install pm2-server-monit

# Set up log rotation
sudo pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 7
```

### Backup Strategy

Set up daily backups of your database and application state:

```bash
# Create backup script
cat > /home/username/backup.sh << 'EOL'
#!/bin/bash
TIMESTAMP=$(date +"%Y%m%d-%H%M%S")
BACKUP_DIR="/var/backups/precision-vps"
mkdir -p $BACKUP_DIR
cd /var/www/precision-vps
tar -czf "$BACKUP_DIR/precision-vps-$TIMESTAMP.tar.gz" .
find $BACKUP_DIR -type f -mtime +7 -name '*.tar.gz' -delete
EOL

# Make it executable
chmod +x /home/username/backup.sh

# Add to crontab (runs daily at 2 AM)
(crontab -l 2>/dev/null; echo "0 2 * * * /home/username/backup.sh") | crontab -
```

### Disaster Recovery

In case of server failure, follow these steps:

1. Set up a new VPS with the same requirements
2. Clone the repository
3. Restore the latest backup
4. Set up environment variables
5. Follow the installation steps above

## Troubleshooting

### Common Issues

1. **Application not starting after deployment**
   - Check PM2 logs: `pm2 logs precision-app`
   - Verify Node.js version: `node -v`
   - Check for build errors: `cd /var/www/precision-vps && npm run build`

2. **Webhook events not being processed**
   - Check the application logs
   - Verify the webhook URL is accessible
   - Ensure the `ZOHO_API_KEY` is set correctly

3. **SSL certificate errors**
   - Run `sudo certbot renew --dry-run` to check for renewal issues
   - Verify Nginx configuration: `sudo nginx -t`
