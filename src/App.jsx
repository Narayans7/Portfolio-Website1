import React, { useEffect, useRef } from 'react';
    import { FaGithub, FaLinkedin } from 'react-icons/fa';
    import { Link } from 'react-scroll';
    import './index.css';

    function App() {
      const skillsRef = useRef(null);
      const skillProgressBars = useRef([]);

      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                skillProgressBars.current.forEach((bar) => {
                  const percentage = bar.dataset.percentage;
                  bar.style.width = `${percentage}%`;
                });
                observer.unobserve(skillsRef.current);
              }
            });
          },
          { threshold: 0.5 },
        );

        if (skillsRef.current) {
          observer.observe(skillsRef.current);
        }

        return () => {
          if (skillsRef.current) {
            observer.unobserve(skillsRef.current);
          }
        };
      }, []);

      return (
        <div>
          <nav>
            <div className="container">
              <ul style={{ display: 'flex', justifyContent: 'center', gap: '20px', listStyle: 'none', padding: 0 }}>
                <li>
                  <Link to="hero" smooth={true} duration={500}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="about" smooth={true} duration={500}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="skills" smooth={true} duration={500}>
                    Skills
                  </Link>
                </li>
                <li>
                  <Link to="projects" smooth={true} duration={500}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="education" smooth={true} duration={500}>
                    Education
                  </Link>
                </li>
                <li>
                  <Link to="contact" smooth={true} duration={500}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <section id="hero" className="hero">
            <div className="container hero-content">
              <h1>Hi, I'm Narayan Shrangare, an AI Learner</h1>
              <p>Passionate about AI, Machine Learning, and Data Science</p>
            </div>
          </section>
          <section id="about" className="about">
            <div className="container about-content">
              <h2 className="section-title">About Me</h2>
              <p>
                I am currently pursuing a Master’s in Computer Applications (MCA) at Amity University, Noida, with a strong focus on Artificial Intelligence and Data Science. Passionate about leveraging cutting-edge technologies, I specialize in AI development, machine learning algorithms, and data analysis. Alongside my academic journey, I am continuously honing my skills such as Python, data structure and algorithm, deep learning, Natural Language Processing (NLP), and exploring new advancements in AI. My goal is to apply innovative solutions to solve real-world challenges and contribute to the growth of intelligent systems.
              </p>
            </div>
          </section>
          <section id="skills" className="skills" ref={skillsRef}>
            <div className="container">
              <h2 className="section-title">My Skills</h2>
              <div className="skills-list">
                <div className="skill-item">
                  <h3>Python</h3>
                  <div className="skill-progress">
                    <div
                      className="skill-progress-bar"
                      data-percentage="90"
                      ref={(el) => (skillProgressBars.current[0] = el)}
                    ></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h3>Data Structure and Algorithm</h3>
                  <div className="skill-progress">
                    <div
                      className="skill-progress-bar"
                      data-percentage="85"
                      ref={(el) => (skillProgressBars.current[1] = el)}
                    ></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h3>Deep Learning</h3>
                  <div className="skill-progress">
                    <div
                      className="skill-progress-bar"
                      data-percentage="80"
                      ref={(el) => (skillProgressBars.current[2] = el)}
                    ></div>
                  </div>
                </div>
                 <div className="skill-item">
                  <h3>Machine Learning</h3>
                  <div className="skill-progress">
                    <div
                      className="skill-progress-bar"
                      data-percentage="82"
                      ref={(el) => (skillProgressBars.current[6] = el)}
                    ></div>
                  </div>
                </div>
                 <div className="skill-item">
                  <h3>NLP</h3>
                  <div className="skill-progress">
                    <div
                      className="skill-progress-bar"
                      data-percentage="78"
                      ref={(el) => (skillProgressBars.current[7] = el)}
                    ></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h3>React.js</h3>
                  <div className="skill-progress">
                    <div
                      className="skill-progress-bar"
                      data-percentage="75"
                      ref={(el) => (skillProgressBars.current[3] = el)}
                    ></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h3>Node.js</h3>
                  <div className="skill-progress">
                    <div
                      className="skill-progress-bar"
                      data-percentage="70"
                      ref={(el) => (skillProgressBars.current[4] = el)}
                    ></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h3>JavaScript</h3>
                  <div className="skill-progress">
                    <div
                      className="skill-progress-bar"
                      data-percentage="80"
                      ref={(el) => (skillProgressBars.current[5] = el)}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="projects" className="projects">
            <div className="container">
              <h2 className="section-title">My Projects</h2>
              <div className="project-grid">
                <div className="project-card">
                  <h3>AI-Coding-Tutor</h3>
                  <p>
                    An interactive AI-powered coding tutor that helps users learn programming concepts through personalized instruction and real-time feedback.
                  </p>
                  <a href="https://github.com/Narayans7/AI-Coding-Tutor" target="_blank" rel="noopener noreferrer">
                    GitHub Repository
                  </a>
                </div>
                <div className="project-card">
                  <h3>AI-Agent</h3>
                  <p>
                    Contains code and resources for advanced software engineering topics and practices. It provides practical insights into software development and engineering principles.
                  </p>
                  <a href="https://github.com/narayanshrangare/AI-Agent-Project" target="_blank" rel="noopener noreferrer">
                    GitHub Repository
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section id="education" className="education">
            <div className="container">
              <h2 className="section-title">Education</h2>
              <div className="timeline">
                <div className="timeline-item">
                  <h3>MCA 1st Semester, Amity University, Noida</h3>
                </div>
                <div className="timeline-item">
                  <h3>SRTUM B.Sc Computer Science</h3>
                </div>
              </div>
            </div>
          </section>
          <section id="contact" className="contact">
            <div className="container contact-info">
              <h2 className="section-title">Contact Me</h2>
              <p>Name: Narayan Shrangare</p>
              <p>Email: <a href="mailto:narayanshrangare78@gmail.com">narayanshrangare78@gmail.com</a></p>
              <p>
                LinkedIn: <a href="https://www.linkedin.com/in/narayan-shrangare-922b7b220/" target="_blank" rel="noopener noreferrer">
                  Narayan Shrangare
                </a>
              </p>
              <p>
                GitHub: <a href="https://github.com/narayanshrangare" target="_blank" rel="noopener noreferrer">
                  Narayan Shrangare
                </a>
              </p>
            </div>
          </section>
          <footer>
            <div className="container">
              <p>© 2025 Narayan Shrangare. All Rights Reserved.</p>
            </div>
          </footer>
        </div>
      );
    }

    export default App;
