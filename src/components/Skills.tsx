import React from 'react';
import { Code, Database, BarChart, Brain, Palette, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "SQL"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      skills: ["Scikit-learn", "TensorFlow", "XGBoost"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Database,
      title: "Data Tools",
      skills: ["Pandas & NumPy", "MySQL", "Jupyter Notebooks"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: BarChart,
      title: "Visualization",
      skills: ["Tableau", "Matplotlib & Seaborn", "Plotly"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Palette,
      title: "Analytics Tools",
      skills: ["Advanced Excel", "Google Analytics", "KNIME Analytics"],
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Leadership", "Communication", "Problem Solving"],
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for transforming data into actionable insights and building intelligent solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-xl hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-white/20 rounded-lg p-3 border border-white/20"
                  >
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies */}
        <div className="mt-16 bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Data Manipulation & Interpretation",
              "Statistical Analysis & Modeling", 
              "Machine Learning & AI",
              "Business Intelligence & Strategy",
              "Data Visualization & Storytelling",
              "Database Management & Querying",
              "Predictive Analytics & Forecasting",
              "Stakeholder Management & Communication"
            ].map((competency, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-lg p-3 text-center border border-purple-300/40"
              >
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{competency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;