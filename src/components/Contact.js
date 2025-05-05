import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-200 py-12 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        
        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Message</label>
            <textarea
              rows="5"
              placeholder="Type your message..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info & Map */}
        <div className="space-y-4 text-sm">
          <h3 className="text-xl font-semibold">Get in touch</h3>
          <p><strong>Address:</strong> Army Institute of Technology, Pune</p>
          <p><strong>Email:</strong> akrao032@gmail.com</p>
          <p><strong>Phone:</strong> +91 6378715854</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
