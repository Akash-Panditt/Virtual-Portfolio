import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Icon from './Icon';

export default function ExperienceSection() {
  const targetRef = useRef(null);
  const contentRef = useRef(null);

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

  useGSAP(() => {
    // Header entrance
    gsap.fromTo('.exp-header',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.exp-header',
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Horizontal Scroll
    gsap.to(contentRef.current, {
      x: "-45%",
      ease: "none",
      scrollTrigger: {
        trigger: targetRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      }
    });
  }, { scope: targetRef });

  return (
    <section id="experience" ref={targetRef} className="horizontal-scroll-section">
      <div className="horizontal-scroll-sticky">
        <div ref={contentRef} style={{ width: 'max-content', paddingLeft: '5vw', willChange: 'transform' }}>
          <div className="exp-header" style={{ paddingLeft: '2rem', marginBottom: '2rem', willChange: 'transform, opacity' }}>
            <div>
              <p className="section-label">03 — EXPERIENCE</p>
              <h2 className="section-title">Where I've worked.</h2>
            </div>
          </div>

          <div className="horizontal-scroll-content" style={{ padding: '0 2rem', marginTop: 0 }}>
            {experiences.map((exp, i) => (
              <div key={i} className="horizontal-card">
                <div className="exp-card-header">
                  <h3>{exp.type}</h3>
                  <p className="exp-company">{exp.company}</p>
                </div>
                <div className="exp-meta">
                  <span><Icon name="calendar" size={16} /> {exp.date}</span>
                  <span><Icon name="mapPin" size={16} /> {exp.location}</span>
                </div>
                <ul className="exp-list">
                  {exp.tasks.map((t, idx) => <li key={idx}>{t}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
