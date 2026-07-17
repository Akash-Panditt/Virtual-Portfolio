import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Icon from './Icon';

export default function ContactSection() {
  const [greeting, setGreeting] = useState("Hello");
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  useGSAP(() => {
    gsap.fromTo(contentRef.current,
      { opacity: 0, scale: 0.95, filter: 'blur(10px)' },
      {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="contact" ref={containerRef} style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div ref={contentRef} style={{ willChange: 'transform, opacity, filter' }}>
          <p style={{ color: 'var(--accent-blue)', fontSize: '1.25rem', marginBottom: '1rem', fontFamily: '"JetBrains Mono", monospace' }}>
            {greeting},
          </p>
          <h2 style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '2rem' }}>
            Let's Talk.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
            I am currently open to full-time roles, internships, and collaborations. Let's build something amazing together.
          </p>

          <div style={{ display: 'inline-block' }}>
            <a
              href="mailto:akashpandit8436@gmail.com"
              className="btn btn-primary"
              style={{ padding: '1rem 3rem', fontSize: '1.25rem', borderRadius: '100px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', willChange: 'transform' }}
              onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3 })}
              onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.3 })}
              onMouseDown={(e) => gsap.to(e.currentTarget, { scale: 0.95, duration: 0.1 })}
              onMouseUp={(e) => gsap.to(e.currentTarget, { scale: 1.05, duration: 0.1 })}
            >
              Get in Touch <Icon name="arrow-right" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
