import './App.css'
import { useState } from 'react'

const experiences = [
  {
    company: 'Chameleon',
    url: 'https://www.chameleon.io/',
    role: 'Backend Engineer',
    period: 'Feb 2025 – Present',
    location: 'San Francisco · Remote',
    highlights: [
      'Built Task Flow backend with NestJS, Express, and MongoDB for scalable task management',
      'Implemented background job processing with Redis + BullMQ, boosting throughput by 3.5x',
      'Scaled infrastructure with Node.js clustering and Artillery load testing, sustaining 50k+ req/min on 2-core 8GB setup',
      'Deployed containerized microservices with Docker on AWS EC2 achieving zero downtime rollouts',
      'Improved performance with caching strategies, reducing API latency by 62% under peak usage'
    ]
  },
  {
    company: 'El Gammal',
    url: 'https://www.elgammal.systems/',
    role: 'Fullstack Engineer',
    period: 'May 2024 – Feb 2025',
    location: 'Cairo · Remote',
    highlights: [
      'Developed Next.js frontend + Node.js backend with Redux Toolkit, cutting load times by 42%, bundle size by 38%',
      'Boosted API response performance by 270% using Redis caching and AWS Step Functions',
      'Containerized applications with Docker, deployed via CI/CD to AWS EC2 with Kafka',
      'Tuned PostgreSQL queries and indexes, reducing latency by 47% for 100k+ monthly transactions',
      'Built scalable Puppeteer scraping pipeline extracting 10k+ job listings/month'
    ]
  }
]

const projects = [
  {
    title: 'AI-Powered IT Chat System',
    description: 'Real-time chat system enabling conversations between users and IT support with intelligent AI assistance, auto chat termination, and end-to-end encryption',
    tech: ['Node.js', 'AI/ML', 'WebSocket', 'Encryption'],
    demo: 'https://chatify-895cg.sevalla.app/',
    github: 'https://github.com/AhmedIssawy'
  },
  {
    title: 'Warehouse with Installments Management System',
    description: 'Full-stack system for managing customer purchases and installments with secure authentication, real-time updates, Redux Toolkit, shadcn/ui, and Tailwind CSS',
    tech: ['Next.js', 'Redux Toolkit', 'Tailwind CSS', 'PostgreSQL'],
    demo: 'https://installments-mangement-system-warehouse-ez6p.vercel.app/',
    github: 'https://github.com/AhmedIssawy/Installments-mangement-system-warehouse'
  },
  {
    title: 'Task Flow Backend',
    description: 'Scalable task management backend with NestJS, MongoDB, Redis queue processing, and Docker containerization deployed on AWS EC2',
    tech: ['NestJS', 'MongoDB', 'Redis', 'BullMQ', 'Docker', 'AWS'],
    demo: 'https://task-flow-kappa-kohl.vercel.app/',
    github: 'https://github.com/AhmedIssawy'
  }
]

const skills = {
  languages: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'NoSQL', 'C', 'C++'],
  frameworks: ['Next.js', 'Node.js', 'NestJS', 'Express', 'React', 'Redux Toolkit'],
  databases: ['PostgreSQL', 'MongoDB', 'Redis'],
  tools: ['Docker', 'AWS', 'Kafka', 'BullMQ', 'Puppeteer', 'Artillery', 'Git', 'Postman', 'PowerBI']
}

const calculateAge = () => {
  const birthDate = new Date(2005, 7, 1) // August 1, 2005 (month is 0-indexed)
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  
  return age
}

