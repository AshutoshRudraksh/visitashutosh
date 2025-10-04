'use client';

import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  Calendar, 
  Building, 
  Award, 
  Code, 
  Database, 
  Cloud, 
  Brain, 
  ChevronRight, 
  ExternalLink, 
  Download,
  Send,
  User,
  GraduationCap,
  TrendingUp,
  Zap,
  Target,
  Briefcase
} from 'lucide-react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const experiences = [
    {
      title: "Software Engineer",
      company: "Tekainos (Startup)",
      period: "Aug 2025 – Present",
      location: "Remote, USA",
      achievements: [
        "Designing scalable ETL AI pipelines integrating Salesforce CRM, accounting, and scheduling systems via AWS/GCP Lambda & Cloud Functions",
        "Building MCP (Model Context Protocol) server layer in FastAPI to standardize schema inference, field mapping & connector generation",
        "Cut onboarding time for new integrations from 6 weeks to 2 days through automated processes"
      ],
      technologies: ["Python", "FastAPI", "AWS", "Lambda", "Redis", "Salesforce CRM", "MCP"],
      current: true
    },
    {
      title: "Software Engineer",
      company: "Wexner Medical Center",
      period: "May 2024 – Aug 2024",
      location: "Ohio, USA",
      achievements: [
        "Automated triage pipeline by cutting human review queue by 60%, saving 100+ staff hours per week and ~$250K annually",
        "Prompt Engineered LLaMA on 5K+ clinical documents, boosting classification accuracy by 30%",
        "Designed and integrated React/TypeScript dashboards with backend REST APIs, delivering real-time clinical data visualization"
      ],
      technologies: ["Spring Boot", "JavaScript", "React", "TypeScript", "FastAPI", "Python", "MongoDB", "GitHub Actions", "Docker"],
      current: false
    },
    {
      title: "Research Assistant",
      company: "Ohio State University",
      period: "Jan 2024 – Apr 2024",
      location: "Ohio, USA",
      achievements: [
        "Built a knowledge-graph–driven RAG system with Neo4j, LangChain, and GPT-4, boosting retrieval accuracy by 30%",
        "Engineered Airflow-orchestrated ETL pipelines for supercomputer log analysis, reducing manual workload by 40%",
        "Built context-aware conversational AI interface, enabling multi-turn natural language queries"
      ],
      technologies: ["Python", "Spring Boot", "JavaScript", "Neo4j", "GPT-4", "LangChain", "FastAPI", "MongoDB", "Airflow"],
      current: false
    },
    {
      title: "Software Engineer",
      company: "CloudLead Technologies",
      period: "Jan 2022 – Jun 2023",
      location: "Pune, India",
      achievements: [
        "Built Spring Boot validation microservice with Redis velocity checks, blocking fraud in real time & ensuring 99.99% uptime on 2M+ monthly transactions",
        "Designed AWS data pipeline (EC2, RDS, S3) to process 5M+ transactions into 25+ features, boosting credit-risk model accuracy",
        "Collaborated with data science and product teams to engineer top predictive features, improving loan approvals and generating $120K in new revenue"
      ],
      technologies: ["Java", "Spring Boot", "Python", "Redis", "SQL", "AWS", "Docker", "Kubernetes", "Apache Kafka"],
      current: false
    }
  ];

  const projects = [
    {
      title: "NAVAI",
      subtitle: "HACK OH/IO - Accessibility Hack Award",
      description: "Built vision-to-voice navigation tool for the visually impaired, delivering real-time audio guidance and cutting ~$15K in hardware costs with a software-only solution.",
      technologies: ["YOLOv8", "Flutter", "gTTS", "LLaMA-3", "OpenCV", "Grok API"],
      link: "https://github.com/AshutoshRudraksh/NAVAIv02",
      award: true,
      impact: "Accessibility Innovation"
    },
    {
      title: "Travel Copilot",
      subtitle: "UC Berkeley AI Hackathon",
      description: "Developed AI travel copilot using GPT-4 + APIs to generate personalized itineraries from real-time flight, hotel, and weather data.",
      technologies: ["OpenAI GPT-4", "React (Next.js)", "AWS", "Lambda", "DynamoDB"],
      link: "https://github.com/AshutoshRudraksh/TripTune.ai",
      award: false,
      impact: "AI-Powered Travel"
    },
    {
      title: "Trading & Market Data MCP Server",
      subtitle: "Personal Project",
      description: "Vibe-coded MCP server for equities/crypto streaming, handling 10K+ updates/min with order simulation and portfolio analytics.",
      technologies: ["MCP", "FastAPI", "WebSockets", "Redis", "Alpha Vantage API", "Docker"],
      link: "https://github.com/AshutoshRudraksh/tradewithjarvis",
      award: false,
      impact: "High-Performance Streaming"
    }
  ];

  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Python", "Java", "Bash", "JavaScript (ES5/ES6+)", "TypeScript"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Web Frameworks",
      icon: Building,
      skills: ["Spring Boot", "PyTorch", "FastAPI", "Django", "Node.js (Express)", "React (Next.js)", "Flutter"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS (SageMaker, Lambda, Bedrock)", "GCP", "Terraform", "Airflow", "Docker", "Kubernetes"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["SQL", "MongoDB", "Kafka", "ChromaDB", "Redis", "Hadoop", "Spark", "Neo4j"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "AI/LLM Tools",
      icon: Brain,
      skills: ["Claude SDK", "Agentic CLI", "OpenRouter", "RAGs", "OpenAI", "Hugging Face", "Lang Frameworks", "MCP", "n8n"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (could integrate with email service)
    const mailtoLink = `mailto:rudrakshashutosh@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-600/20"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-300 text-sm font-medium">Open for opportunities</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ashutosh <span className="gradient-text">Rudraksh</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-medium">
              Software Engineer
            </h2>
            
            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Experience in building <span className="text-white font-semibold">large-scale infrastructures, <span className="text-white font-semibold">backend microservice architectures, and <span className="text-white font-semibold">AI systems. Delivered customer-facing product solutions that drive <span className="text-white font-semibold">real business impact. 
              <span className="text-white font-semibold"> Saved $250K+ annually through automation</span>, 
              handled <span className="text-white font-semibold">2M+ transactions/month with 99.99% uptime</span>, and <span className="text-white font-semibold">generated $120K+ in revenue</span> through data-driven innovation.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base">
              <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                <MapPin className="h-4 w-4" />
                <span>Atlanta, GA</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                <Phone className="h-4 w-4" />
                <span>+1(614)-313-9582</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                <Mail className="h-4 w-4" />
                <span>rudrakshashutosh@gmail.com</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-3 px-8 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Send className="h-5 w-5" />
                Get In Touch
              </a>
              <a 
                href="/attached_assets/Ashutosh_Rudraksh_Resume.pdf" 
                className="inline-flex items-center gap-2 bg-white/10 text-white font-medium py-3 px-8 rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20 hover:scale-105"
              >
                <Download className="h-5 w-5" />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <a 
                href="https://github.com/ashutoshrudraksh" 
                className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6 text-white" />
              </a>
              <a 
                href="https://linkedin.com/in/ashutoshrudraksh" 
                className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6 text-white" />
              </a>
              <a 
                href="mailto:rudrakshashutosh@gmail.com" 
                className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10"
                aria-label="Email Contact"
              >
                <Mail className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full">
              <TrendingUp className="h-8 w-8 text-green-400" />
            </div>
            <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">$250K+</div>
            <div className="text-gray-400">Annual Savings Through AI Automation</div>
          </div>
          <div className="text-center p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full">
              <Zap className="h-8 w-8 text-blue-400" />
            </div>
            <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">99.99%</div>
            <div className="text-gray-400">System Uptime on 2M+ Transactions</div>
          </div>
          <div className="text-center p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full">
              <Target className="h-8 w-8 text-purple-400" />
            </div>
            <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">$120K+</div>
            <div className="text-gray-400">Revenue Generated Through Innovation</div>
          </div>
        </div>
      </div>

      {/* Professional Experience */}
      <div id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Professional Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Building scalable systems and driving innovation across startups and enterprise organizations</p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-purple-500/20 rounded-xl">
                      <Briefcase className="h-6 w-6 text-purple-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <h4 className="text-xl text-purple-300 mb-2">{exp.company}</h4>
                      <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {exp.current && (
                  <div className="flex items-center gap-2 bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Current
                  </div>
                )}
              </div>
              
              <div className="space-y-3 mb-6">
                {exp.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-gray-300">
                    <ChevronRight className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{achievement}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm hover:bg-purple-500/30 transition-colors duration-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Showcase */}
      <div id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Award-winning projects and innovative solutions showcasing technical expertise and real-world impact</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:scale-105">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-purple-300 text-sm mb-2">{project.subtitle}</p>
                  <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs">
                    <Code className="h-3 w-3" />
                    {project.impact}
                  </div>
                </div>
                {project.award && (
                  <Award className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                )}
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-slate-700/50 rounded text-slate-300 text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              
              <a href={project.link} className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors duration-200 font-medium">
                <span>View Project</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Comprehensive skill set spanning full-stack development, AI/ML, and cloud technologies</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200">
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full`}></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Education Section */}
      <div id="education" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Academic excellence in computer science and engineering</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <GraduationCap className="h-8 w-8 text-blue-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Master of Science in Computer Science & Engineering</h3>
                  <h4 className="text-xl text-blue-300 mb-2">The Ohio State University</h4>
                  <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Graduated May 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>Columbus, Ohio</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-white mb-1">3.8/4.0</div>
                <div className="text-gray-400 text-sm">GPA</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3 text-gray-300 bg-yellow-500/10 p-4 rounded-xl border border-yellow-500/20">
                <Award className="h-5 w-5 text-yellow-400" />
                <span className="font-medium">The Honor Society of Phi Kappa Phi</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 bg-purple-500/10 p-4 rounded-xl border border-purple-500/20">
                <Brain className="h-5 w-5 text-purple-400" />
                <span className="font-medium">Focus: Machine Learning, AI Systems</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Ready to build innovative solutions together. Let's discuss how I can contribute to your next project.</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <a href="mailto:rudrakshashutosh@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200">
                    <Mail className="h-5 w-5 text-purple-400" />
                    <span>rudrakshashutosh@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="h-5 w-5 text-purple-400" />
                    <span>+1(614)-313-9582</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="h-5 w-5 text-purple-400" />
                    <span>Atlanta, GA</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Professional Links</h3>
                <div className="space-y-4">
                  <a href="https://github.com/ashutoshrudraksh" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200">
                    <Github className="h-5 w-5 text-purple-400" />
                    <span>GitHub Profile</span>
                    <ExternalLink className="h-4 w-4 ml-auto" />
                  </a>
                  <a href="https://linkedin.com/in/ashutoshrudraksh" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="h-4 w-4 ml-auto" />
                  </a>
                  <a href="/attached_assets/Ashutosh_Rudraksh_Resume.pdf" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200">
                    <Download className="h-5 w-5 text-purple-400" />
                    <span>Download Resume</span>
                    <ExternalLink className="h-4 w-4 ml-auto" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Send className="h-5 w-5" />
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-200" 
                    placeholder="Your name" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-200" 
                    placeholder="your.email@example.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 resize-none" 
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400/20"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-white/10">
        <div className="text-center text-gray-400">
          <p>&copy; 2025 Ashutosh Rudraksh. Built with Next.js and Tailwind CSS.</p>
          <p className="mt-2 text-sm">Designed to showcase technical excellence through implementation quality.</p>
        </div>
      </footer>
    </div>
  );
}
