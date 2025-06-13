import React from 'react';
import { ExternalLink, Github, TrendingUp, Users, Database, Brain } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Customer Churn Prediction in Telecom Industry",
      description: "Built an 88% accurate XGBoost model to predict customer churn, implementing feature engineering with Customer Engagement Score and RFM analysis to enhance model performance.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "XGBoost", "Feature Engineering", "RFM Analysis", "Machine Learning"],
      achievements: [
        "88% model accuracy with XGBoost algorithm",
        "Engineered Customer Engagement Score for better predictions",
        "Delivered personalized reward program recommendations",
        "Enhanced Customer Lifetime Value (CLV) maximization strategy"
      ],
      category: "Machine Learning",
      duration: "March 2025 - May 2025",
      impact: "Directly impacted company's bottom line and customer satisfaction",
      githubLink: "#",
      liveLink: "#",
      icon: Brain
    },
    {
      title: "Foreign Visa Analysis Dashboard",
      description: "Comprehensive Tableau analysis of 167,000+ foreign worker visa cases, identifying key trends and patterns to support data-driven immigration policy insights.",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Tableau", "Data Visualization", "Statistical Analysis", "Dashboard Design"],
      achievements: [
        "Analyzed 167,000+ visa cases with 140,031 certified applications",
        "Identified California as top state for foreign worker applications",
        "Revealed 'Software Engineer' and 'H-1B' as leading job/visa combinations",
        "Tracked salary trends (2008-2015) across various roles"
      ],
      category: "Data Visualization",
      duration: "March 2025 - May 2025",
      impact: "Provided insights for immigration policy decision-making",
      githubLink: "#",
      liveLink: "#",
      icon: Database
    },
    {
      title: "Hotel Booking Prediction System",
      description: "End-to-end data analysis pipeline for hotel bookings with 95.5% accuracy using Random Forest, featuring spatial analysis and advanced preprocessing techniques.",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Random Forest", "Plotly", "Spatial Analysis", "Feature Selection"],
      achievements: [
        "95.5% accuracy in booking cancellation predictions",
        "Implemented spatial analysis with Plotly choropleths",
        "Applied Lasso regression for optimal feature selection",
        "Performed advanced data preprocessing and outlier handling"
      ],
      category: "Predictive Analytics",
      duration: "Nov 2024 - Jan 2025",
      impact: "Enabled data-driven booking management strategies",
      githubLink: "#",
      liveLink: "#",
      icon: TrendingUp
    }
  ];

  const categoryColors = {
    "Machine Learning": "from-purple-500 to-purple-600",
    "Data Visualization": "from-blue-500 to-blue-600", 
    "Predictive Analytics": "from-teal-500 to-teal-600"
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing real-world applications of data science and machine learning across diverse industries and use cases.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white/20 backdrop-blur-md rounded-3xl overflow-hidden border border-white/30 shadow-xl hover:bg-white/30 transition-all duration-500 hover:scale-[1.02] group"
            >
              <div className="lg:flex">
                {/* Project Image */}
                <div className="lg:w-2/5 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${categoryColors[project.category]} text-white rounded-full text-sm font-semibold`}>
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className={`p-3 bg-gradient-to-r ${categoryColors[project.category]} rounded-full`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:w-3/5 p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-2">{project.duration}</p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex gap-2 ml-4">
                      <a 
                        href={project.githubLink}
                        className="p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 hover:scale-110"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a 
                        href={project.liveLink}
                        className="p-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-300 hover:scale-110"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Impact Statement */}
                  <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-4 mb-6 border border-purple-300/30">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">Business Impact</span>
                    </div>
                    <p className="text-sm text-gray-800 dark:text-gray-200">{project.impact}</p>
                  </div>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Key Achievements
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {project.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-xs text-gray-700 dark:text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-white/30 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium border border-white/40 hover:bg-white/40 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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