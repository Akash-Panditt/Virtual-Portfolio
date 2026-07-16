import { motion } from 'framer-motion';
import Icon from './Icon';

export default function StartupSection() {
  const cards = [
    { icon: "users", title: "Development Collaboration", desc: "Worked closely with the development team to implement new features, improve application performance, and deliver scalable solutions.", color: "rgba(245, 158, 11, 0.15)" },
    { icon: "lightbulb", title: "Product Thinking", desc: "Contributed to product discussions and learned how user requirements are transformed into practical features and intuitive user experiences.", color: "rgba(245, 158, 11, 0.15)" },
    { icon: "laptop", title: "Technical Execution", desc: "Built responsive React components, integrated REST APIs, implemented authentication, and managed data using Supabase.", color: "rgba(245, 158, 11, 0.15)" },
    { icon: "zap", title: "Fast Learning", desc: "Quickly adapted to new technologies, solved development challenges, and delivered features in an agile startup environment.", color: "rgba(245, 158, 11, 0.15)" },
  ];
  const checklist = ["Developed Resumify – AI-powered Resume Builder","Full-Stack Web Development","Responsive UI Development","REST API Integration","Authentication & Session Management","Supabase Database & File Storage","Admin Dashboard Development","PDF Generation Workflow","Startup Environment Experience","Team Collaboration"];
  
  return (
    <section>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="section-label">02 — STARTUP EXPERIENCE</p>
          <h2 className="section-title">Beyond Writing Code.</h2>
        </motion.div>
        <div className="startup-layout">
          <div className="startup-text">
            <p style={{ color: 'var(--text-primary)', fontSize: '1.15rem', lineHeight: 1.7 }}>My internship at TechSonance InfoTech LLP gave me hands-on experience beyond software development. While contributing to Resumify, I collaborated with the development team on feature implementation, UI improvements, API integration, and product discussions to build a better user experience.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.7, marginTop: '1.5rem' }}>This experience helped me understand how real-world products are developed by balancing user needs, technical implementation, and business requirements in a fast-paced startup environment.</p>
          </div>
          <div></div>
          <div className="startup-cards" style={{gridColumn:'1/-1', marginTop: '2rem'}}>
            {cards.map((c, i) => (
              <motion.div 
                key={i} 
                className="card startup-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <div className="startup-card-icon" style={{background: c.color, color: 'var(--accent-blue)'}}><Icon name={c.icon} size={24} /></div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="card" style={{gridColumn:'1/-1', marginTop: '1rem'}}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <h4 style={{fontWeight:600, marginBottom:'1rem'}}>TechSonance Experience</h4>
            <ul className="exp-checklist">
              {checklist.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
