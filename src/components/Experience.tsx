import React from 'react';
import { MapPin, Calendar, ExternalLink, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Solar Secure Solution",
      position: "Data Scientist",
      location: "Bangalore, Karnataka",
      duration: "Nov. 2024 - Jan. 2025",
      type: "Internship",
      achievements: [
        "Conducted end-to-end data analysis on hotel bookings dataset with advanced preprocessing and feature engineering",
        "Executed spatial analysis using Plotly choropleths to map guest origins and analyze pricing trends",
        "Applied statistical techniques including correlation analysis and Lasso regression for feature selection",
        "Built 95.5% accurate Random Forest model for hotel booking cancellation predictions"
      ],
      technologies: ["Python", "Plotly", "Random Forest", "Feature Engineering", "Statistical Analysis"],
      link: "#"
    },
    {
      company: "Trainity",
      position: "Data Analyst",
      location: "Jaipur, Rajasthan", 
      duration: "Dec. 2023 - March 2024",
      type: "Internship",
      achievements: [
        "Spearheaded data analysis for 8+ high-value projects across social media, market trends, and financial case studies",
        "Utilized SQL for complex querying and data manipulation, delivering critical insights for strategic decisions",
        "Applied advanced data visualization techniques for projects including hiring processes and IMDB movie analysis",
        "Performed time-series analysis for call volume trends, identifying patterns for workforce optimization"
      ],
      technologies: ["SQL", "Data Visualization", "Statistical Modeling", "Time-series Analysis", "Excel"],
      link: "#"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Building expertise through hands-on experience in data science and analytics across diverse industries.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg hidden md:block"></div>
                
                <div className="md:ml-16 bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-xl hover:bg-white/30 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.position}</h3>
                        <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {exp.type}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">{exp.company}</h4>
                      
                      <div className="flex flex-col sm:flex-row gap-4 mb-4 text-sm text-gray-700 dark:text-gray-300">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>

                    <a 
                      href={exp.link}
                      className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300 mt-4 md:mt-0"
                    >
                      <span className="text-sm font-medium">View Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="mb-6">
                    <h5 className="flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3">
                      <TrendingUp className="w-4 h-4" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-purple-800 dark:text-purple-200 rounded-full text-xs font-medium border border-purple-300/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;