'use client';

import type React from 'react';
import emailjs from '@emailjs/browser';
import { useState, type FormEvent } from 'react';
import {
  AtSignIcon as AtIcon,
  MapPinIcon,
  ClockIcon,
  SendIcon,
} from 'lucide-react';
import Button from '../components/button';
import pic from '@/public/contact.jpg';
import Image from 'next/image';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  console.log(formData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        'service_ywotzgv', // Replace with your EmailJS service ID
        'template_gbrdbp6', // Replace with your EmailJS template ID
        templateParams,
        'uuCYNQDKd4LgQnm3N' // Replace with your EmailJS user ID
      );

      setSubmitMessage('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto rounded-2xl overflow-hidden mt-24">
      {/* Contact Information Section */}
      <div className=" relative text-white p-8 md:w-2/5">
        <Image
          src={pic}
          alt="phone pic"
          className="z-10 object-cover top-0 right-0 left-0 bottom-0 absolute w-full h-full blur-[1px] brightness-50"
        />
        <h2 className="text-xl font-semibold mb-8 z-10 relative">
          Contact information
        </h2>

        <div className="space-y-6 z-10 relative">
          <div className="flex items-center gap-4">
            <div className="bg-LightBlue p-2 rounded-full">
              <AtIcon size={20} />
            </div>
            <div>
              <p className="text-sm text-blue-100">Email</p>
              <p>Bluedia.crypto@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-LightBlue p-2 rounded-full">
              <MapPinIcon size={20} />
            </div>
            <div>
              <p className="text-sm text-blue-100">Address</p>
              <p>Iran - Mashhad</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-LightBlue p-2 rounded-full">
              <ClockIcon size={20} />
            </div>
            <div>
              <p className="text-sm text-blue-100">Working hours</p>
              <p>8 a.m. - 12 p.m.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white text-DarkBlue p-8 md:w-3/5">
        <h2 className="text-xl font-semibold mb-8">Get in touch</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm">
                Your name
              </label>
              <input
                type="text"
                placeholder="Reza"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-DarkBlue/85 outline-none rounded-lg px-3 py-2 text-white"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Your email <span className="text-LightBlue">*</span>
              </label>
              <input
                type="email"
                placeholder="Example@gmail.com"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-DarkBlue/85 outline-none rounded-lg px-3 py-2 text-white"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="block text-sm">
              Subject <span className="text-LightBlue">*</span>
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Business"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-DarkBlue/85 outline-none rounded-lg px-3 py-2 text-white"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm">
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-DarkBlue/85 outline-none rounded-lg px-3 py-2 text-white"
              placeholder="Please include all relevant information"
              required
            />
          </div>

          {submitMessage && (
            <div className="py-2 px-3 bg-LightBlue/50 rounded-lg text-sm">
              {submitMessage}
            </div>
          )}

          <div className="flex justify-end">
            <Button
              isDisabled={isSubmitting}
              classes="bg-DarkBlue/90 rounded-lg text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-DarkBlue transition-colors disabled:opacity-70"
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
              <SendIcon size={16} />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
