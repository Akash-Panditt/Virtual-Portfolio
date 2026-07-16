import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Icon from './Icon';

const RevealText = ({ children }) => {
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 80%", "end 50%"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  
  return (
    <motion.p ref={textRef} style={{ opacity }} className="journey-text-reveal">
      {children}
    </motion.p>
  );
};

export default function JourneySection() {
  const timeline = [
    { icon: "link", label: "FOUNDATION", title: "Frontend Development", sub: "React.js • UI/UX • Web Development" },
    { icon: "building", label: "INTERNSHIP", title: "Full-Stack Development", sub: "Backend • Databases • APIs • Deployment" },
    { icon: "rocket", label: "PRODUCT", title: "Shipped Resumify", sub: "Live Product • AI-Powered • End-to-End", badge: true },
    { icon: "zap", label: "TODAY", title: "Growing as Full-Stack Dev", sub: "React • Node • Express • Supabase" },
  ];
  
  return (
    <section id="about" className="journey-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="section-label">01 — MY JOURNEY</p>
          <h2 className="section-title">Building Products, <br/>Not Just Code.</h2>
        </motion.div>
        
        <div className="journey-grid">
          <div className="journey-text">
            <RevealText>
              Passionate Software Developer with experience in building modern, responsive, and user-friendly web applications using React.js, Node.js, Express.js, and Supabase.
            </RevealText>
            <RevealText>
              During my internship at TechSonance InfoTech LLP, I contributed to <strong>Resumify</strong>, an AI-powered resume builder, where I developed responsive UIs, reusable React components, integrated REST APIs, implemented authentication, and worked with Supabase for database and file management.
            </RevealText>
            <RevealText>
              Driven by a passion for solving real-world problems through clean, scalable code, I continuously explore new technologies and best practices. My goal is to build impactful software and grow as a Full-Stack Developer.
            </RevealText>
            
            <motion.div 
              className="journey-info"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span><Icon name="mapPin" size={16} /> <em>Surat, Gujarat — Open to Remote & Relocation</em></span>
              <span><Icon name="mail" size={16} /> <em>akashpandit8436@gmail.com</em></span>
            </motion.div>
            
            <motion.div 
              className="journey-links"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a href="https://www.linkedin.com/in/akash-pandiit/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://github.com/Akash-Panditt" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Icon name="github" />
              </a>
              <a href="https://resumify2.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Resumify">
                <Icon name="globe" />
              </a>
            </motion.div>
          </div>
          
          <div className="timeline">
            {timeline.map((t, i) => (
                <motion.div 
                  key={i} 
                  className="timeline-item"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <div className="timeline-icon"><Icon name={t.icon} size={24} /></div>
                  <div>
                    <div className="timeline-label">{t.label} {t.badge && <span className="badge-live">Live Product</span>}</div>
                    <div className="timeline-title">{t.title}</div>
                    <div className="timeline-sub">{t.sub}</div>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
