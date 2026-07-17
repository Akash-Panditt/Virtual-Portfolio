import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Icon from './Icon';

export default function Navbar({ isStarted }) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [time, setTime] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);

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

  useGSAP(() => {
    if (!isStarted) {
      gsap.set(headerRef.current, { y: -100, opacity: 0 });
      return;
    }

    // Entrance animation — appear instantly with the rest of the site
    gsap.to(headerRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out",
    });

    // Setup scroll direction hide/show after a short delay
    const timer = setTimeout(() => {
      ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        onUpdate: (self) => {
          if (self.direction === 1 && window.scrollY > 200) {
            // scrolling down & past hero — hide navbar
            gsap.to(headerRef.current, { y: -100, duration: 0.3, ease: 'power2.out', overwrite: 'auto' });
          } else {
            // scrolling up — show navbar
            gsap.to(headerRef.current, { y: 0, duration: 0.3, ease: 'power2.out', overwrite: 'auto' });
          }
        }
      });
    }, 800);

    return () => clearTimeout(timer);
  }, [isStarted]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const links = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];
  
  const scrollTo = (id) => { 
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); 
    setOpen(false); 
  };
  
  return (
    <header 
      ref={headerRef}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      style={{ willChange: 'transform, opacity' }}
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
    </header>
  );
}
