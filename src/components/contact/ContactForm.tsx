
import React, { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real implementation, you would send this data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-precision-dark mb-1">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-precision-purple focus:border-precision-purple transition-all"
          placeholder="John Doe"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-precision-dark mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-precision-purple focus:border-precision-purple transition-all"
          placeholder="john@example.com"
        />
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-precision-dark mb-1">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-precision-purple focus:border-precision-purple transition-all"
        >
          <option value="">Select a subject</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Technical Support">Technical Support</option>
          <option value="Sales Question">Sales Question</option>
          <option value="Custom Solution">Custom Solution</option>
          <option value="Other">Other</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-precision-dark mb-1">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-precision-purple focus:border-precision-purple transition-all"
          placeholder="How can we help you?"
        ></textarea>
      </div>
      
      <button
        type="submit"
        className="w-full btn-primary py-3"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
