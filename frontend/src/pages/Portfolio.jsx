import React, { useState, useEffect, useRef } from 'react';
import { 
  Code2, Brain, Sparkles, Award, Briefcase, GraduationCap, 
  Mail, Phone, Linkedin, ExternalLink, ChevronRight,
  Terminal, Database, Globe, Cpu, Star, Users, Trophy
} from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  personalInfo, 
  education, 
  skills, 
  projects, 
  experience, 
  certifications,
  achievements 
} from '../data/mock';
import '../styles/portfolio.css';

const Portfolio = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleSections, setVisibleSections] = useState({});

  // Typing animation effect
  useEffect(() => {
    const roles = personalInfo.roles;
    const currentText = roles[currentRole];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRole]);

  // Loading animation
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-center space-y-6">
          <div className="spinner mx-auto"></div>
          <p className="text-cyan-400 text-lg animate-pulse">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="fade-in">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
                Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
              </h1>
            </div>
            
            <div className="fade-in-delay-1 h-16 sm:h-20">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300">
                {displayedText}
                <span className="typing-cursor"></span>
              </h2>
            </div>

            <p className="fade-in-delay-2 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {personalInfo.tagline}
            </p>

            <div className="fade-in-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-black font-semibold px-8 py-6 text-lg btn-glow glow-effect"
              >
                View My Work
                <ChevronRight className="ml-2" size={20} />
              </Button>
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg"
              >
                Get In Touch
              </Button>
            </div>

            {/* Floating icons */}
            <div className="flex justify-center gap-6 pt-8 fade-in-delay-3">
              {[Brain, Code2, Terminal, Database].map((Icon, index) => (
                <div
                  key={index}
                  className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-cyan-500/20 hover:bg-white/10 hover:border-cyan-500/40 transition-all duration-300 float"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Icon size={24} className="text-cyan-400" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight size={32} className="text-cyan-400 rotate-90" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 bg-gradient-to-b from-black to-gray-900/50 ${visibleSections.about ? 'fade-in' : 'opacity-0'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto"></div>
            </div>

            <Card className="glass-card p-8 sm:p-12 border-cyan-500/20 transition-all duration-300">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {personalInfo.about}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-white/5 rounded-lg border border-cyan-500/20">
                  <Trophy className="mx-auto mb-3 text-cyan-400" size={32} />
                  <h3 className="text-2xl font-bold gradient-text">4+</h3>
                  <p className="text-gray-400 text-sm">Projects Completed</p>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-lg border border-cyan-500/20">
                  <Users className="mx-auto mb-3 text-cyan-400" size={32} />
                  <h3 className="text-2xl font-bold gradient-text">20+</h3>
                  <p className="text-gray-400 text-sm">Students Mentored</p>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-lg border border-cyan-500/20">
                  <Star className="mx-auto mb-3 text-cyan-400" size={32} />
                  <h3 className="text-2xl font-bold gradient-text">3</h3>
                  <p className="text-gray-400 text-sm">Certifications</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className={`py-20 ${visibleSections.education ? 'fade-in' : 'opacity-0'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="gradient-text">Education</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto"></div>
            </div>

            <Card className="glass-card p-8 border-cyan-500/20 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <GraduationCap className="text-cyan-400" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{education.degree}</h3>
                  <p className="text-cyan-400 font-semibold mb-2">{education.institution}</p>
                  <p className="text-gray-400">{education.duration}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section - Continued in next part due to length */}
      <section id="skills" className={`py-20 bg-gradient-to-b from-gray-900/50 to-black ${visibleSections.skills ? 'fade-in' : 'opacity-0'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Skills & <span className="gradient-text">Expertise</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Programming Languages */}
              <Card className="glass-card p-6 border-cyan-500/20">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Code2 className="mr-3 text-cyan-400" size={24} />
                  Programming Languages
                </h3>
                <div className="space-y-4">
                  {skills.programming.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-bar-fill" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Web Technologies */}
              <Card className="glass-card p-6 border-cyan-500/20">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Globe className="mr-3 text-cyan-400" size={24} />
                  Web Technologies
                </h3>
                <div className="space-y-4">
                  {skills.web.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-bar-fill" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* AI & ML */}
              <Card className="glass-card p-6 border-cyan-500/20">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Brain className="mr-3 text-cyan-400" size={24} />
                  AI & Machine Learning
                </h3>
                <div className="space-y-4">
                  {skills.ai.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-bar-fill" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Tools & Platforms */}
              <Card className="glass-card p-6 border-cyan-500/20">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Terminal className="mr-3 text-cyan-400" size={24} />
                  Tools & Platforms
                </h3>
                <div className="space-y-4">
                  {skills.tools.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-bar-fill" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Concepts */}
            <Card className="glass-card p-6 border-cyan-500/20 mt-8">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Cpu className="mr-3 text-cyan-400" size={24} />
                Core Concepts
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.concepts.map((concept, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="px-4 py-2 text-sm border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
                  >
                    {concept}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section - Will continue in next message due to length limit */}
      <section id="projects" className={`py-20 ${visibleSections.projects ? 'fade-in' : 'opacity-0'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="glass-card p-6 border-cyan-500/20 hover:scale-[1.02] transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <ExternalLink className="text-cyan-400 cursor-pointer hover:scale-110 transition-transform" size={20} />
                  </div>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-start">
                          <ChevronRight className="mr-2 text-cyan-400 flex-shrink-0 mt-0.5" size={16} />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx}
                        variant="outline"
                        className="px-3 py-1 text-xs border-cyan-500/30 text-cyan-400 bg-cyan-500/5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 bg-gradient-to-b from-black to-gray-900/50 ${visibleSections.experience ? 'fade-in' : 'opacity-0'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Work <span className="gradient-text">Experience</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto"></div>
            </div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <Card key={exp.id} className="glass-card p-6 sm:p-8 border-cyan-500/20 relative">
                  {index !== experience.length - 1 && (
                    <div className="hidden sm:block absolute left-[2.75rem] top-16 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-transparent"></div>
                  )}
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-cyan-500/10 rounded-lg relative z-10">
                      <Briefcase className="text-cyan-400" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                        <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 w-fit mt-2 sm:mt-0">
                          {exp.type}
                        </Badge>
                      </div>
                      <p className="text-cyan-400 font-semibold mb-1">{exp.company}</p>
                      <p className="text-gray-500 text-sm mb-4">{exp.duration}</p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-gray-400 text-sm flex items-start">
                            <ChevronRight className="mr-2 text-cyan-400 flex-shrink-0 mt-0.5" size={16} />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className={`py-20 ${visibleSections.certifications ? 'fade-in' : 'opacity-0'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Certifications */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                  <span className="gradient-text">Certifications</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certifications.map((cert) => (
                  <Card key={cert.id} className="glass-card p-6 border-cyan-500/20 text-center hover:scale-105 transition-all duration-300">
                    <Award className="mx-auto mb-4 text-cyan-400" size={40} />
                    <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                  <span className="gradient-text">Achievements</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto"></div>
              </div>

              <Card className="glass-card p-8 border-cyan-500/20">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <Star className="mr-3 text-cyan-400 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 bg-gradient-to-b from-gray-900/50 to-black ${visibleSections.contact ? 'fade-in' : 'opacity-0'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Get In <span className="gradient-text">Touch</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 mx-auto mb-6"></div>
              <p className="text-gray-400 text-lg">Let's collaborate on something amazing!</p>
            </div>

            <Card className="glass-card p-8 sm:p-12 border-cyan-500/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex flex-col items-center p-6 bg-white/5 rounded-lg border border-cyan-500/20 hover:bg-white/10 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <Mail className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="font-semibold text-white mb-2">Email</h3>
                  <p className="text-sm text-gray-400 text-center break-all">{personalInfo.email}</p>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 bg-white/5 rounded-lg border border-cyan-500/20 hover:bg-white/10 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <Linkedin className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="font-semibold text-white mb-2">LinkedIn</h3>
                  <p className="text-sm text-gray-400 text-center">Connect with me</p>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex flex-col items-center p-6 bg-white/5 rounded-lg border border-cyan-500/20 hover:bg-white/10 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <Phone className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="font-semibold text-white mb-2">Phone</h3>
                  <p className="text-sm text-gray-400 text-center">{personalInfo.phone}</p>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
