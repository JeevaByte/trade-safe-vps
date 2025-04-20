
import React from 'react';
import ContactForm from '../contact/ContactForm';
import ContactInfo from '../contact/ContactInfo';
import DataCenterStatus from '../contact/DataCenterStatus';

const Contact = () => {
  return (
    <section className="section bg-gray-50" id="contact">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="gradient-text">Our Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our VPS services? Our team is ready to assist you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2">
            <ContactForm />
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6 text-precision-dark">Get in Touch</h3>
              <ContactInfo />
              <DataCenterStatus apiKey="YOUR_MAPBOX_PUBLIC_TOKEN" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
