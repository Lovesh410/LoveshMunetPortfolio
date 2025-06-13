import React from 'react';
import { TrendingUp, Award, Users, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: TrendingUp,
      title: "95.5% Accuracy",
      description: "Hotel booking prediction model using Random Forest"
    },
    {
      icon: Target,
      title: "8+ Projects",
      description: "High-value data analysis projects across industries"
    },
    {
      icon: Award,
      title: "90th Percentile",
      description: "CMAT score - Top 10% of 60k applicants"
    },
    {
      icon: Users,
      title: "End-to-End",
      description: "Data pipeline implementation and ML deployment"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Info */}
          <div className="relative">
            <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-xl">
              <div className="text-center mb-6">
                <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg inline-block mb-4">
                  Available for Work
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Lovesh Munet</h3>
                <p className="text-purple-600 dark:text-purple-400 font-semibold mb-4">Analytics & Management Professional</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  MBA in Data Science & Analytics<br />
                  Jain University, Bangalore
                </p>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Professional Journey</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I am a passionate Analytics & Management Professional with expertise in machine learning, statistical analysis, and business intelligence. 
                With an MBA from Jain University focused on Data Science and Analytics, I specialize in transforming complex 
                datasets into actionable insights that drive strategic decision-making.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                My experience spans across various industries including telecommunications, hospitality, and finance, where I've 
                successfully implemented end-to-end data solutions, built predictive models with high accuracy rates, and delivered 
                measurable business value through data-driven recommendations.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105"
                >
                  <item.icon className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-2" />
                  <h4 className="font-bold text-gray-800 dark:text-white text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-xs">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;