import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Icon from './Icon';

export default function SkillsSection() {
  const containerRef = useRef(null);

  const allSkills = [
    { icon: "code", name: "React.js" },
    { icon: "code", name: "JavaScript ES6+" },
    { icon: "code", name: "HTML5 & CSS3" },
    { icon: "code", name: "Tailwind CSS" },
    { icon: "server", name: "Node.js" },
    { icon: "server", name: "Express.js" },
    { icon: "server", name: "REST APIs" },
    { icon: "database", name: "Supabase" },
    { icon: "database", name: "Git & GitHub" },
    { icon: "book", name: "API Integration" },
    { icon: "book", name: "Agile Development" },
  ];

  // Duplicate skills for seamless loop
  const tickerItems = [...allSkills, ...allSkills, ...allSkills];

  useGSAP(() => {
    gsap.fromTo('.skills-header',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.skills-header',
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo('.skills-ticker-container',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.skills-ticker-container',
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="skills" style={{ paddingTop: '2rem', paddingBottom: '6rem' }} ref={containerRef}>
      <div className="container">
        <div className="skills-header" style={{ willChange: 'transform, opacity' }}>
          <p className="section-label">02 — SKILLS & TOOLS</p>
          <h2 className="section-title">What I work with.</h2>
        </div>
      </div>

      <div
        className="skills-ticker-container"
        style={{ willChange: 'opacity' }}
      >
        <div className="skills-ticker">
          {tickerItems.map((skill, i) => (
            <div key={i} className="ticker-item">
              <Icon name={skill.icon} size={18} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
