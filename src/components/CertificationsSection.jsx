import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function CertificationsSection() {
  const containerRef = useRef(null);

  const certs = [
    { title: "Quantitative Research Job Simulation", issuer: "JPMorgan Chase & Co. / Forage", year: "2026", image: "/images/cert-jpmorgan.png", link: "https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/bWqaecPDbYAwSDqJy_Sj7temL583QAYpHXD_6a5453b086066ba056df379f_1783915355730_completion_certificate.pdf" },
    { title: "Claude 101", issuer: "Anthropic", year: "2026", image: "/images/cert-claude.png", link: "https://verify.skilljar.com/c/4zz6bm4xnb6e" },
    { title: "Prompt Engineering for Everyone", issuer: "CognitiveClass.ai", year: "2025", image: "/images/cert-ibm.png", link: "https://courses.cognitiveclass.ai/certificates/f2dfc8c2c8054bc896e6229662a31c90" },
  ];

  useGSAP(() => {
    gsap.fromTo('.certs-header',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.certs-header',
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo('.cert-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.certs-grid',
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="certifications" ref={containerRef}>
      <div className="container">
        
        <div className="certs-header" style={{ willChange: 'transform, opacity' }}>
          <p className="section-label">05 — CERTIFICATIONS</p>
          <h2 className="section-title">Certifications & Learning.</h2>
        </div>
        
        <div className="certs-grid">
          {certs.map((c, i) => (
            <div 
              key={i} 
              className="card cert-card"
              style={{ willChange: 'transform, opacity' }}
              onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.02, duration: 0.3 })}
              onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.3 })}
            >
              <img src={c.image} alt={c.title} className="cert-card-img" />
              <div className="cert-card-body">
                <div>
                  <h4>{c.title}</h4>
                  <div className="cert-meta">
                    <span>{c.issuer}</span>
                    <span className="cert-year">{c.year}</span>
                  </div>
                </div>
                <a href={c.link} target="_blank" rel="noopener noreferrer" className="cert-link">View Credential →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
