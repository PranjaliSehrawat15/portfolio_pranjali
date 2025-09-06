import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 dark:text-white animate-fade-in-up">
            Hi, I'm <span className="text-purple-600 dark:text-purple-400">Pranjali Sehrawat</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-6 animate-fade-in-up delay-100">
            Web Developer & CSE Student
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 animate-fade-in-up delay-200">
            A passionate second-year B.Tech CSE student specializing in creating interactive, 
            responsive websites with modern technologies.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-full font-medium hover:bg-purple-600 hover:text-white transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center animate-fade-in-right">
          <div className="relative w-full max-w-md">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-transform duration-300 animate-float">
              <div className="font-mono text-sm md:text-base">
                <div className="text-red-500 dark:text-red-400">&lt;developer&gt;</div>
                <div className="ml-4 my-2">
                  <span className="text-blue-600 dark:text-blue-400">name: </span>
                  <span className="text-green-600 dark:text-green-400">"Pranjali Sehrawat"</span>
                </div>
                <div className="ml-4 my-2">
                  <span className="text-blue-600 dark:text-blue-400">focus: </span>
                  <span className="text-green-600 dark:text-green-400">"Web Development"</span>
                </div>
                <div className="ml-4 my-2">
                  <span className="text-blue-600 dark:text-blue-400">education: </span>
                  <span className="text-green-600 dark:text-green-400">"B.Tech CSE II Year"</span>
                </div>
                <div className="text-red-500 dark:text-red-400">&lt;/developer&gt;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-gray-600 dark:text-gray-400">
          <span className="text-sm mb-2">Scroll down</span>
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;