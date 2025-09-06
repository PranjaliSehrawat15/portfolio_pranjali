import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'React.js', icon: '⚛️', level: 85, description: 'Building dynamic and responsive user interfaces with modern React practices.' },
    { name: 'JavaScript', icon: '🟨', level: 80, description: 'Creating interactive web experiences with vanilla JS and modern ES6+ features.' },
    { name: 'CSS & Preprocessors', icon: '🎨', level: 90, description: 'Crafting beautiful designs with CSS, SASS, and responsive design principles.' },
    { name: 'HTML5', icon: '📄', level: 95, description: 'Building semantic, accessible website structures with modern HTML5.' },
    { name: 'Performance Optimization', icon: '🚀', level: 75, description: 'Optimizing websites for speed and efficiency across all devices.' },
    { name: 'Responsive Design', icon: '📱', level: 88, description: 'Creating websites that work beautifully on all screen sizes and devices.' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          My Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-400">{skill.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{skill.description}</p>
              <div className="flex items-center gap-4">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-purple-600 dark:bg-purple-400 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;