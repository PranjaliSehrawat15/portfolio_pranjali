import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Productive Dashboard',
      description: 'It is a minimalist web app that helps you stay focused, organized, and motivated.It combines essential tools like a task list, Pomodoro timer, weather updates, and motivational quotes — all in one place.',
      tags: ['Java Script'],
    },
    {
      title: 'Episode 11',
      description: 'Episode_11 is a sleek movie discovery platform built with React. It lets users search and browse films via the TMDB API, watch trailers, manage personalized watchlists, and filter by genres. ',
      tags: ['JavaScript', 'API'],
    },
    {
      title: 'Mega Blog App',
      description: 'Mega Blog App is a modern blogging platform with user authentication, rich-text editing, and full post management. Built with React and Appwrite, it offers a clean UI for creating, editing, and deleting blog posts.',
      tags: ['React', 'Appwrite'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 transition-transform"
            >
              <div className="h-48 bg-gradient-to-r from-purple-500 to-purple-700 relative">
                <div className="absolute top-4 right-4 flex gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-white dark:bg-gray-900 text-purple-600 dark:text-purple-400 text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
                  >
                    Live Demo
                  </a>
                  <a 
                    href="#" 
                    className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;