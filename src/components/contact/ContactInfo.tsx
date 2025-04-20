
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="flex">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-precision-purple-light text-precision-purple">
            <Phone className="w-6 h-6" />
          </div>
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-medium text-precision-dark">Call Us</h4>
          <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
          <p className="text-gray-600">Mon-Fri: 24/7 Support</p>
        </div>
      </div>
      
      <div className="flex">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-precision-purple-light text-precision-purple">
            <Mail className="w-6 h-6" />
          </div>
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-medium text-precision-dark">Email Us</h4>
          <p className="text-gray-600 mt-1">support@precisionvps.com</p>
          <p className="text-gray-600">We'll respond within 24 hours</p>
        </div>
      </div>
      
      <div className="flex">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-precision-purple-light text-precision-purple">
            <MapPin className="w-6 h-6" />
          </div>
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-medium text-precision-dark">Visit Us</h4>
          <p className="text-gray-600 mt-1">123 Trading Avenue</p>
          <p className="text-gray-600">New York, NY 10001</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