function App() {
  const [emailCopied, setEmailCopied] = useState(false)
  const age = calculateAge()
  const isCentennial = age >= 100

  return (
    <>
      <div className="background-shapes">
        <span className="shape circle circle-1" />
        <span className="shape circle circle-2" />
        <span className="shape circle circle-3" />
        <span className="shape square square-1" />
        <span className="shape square square-2" />
        <span className="shape square square-3" />
      </div>

      <div className="portfolio">
        <section className="hero" id="home">
          <div className="hero-content">
          <p className="hero-label">Full-Stack Engineer · Cairo, Egypt</p>
          <h1 className="hero-title">
            Ahmed Issawy
            {isCentennial && <span className="memorial">🕊️ In loving memory · Please pray for him</span>}
          </h1>
          <p className="hero-alias">Also known as: Ahmed Essawy</p>
          <p className="hero-age">{age} years old</p>
          <p className="hero-intro">
            Building AI-powered scalable systems with Node.js, NestJS, and modern infrastructure. 
            Specialized in performance optimization, distributed systems, and production-grade architecture.
          </p>
          
          <div className="hero-actions">
            <a href="https://drive.google.com/file/d/1i8aUBno48nl_4knT4qJuj95L34AzfO6_/view?usp=sharing" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
            <a href="https://github.com/AhmedIssawy" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/ahmed-issawy-fares/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <p>
            I'm a <strong>Backend Engineer</strong> at Chameleon, building scalable microservices with NestJS, 
            MongoDB, and Redis. Previously at El Gammal, I optimized full-stack systems with Next.js and Node.js, 
            achieving <strong>270% API performance improvements</strong> and deploying containerized applications on AWS.
          </p>
          <p>
            Currently pursuing a <strong>Bachelor of Computer Engineering with a minor in AI</strong> at MAM University (expected 2028). 
            My expertise includes <strong>distributed systems</strong>, <strong>background job processing</strong> with BullMQ, 
            <strong>infrastructure scaling</strong> with Docker and Kubernetes, and <strong>performance optimization</strong> 
            that sustained <strong>50k+ requests/minute</strong> on minimal hardware.
          </p>
          <p>
            I focus on clean architecture, production-grade reliability, and real-world problem solving—from 
            scraping pipelines processing <strong>10k+ listings/month</strong> to zero-downtime deployments on AWS EC2.
          </p>
        </div>
      </section>

      <section className="section skills" id="skills">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="skill-category-title">Languages</h3>
            <div className="skill-tags">
              {skills.languages.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Frameworks & Libraries</h3>
            <div className="skill-tags">
              {skills.frameworks.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Databases</h3>
            <div className="skill-tags">
              {skills.databases.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Tools & Platforms</h3>
            <div className="skill-tags">
              {skills.tools.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section experience" id="experience">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <article key={exp.company} className="experience-card">
              <div className="experience-header">
                <div>
                  <h3 className="experience-company-title">
                    {exp.url ? (
                      <a href={exp.url} target="_blank" rel="noopener noreferrer">{exp.company}</a>
                    ) : (
                      exp.company
                    )}
                  </h3>
                  <p className="experience-role">{exp.role}</p>
                  {exp.url && (
                    <p className="experience-url">
                      <a href={exp.url} target="_blank" rel="noopener noreferrer">{exp.url}</a>
                    </p>
                  )}
                </div>
                <div className="experience-meta">
                  <p className="experience-period">{exp.period}</p>
                  <p className="experience-location">{exp.location}</p>
                </div>
              </div>
              <ul className="experience-highlights">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects" id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.demo && (
                  <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                    Live Demo →
                  </a>
                )}
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                  Source Code →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <h2 className="section-title">Let's Build Something</h2>
        <p className="contact-text">
          I'm open to collaborations on impactful systems, scalable products, and high-performance architectures. 
          Let's discuss how we can work together.
        </p>
        <div className="contact-links">
          <button 
            onClick={() => {
              navigator.clipboard.writeText('ahmedfaris898@gmail.com');
              setEmailCopied(true);
              setTimeout(() => setEmailCopied(false), 1000);
            }}
            className="contact-btn"
            style={{ 
              cursor: 'pointer',
              backgroundColor: emailCopied ? '#28a745' : '',
              transition: 'background-color 0.3s ease'
            }}
          >
            {emailCopied ? 'Copied!' : 'ahmedfaris898@gmail.com'}
          </button>
          <a href="https://github.com/AhmedIssawy" className="contact-btn" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/ahmed-issawy-fares/" className="contact-btn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} <a href="https://ahmedissawy.engineer" target="_blank" rel="noopener noreferrer" className="footer-highlight">Ahmed Issawy</a></p>
      </footer>
      </div>
    </>
  )
}

export default App
