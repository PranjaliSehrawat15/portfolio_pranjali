import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          Get In Touch
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-purple-600 dark:text-purple-400">Let's talk about everything!</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <span className="text-2xl">📧</span>
                <span className="text-gray-700 dark:text-gray-300">pranjalisehrawat@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl">📱</span>
                <span className="text-gray-700 dark:text-gray-300">+91 9548286343</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl">📍</span>
                <span className="text-gray-700 dark:text-gray-300">India</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/PranjaliSehrawat15" 
                  target="_blank" 
                  rel="noopener noreferrer"
                   className="px-4 py-2 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-full font-medium hover:bg-purple-600 hover:text-white transition-colors duration-300">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/pranjali-sehrawat-b90557328/"  target="_blank" 
                  rel="noopener noreferrer" className="px-4 py-2 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-full font-medium hover:bg-purple-600 hover:text-white transition-colors duration-300">
                LinkedIn
              </a>
              <a href="https://x.com/" className="px-4 py-2 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-full font-medium hover:bg-purple-600 hover:text-white transition-colors duration-300">
                Twitter
                  </a>
              <a 
                href="https://instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-full font-medium hover:bg-purple-600 hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <form className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white" 
                  required 
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white" 
                  required 
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white" 
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;