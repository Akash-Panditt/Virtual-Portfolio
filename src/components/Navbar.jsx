import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from './Icon';

export default function Navbar({ isStarted }) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [time, setTime] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }) + " (IST)");
    };
    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const links = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };
  
  return (
    <motion.header 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={isStarted ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 1 }}
    >
      <div className="nav-inner">
        <div className="nav-logo" style={{display: 'flex', alignItems: 'center', gap: '1.5rem'}}>
          <span style={{ fontSize: '1.5rem', fontWeight: '700' }}>
            A<span style={{ color: 'var(--accent-yellow)' }}>P</span>.
          </span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: '"JetBrains Mono", monospace', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 400 }}>
            <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-green)', boxShadow: '0 0 8px var(--accent-green)' }}></span>
            {time}
          </span>
        </div>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? "✕" : "☰"}</button>
        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map(l => <button key={l.id} onClick={() => scrollTo(l.id)}>{l.label}</button>)}
          <button onClick={toggleTheme} aria-label="Toggle theme" className="theme-toggle-btn" style={{ marginLeft: '1rem' }}>
            {theme === 'dark' ? <Icon name="sun" size={18} /> : <Icon name="moon" size={18} />}
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
