import { motion } from 'framer-motion';
import Icon from './Icon';

export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } }
  };

  return (
    <section id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="section-label">04 — PROJECTS</p>
          <h2 className="section-title">Things I've built.</h2>
        </motion.div>
        
        <div className="project-feature" style={{marginBottom:'6rem', marginTop: '4rem'}}>
          <motion.div 
            className="project-image-wrap"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            whileHover={{ scale: 1.02, y: -5, boxShadow: '0 30px 60px rgba(245,158,11,0.15)' }}
            style={{ perspective: 1000 }}
          >
            <img src="/images/resumify.png" alt="Resumify" />
          </motion.div>
          <motion.div 
            className="project-info"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="skill-pills" style={{marginBottom:'1.5rem'}}>
              <span className="skill-pill">React.js</span>
              <span className="skill-pill">Node.js</span>
              <span className="skill-pill">Express.js</span>
              <span className="skill-pill">Supabase</span>
            </motion.div>
            <motion.h3 variants={itemVariants} style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Resumify</motion.h3>
            <motion.p variants={itemVariants} style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>AI-powered resume builder platform. Built responsive UIs, integrated REST APIs, implemented authentication, and worked with Supabase for database and file management. Features include template management, PDF generation, ATS checking, and an admin dashboard.</motion.p>
            <motion.div variants={itemVariants} className="project-links" style={{ marginTop: '2rem' }}>
              <a href="https://resumify2.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>Live Demo <Icon name="arrow-right" size={16} /></a>
              <a href="https://github.com/Akash-Panditt/resumify2" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>GitHub <Icon name="github" size={16} /></a>
            </motion.div>
          </motion.div>
        </div>

        <div className="project-feature">
          <motion.div 
            className="project-image-wrap"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            whileHover={{ scale: 1.02, y: -5, boxShadow: '0 30px 60px rgba(245,158,11,0.15)' }}
          >
            <img src="/images/stylehub.png" alt="StyleHub (GenZStorez)" />
          </motion.div>
          <motion.div 
            className="project-info"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="skill-pills" style={{marginBottom:'1.5rem'}}>
              <span className="skill-pill">React.js</span>
              <span className="skill-pill">Tailwind CSS</span>
              <span className="skill-pill">E-Commerce</span>
            </motion.div>
            <motion.h3 variants={itemVariants} style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>StyleHub</motion.h3>
            <motion.p variants={itemVariants} style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>A modern e-commerce platform featuring a sleek interface for discovering the latest fashion trends. Designed with responsive layouts, dynamic product displays, and a seamless shopping cart experience.</motion.p>
            <motion.div variants={itemVariants} className="project-links" style={{ marginTop: '2rem' }}>
              <a href="https://genzstorez.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>Live Demo <Icon name="arrow-right" size={16} /></a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
