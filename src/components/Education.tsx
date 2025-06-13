import React from 'react';
import { GraduationCap, Award, Trophy, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "MBA in Data Science and Analytics",
      institution: "Jain University",
      location: "Bangalore, Karnataka", 
      duration: "July 2023 - July 2025",
      grade: "9.0 CGPA",
      status: "Current",
      description: "Specialized program focused on advanced data science methodologies, machine learning, and business analytics with hands-on experience in real-world projects."
    },
    {
      degree: "Bachelor of Engineering (B.E.)",
      institution: "DSATM",
      location: "Bangalore, Karnataka",
      duration: "Aug 2013 - Aug 2017", 
      grade: "6.1 CGPA",
      status: "Completed",
      description: "Foundation in engineering principles with exposure to technical problem-solving and analytical thinking."
    },
    {
      degree: "XII (Science)",
      institution: "St. Anthony's Sr. Sec. School",
      location: "Rajasthan",
      duration: "May 2012 - May 2013",
      grade: "7.4 CGPA", 
      status: "Completed",
      description: "Science stream with strong foundation in mathematics and analytical subjects."
    },
    {
      degree: "X (Secondary)",
      institution: "St. Anthony's Sr. Sec. School", 
      location: "Rajasthan",
      duration: "May 2010 - May 2011",
      grade: "8.6 CGPA",
      status: "Completed",
      description: "Strong academic foundation with focus on core subjects and extracurricular activities."
    }
  ];

  const achievements = [
    {
      title: "CMAT",
      score: "90th Percentile",
      description: "Ranked 5,900 out of 60,000 applicants - Top 10%",
      date: "April 2022",
      icon: Trophy
    },
    {
      title: "CAT",
      score: "82nd Percentile", 
      description: "Ranked 39,000 out of 2,55,000 applicants - Top 18%",
      date: "Nov 2022",
      icon: Award
    },
    {
      title: "NMAT",
      score: "213/360",
      description: "Top 20 percentile among all test takers",
      date: "July 2020", 
      icon: Trophy
    },
    {
      title: "RPET",
      score: "77th Percentile",
      description: "Ranked 13,900 out of 61,000 applicants - Top 23%",
      date: "June 2013",
      icon: Award
    }
  ];

  const certificates = [
    {
      title: "Data Analysis Job Simulation",
      issuer: "Forage - Red Bull",
      duration: "June 2023 - Nov 2023",
      description: "On-premise sales data analysis simulation with real-world business scenarios",
      type: "Professional Simulation"
    },
    {
      title: "Business Analysis Certification",
      issuer: "LinkedIn Learning",
      duration: "May 2023 - June 2023", 
      description: "Certified by IIBA®, PMI, and CPE Credit providers",
      type: "Professional Certification"
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Education & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Academic excellence and continuous learning in data science, analytics, and business intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Column */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-purple-600" />
              Academic Qualifications
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-xl hover:bg-white/30 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-1">{edu.degree}</h4>
                      <h5 className="text-purple-600 dark:text-purple-400 font-semibold mb-2">{edu.institution}</h5>
                      
                      <div className="flex flex-col sm:flex-row gap-2 mb-3 text-sm text-gray-700 dark:text-gray-300">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-3">
                        {edu.description}
                      </p>
                    </div>
                    
                    <div className="text-right ml-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
                        edu.status === 'Current' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-blue-500 text-white'
                      }`}>
                        {edu.status}
                      </div>
                      <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                        {edu.grade}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Certifications Column */}
          <div className="space-y-8">
            {/* Academic Achievements */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                Academic Achievements
              </h3>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
                        <achievement.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 dark:text-white text-sm">{achievement.title}</h4>
                        <p className="text-purple-600 dark:text-purple-400 font-semibold text-sm">{achievement.score}</p>
                        <p className="text-gray-700 dark:text-gray-300 text-xs mt-1">{achievement.description}</p>
                        <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">{achievement.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-500" />
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certificates.map((cert, index) => (
                  <div 
                    key={index}
                    className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all duration-300"
                  >
                    <div className="mb-2">
                      <h4 className="font-bold text-gray-800 dark:text-white text-sm">{cert.title}</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">{cert.issuer}</p>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-xs mb-2">{cert.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400 text-xs">{cert.duration}</span>
                      <span className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-medium">
                        {cert.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;