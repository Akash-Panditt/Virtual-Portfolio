import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Icon from './Icon';

export default function ProjectsSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.projects-header',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.projects-header',
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    const features = gsap.utils.toArray('.project-feature');

    features.forEach((feature) => {
      const image = feature.querySelector('.project-image-wrap');
      const infoItems = feature.querySelectorAll('.info-stagger');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: feature,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

      tl.fromTo(image,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
        0
      );

      tl.fromTo(infoItems,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out" },
        0.2
      );
    });

  }, { scope: containerRef });

  return (
    <section id="projects" ref={containerRef}>
      <div className="container">

        <div className="projects-header" style={{ willChange: 'transform, opacity' }}>
          <p className="section-label">04 — PROJECTS</p>
          <h2 className="section-title">Things I've built.</h2>
        </div>

        <div className="project-feature" style={{ marginBottom: '6rem', marginTop: '4rem' }}>
          <div
            className="project-image-wrap"
            onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.02, y: -5, boxShadow: '0 30px 60px rgba(245,158,11,0.15)', duration: 0.4 })}
            onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, y: 0, boxShadow: 'none', duration: 0.4 })}
            style={{ perspective: 1000, willChange: 'transform, opacity' }}
          >
            <img src="/images/resumify.png" alt="Resumify" />
          </div>
          <div className="project-info">
            <div className="skill-pills info-stagger" style={{ marginBottom: '1.5rem', willChange: 'transform, opacity' }}>
              <span className="skill-pill">React.js</span>
              <span className="skill-pill">Node.js</span>
              <span className="skill-pill">Express.js</span>
              <span className="skill-pill">Supabase</span>
            </div>
            <h3 className="info-stagger" style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '-0.02em', willChange: 'transform, opacity' }}>Resumify</h3>
            <p className="info-stagger" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', willChange: 'transform, opacity' }}>AI-powered resume builder platform. Built responsive UIs, integrated REST APIs, implemented authentication, and worked with Supabase for database and file management. Features include template management, PDF generation, ATS checking, and an admin dashboard.</p>
            <div className="project-links info-stagger" style={{ marginTop: '2rem', willChange: 'transform, opacity' }}>
              <a href="https://resumify2.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>Live Demo <Icon name="arrow-right" size={16} /></a>
              <a href="https://github.com/Akash-Panditt/resumify2" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>GitHub <Icon name="github" size={16} /></a>
            </div>
          </div>
        </div>

        <div className="project-feature">
          <div
            className="project-image-wrap"
            onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.02, y: -5, boxShadow: '0 30px 60px rgba(245,158,11,0.15)', duration: 0.4 })}
            onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, y: 0, boxShadow: 'none', duration: 0.4 })}
            style={{ willChange: 'transform, opacity' }}
          >
            <img src="/images/stylehub.png" alt="StyleHub (GenZStorez)" />
          </div>
          <div className="project-info">
            <div className="skill-pills info-stagger" style={{ marginBottom: '1.5rem', willChange: 'transform, opacity' }}>
              <span className="skill-pill">React.js</span>
              <span className="skill-pill">Tailwind CSS</span>
              <span className="skill-pill">E-Commerce</span>
            </div>
            <h3 className="info-stagger" style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '-0.02em', willChange: 'transform, opacity' }}>StyleHub</h3>
            <p className="info-stagger" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', willChange: 'transform, opacity' }}>A modern e-commerce platform featuring a sleek interface for discovering the latest fashion trends. Designed with responsive layouts, dynamic product displays, and a seamless shopping cart experience.</p>
            <div className="project-links info-stagger" style={{ marginTop: '2rem', willChange: 'transform, opacity' }}>
              <a href="https://genzstorez.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>Live Demo <Icon name="arrow-right" size={16} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
