import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from './Icon';

export default function ContactSection() {
  const [greeting, setGreeting] = useState("Hello");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  return (
    <section id="contact" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p style={{ color: 'var(--accent-blue)', fontSize: '1.25rem', marginBottom: '1rem', fontFamily: '"JetBrains Mono", monospace' }}>
            {greeting},
          </p>
          <h2 style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '2rem' }}>
            Let's Talk.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
            I am currently open to full-time roles, internships, and collaborations. Let's build something amazing together.
          </p>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
            <a href="mailto:akashpandit8436@gmail.com" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.25rem', borderRadius: '100px' }}>
              Get in Touch <Icon name="arrow-right" size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
