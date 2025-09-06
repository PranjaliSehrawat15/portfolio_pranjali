import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          About Me
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a second-year Computer Science Engineering student passionate about web development 
              and creating digital experiences that make an impact. I enjoy turning complex problems 
              into simple, beautiful, and intuitive designs.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
              When I'm not coding, you can find me exploring new technologies, contributing to open source, 
              or sharing my knowledge through tech blogs. I believe in continuous learning and 
              staying updated with the latest industry trends.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">1+</div>
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-400">Technologies</div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full flex items-center justify-center animate-pulse">
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg animate-bounce">
 <img 
         src="https://img.icons8.com/?size=100&id=32880&format=png&color=000000" 
             alt="Icon" 
             className="w-8 h-8"
              />              </div>
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-100">
         <img 
         src="https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000" 
             alt="Icon" 
             className="w-8 h-8"
              />
            </div>

              <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-200">
 <img 
         src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" 
             alt="Icon" 
             className="w-8 h-8"
              />              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-300">
 <img 
         src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" 
             alt="Icon" 
             className="w-8 h-8"
              />              </div>
              <div className="text-8xl text-white">👩‍💻</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;