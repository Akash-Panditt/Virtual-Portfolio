import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Icon from './Icon';

const RevealText = ({ children }) => {
  const textRef = useRef(null);
  
  useGSAP(() => {
    gsap.fromTo(textRef.current, 
      { opacity: 0.2 },
      {
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 50%",
          scrub: true,
        }
      }
    );
  });
  
  return (
    <p ref={textRef} className="journey-text-reveal" style={{ willChange: 'opacity' }}>
      {children}
    </p>
  );
};

export default function JourneySection() {
  const containerRef = useRef(null);

  const timeline = [
    { icon: "link", label: "FOUNDATION", title: "Frontend Development", sub: "React.js • UI/UX • Web Development" },
    { icon: "building", label: "INTERNSHIP", title: "Full-Stack Development", sub: "Backend • Databases • APIs • Deployment" },
    { icon: "rocket", label: "PRODUCT", title: "Shipped Resumify", sub: "Live Product • AI-Powered • End-to-End", badge: true },
    { icon: "zap", label: "TODAY", title: "Growing as Full-Stack Dev", sub: "React • Node • Express • Supabase" },
  ];

  useGSAP(() => {
    // Section Header
    gsap.fromTo('.section-header', 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.section-header',
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Journey Info
    gsap.fromTo('.journey-info',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: '.journey-info',
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Journey Links
    gsap.fromTo('.journey-links',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.4,
        scrollTrigger: {
          trigger: '.journey-links',
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Timeline Items
    gsap.fromTo('.timeline-item',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.timeline',
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, { scope: containerRef });
  
  return (
    <section id="about" className="journey-section" ref={containerRef}>
      <div className="container">
        
        <div className="section-header" style={{ willChange: 'transform, opacity' }}>
          <p className="section-label">01 — MY JOURNEY</p>
          <h2 className="section-title">Building Products, <br/>Not Just Code.</h2>
        </div>
        
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
            
            <div className="journey-info" style={{ willChange: 'opacity' }}>
              <span><Icon name="mapPin" size={16} /> <em>Surat, Gujarat — Open to Remote & Relocation</em></span>
              <span><Icon name="mail" size={16} /> <em>akashpandit8436@gmail.com</em></span>
            </div>
            
            <div className="journey-links" style={{ willChange: 'opacity' }}>
              <a href="https://www.linkedin.com/in/akash-pandiit/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://github.com/Akash-Panditt" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Icon name="github" />
              </a>
              <a href="https://resumify2.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Resumify">
                <Icon name="globe" />
              </a>
            </div>
          </div>
          
          <div className="timeline">
            {timeline.map((t, i) => (
                <div 
                  key={i} 
                  className="timeline-item"
                  style={{ willChange: 'transform, opacity' }}
                >
                  <div className="timeline-icon"><Icon name={t.icon} size={24} /></div>
                  <div>
                    <div className="timeline-label">{t.label} {t.badge && <span className="badge-live">Live Product</span>}</div>
                    <div className="timeline-title">{t.title}</div>
                    <div className="timeline-sub">{t.sub}</div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
