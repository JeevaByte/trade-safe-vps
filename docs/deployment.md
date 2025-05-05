
# Deployment Guide for PrecisionVPS

This document outlines the deployment process and integrations for the PrecisionVPS platform.

## GitHub Actions Deployment Pipeline

Our project uses GitHub Actions to automate deployments to our production VPS. The workflow is defined in `.github/workflows/deploy.yml`.

### Setting up GitHub Secrets

For the deployment workflow to function properly, add the following secrets to your GitHub repository:

1. `VPS_HOST`: The IP address or domain of your VPS
2. `VPS_USERNAME`: SSH username for accessing the VPS
3. `VPS_SSH_KEY`: Private SSH key for authentication

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

# Install dependencies and build
npm ci --production
npm run build

# Start the application with PM2
pm2 start npm --name "precision-app" -- start
pm2 save
pm2 startup
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

### Setting Up Vercel Integration

If using Vercel for frontend hosting:

1. Create a serverless function in your Vercel project to handle webhook events
2. Set up environment variables in Vercel for storing Zoho API credentials
3. Implement API endpoints for updating your application data based on webhook events

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
