import { motion } from 'framer-motion';
import Icon from './Icon';

export default function SkillsSection() {
  const allSkills = [
    { icon: "code", name: "React.js" },
    { icon: "code", name: "JavaScript ES6+" },
    { icon: "code", name: "HTML5 & CSS3" },
    { icon: "code", name: "Tailwind CSS" },
    { icon: "server", name: "Node.js" },
    { icon: "server", name: "Express.js" },
    { icon: "server", name: "REST APIs" },
    { icon: "database", name: "Supabase" },
    { icon: "database", name: "Git & GitHub" },
    { icon: "book", name: "API Integration" },
    { icon: "book", name: "Agile Development" },
  ];
  
  // Duplicate skills for seamless loop
  const tickerItems = [...allSkills, ...allSkills, ...allSkills];

  return (
    <section id="skills" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="section-label">02 — SKILLS & TOOLS</p>
          <h2 className="section-title">What I work with.</h2>
        </motion.div>
      </div>
      
      <motion.div 
        className="skills-ticker-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <div className="skills-ticker">
          {tickerItems.map((skill, i) => (
            <div key={i} className="ticker-item">
              <Icon name={skill.icon} size={18} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
