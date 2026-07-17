import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Icon from './Icon';

export default function StartupSection() {
  const containerRef = useRef(null);

  const cards = [
    { icon: "users", title: "Development Collaboration", desc: "Worked closely with the development team to implement new features, improve application performance, and deliver scalable solutions.", color: "rgba(245, 158, 11, 0.15)" },
    { icon: "lightbulb", title: "Product Thinking", desc: "Contributed to product discussions and learned how user requirements are transformed into practical features and intuitive user experiences.", color: "rgba(245, 158, 11, 0.15)" },
    { icon: "laptop", title: "Technical Execution", desc: "Built responsive React components, integrated REST APIs, implemented authentication, and managed data using Supabase.", color: "rgba(245, 158, 11, 0.15)" },
    { icon: "zap", title: "Fast Learning", desc: "Quickly adapted to new technologies, solved development challenges, and delivered features in an agile startup environment.", color: "rgba(245, 158, 11, 0.15)" },
  ];
  const checklist = ["Developed Resumify – AI-powered Resume Builder","Full-Stack Web Development","Responsive UI Development","REST API Integration","Authentication & Session Management","Supabase Database & File Storage","Admin Dashboard Development","PDF Generation Workflow","Startup Environment Experience","Team Collaboration"];
  
  useGSAP(() => {
    gsap.fromTo('.startup-header',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.startup-header',
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo('.startup-text p',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.startup-text',
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo('.startup-card',
      { y: 50 },
      {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: '.startup-cards',
          start: "top 95%",
          end: "bottom 5%",
          scrub: true
        }
      }
    );

    gsap.fromTo('.checklist-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.checklist-card',
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef}>
      <div className="container">
        
        <div className="startup-header" style={{ willChange: 'transform, opacity' }}>
          <p className="section-label">02 — STARTUP EXPERIENCE</p>
          <h2 className="section-title">Beyond Writing Code.</h2>
        </div>
        
        <div className="startup-layout">
          <div className="startup-text">
            <p style={{ color: 'var(--text-primary)', fontSize: '1.15rem', lineHeight: 1.7, willChange: 'transform, opacity' }}>My internship at TechSonance InfoTech LLP gave me hands-on experience beyond software development. While contributing to Resumify, I collaborated with the development team on feature implementation, UI improvements, API integration, and product discussions to build a better user experience.</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.7, marginTop: '1.5rem', willChange: 'transform, opacity' }}>This experience helped me understand how real-world products are developed by balancing user needs, technical implementation, and business requirements in a fast-paced startup environment.</p>
          </div>
          <div></div>
          <div className="startup-cards" style={{gridColumn:'1/-1', marginTop: '2rem'}}>
            {cards.map((c, i) => (
              <div 
                key={i} 
                className="card startup-card"
                style={{ willChange: 'transform, opacity' }}
              >
                <div className="startup-card-icon" style={{background: c.color, color: 'var(--accent-blue)'}}><Icon name={c.icon} size={24} /></div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
          <div 
            className="card checklist-card" style={{gridColumn:'1/-1', marginTop: '1rem', willChange: 'transform, opacity'}}
          >
            <h4 style={{fontWeight:600, marginBottom:'1rem'}}>TechSonance Experience</h4>
            <ul className="exp-checklist">
              {checklist.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
