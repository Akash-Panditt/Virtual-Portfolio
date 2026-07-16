import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Icon from './Icon';

export default function ExperienceSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Translate X based on scroll progress (adjust -100% based on how many cards)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-45%"]);

  const experiences = [
    {
      title: "Software Developer Intern",
      company: "TechSonance InfoTech LLP",
      date: "Dec 2025 – Jun 2026",
      location: "Surat, Gujarat",
      type: "Frontend & UI",
      tasks: [
        "Contributed to the development of Resumify, an AI-powered resume builder platform.",
        "Built responsive and reusable user interfaces using React.js and modern CSS.",
        "Improved application performance and optimized the overall user experience."
      ]
    },
    {
      title: "Software Developer Intern",
      company: "TechSonance InfoTech LLP",
      date: "Dec 2025 – Jun 2026",
      location: "Surat, Gujarat",
      type: "Backend & Systems",
      tasks: [
        "Integrated REST APIs and implemented secure user authentication.",
        "Worked with Node.js, Express.js, and Supabase for backend development.",
        "Managed database operations and file storage solutions for user resumes."
      ]
    },
    {
      title: "Software Developer Intern",
      company: "TechSonance InfoTech LLP",
      date: "Dec 2025 – Jun 2026",
      location: "Surat, Gujarat",
      type: "Product Features",
      tasks: [
        "Developed and enhanced the internal Admin Dashboard.",
        "Created a robust template management system for dynamic resume layouts.",
        "Implemented the PDF generation workflow for final resume exports."
      ]
    }
  ];

  return (
    <section id="experience" ref={targetRef} className="horizontal-scroll-section">
      <div className="horizontal-scroll-sticky">
        <motion.div style={{ x, width: 'max-content', paddingLeft: '5vw' }}>
          <div style={{ paddingLeft: '2rem', marginBottom: '2rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <p className="section-label">03 — EXPERIENCE</p>
              <h2 className="section-title">Where I've worked.</h2>
            </motion.div>
          </div>
          
          <div className="horizontal-scroll-content" style={{ padding: '0 2rem', marginTop: 0 }}>
            {experiences.map((exp, i) => (
              <div key={i} className="horizontal-card">
                <div className="exp-card-header">
                  <h3>{exp.type}</h3>
                  <p className="exp-company">{exp.company}</p>
                </div>
                <div className="exp-meta" style={{ alignItems: 'flex-start', margin: '1.5rem 0' }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Icon name="calendar" size={16} /> {exp.date}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Icon name="mapPin" size={16} /> {exp.location}</span>
                </div>
                <ul className="exp-list">
                  {exp.tasks.map((t, idx) => <li key={idx}>{t}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
