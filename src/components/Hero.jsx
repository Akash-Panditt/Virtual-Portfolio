import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Icon from './Icon';

export default function Hero({ isStarted }) {
  const roleTags = ["Full-Stack Developer", "Product Builder", "Frontend Developer"];
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  
  const videoWrapperRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const floatingBadgeRef = useRef(null);

  useEffect(() => {
    if (isStarted && videoRef.current) {
      // Delay video playback to sync with the entrance animation (delay: 1.4s)
      const playTimer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().catch(e => console.error("Autoplay prevented:", e));
        }
      }, 1400);
      return () => clearTimeout(playTimer);
    }
  }, [isStarted]);

  const handleVideoClick = (e) => {
    // Don't trigger if clicking on a button or link
    if (e && (e.target.closest('a') || e.target.closest('button'))) return;

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(e => console.error("Replay prevented:", e));
    }
  };

  useGSAP(() => {
    if (!isStarted) {
      gsap.set(videoWrapperRef.current, { opacity: 0, filter: 'blur(10px)' });
      gsap.set(contentWrapperRef.current, { opacity: 0 });
      gsap.set(floatingBadgeRef.current, { opacity: 0, y: 20 });
      gsap.set('.hero-stagger-item', { opacity: 0, y: 30 });
      return;
    }

    gsap.to(videoWrapperRef.current, {
      opacity: 1,
      filter: 'blur(0px)',
      duration: 1.2,
      ease: 'power3.inOut',
      delay: 1.4
    });

    gsap.to(contentWrapperRef.current, {
      opacity: 1,
      duration: 0.1,
      delay: 1.2
    });

    gsap.to('.hero-stagger-item', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 1.2
    });

    gsap.to(floatingBadgeRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out',
      delay: 2.2
    });

  }, { scope: containerRef, dependencies: [isStarted] });

  return (
    <section 
      ref={containerRef}
      onClick={handleVideoClick} 
      className="hero" 
      id="home" 
      style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', cursor: 'pointer' }}
    >
      
      {/* Full Screen Video Background */}
      <div 
        ref={videoWrapperRef}
        className="hero-photo-wrapper"
        style={{ position: 'absolute', inset: 0, zIndex: 0, willChange: 'opacity, filter' }}
      >
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <video 
            ref={videoRef}
            src="/video/showreel-landscape.mp4" 
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          ></video>
          {/* Dark Overlay for Text Legibility */}
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(to right, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0.4) 100%)' }}></div>
        </div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '5rem' }}>
        <div style={{ maxWidth: '700px' }}>
          <div ref={contentWrapperRef}>
            <h1 className="hero-name hero-stagger-item" style={{ willChange: 'transform, opacity' }}>
              Akash <span>Pandit</span>
            </h1>
            
            <div className="role-tags hero-stagger-item" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem', marginTop: '1rem', willChange: 'transform, opacity' }}>
              {roleTags.map((tag, index) => (
                <span key={index} className="role-tag" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '0.4rem 1rem', borderRadius: '100px', fontSize: '0.9rem', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}>{tag}</span>
              ))}
            </div>

            <p className="hero-desc hero-stagger-item" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '600px', willChange: 'transform, opacity' }}>
              I build scalable, high-performance web applications with a focus on immersive user experiences. During my internship, I contributed to Resumify — an AI-powered resume builder — working on full-stack features from idea to deployment.
            </p>
            
            <div className="hero-btns hero-stagger-item" style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', willChange: 'transform, opacity' }}>
              <a 
                href="#projects" 
                className="btn btn-primary"
                onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3 })}
                onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.3 })}
                onMouseDown={(e) => gsap.to(e.currentTarget, { scale: 0.95, duration: 0.1 })}
                onMouseUp={(e) => gsap.to(e.currentTarget, { scale: 1.05, duration: 0.1 })}
              >
                View Work <Icon name="arrow-right" />
              </a>
              <a 
                href="mailto:akashpandit8436@gmail.com" 
                className="btn btn-outline" 
                style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}
                onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3 })}
                onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.3 })}
                onMouseDown={(e) => gsap.to(e.currentTarget, { scale: 0.95, duration: 0.1 })}
                onMouseUp={(e) => gsap.to(e.currentTarget, { scale: 1.05, duration: 0.1 })}
              >
                Let's Talk
              </a>
            </div>
            
            <div className="hero-socials hero-stagger-item" style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', willChange: 'transform, opacity' }}>
              <a href="https://github.com/Akash-Panditt" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', transition: 'background 0.3s ease' }} onMouseOver={e => e.currentTarget.style.background='rgba(255,255,255,0.2)'} onMouseOut={e => e.currentTarget.style.background='rgba(255,255,255,0.1)'}>
                <Icon name="github" />
              </a>
              <a href="https://www.linkedin.com/in/akash-pandiit/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', transition: 'background 0.3s ease' }} onMouseOver={e => e.currentTarget.style.background='rgba(255,255,255,0.2)'} onMouseOut={e => e.currentTarget.style.background='rgba(255,255,255,0.1)'}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="/Akash_FullStack_Resume.pdf" download="Akash_FullStack_Resume.pdf" aria-label="Download Resume" style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', transition: 'background 0.3s ease' }} onMouseOver={e => e.currentTarget.style.background='rgba(255,255,255,0.2)'} onMouseOut={e => e.currentTarget.style.background='rgba(255,255,255,0.1)'}>
                <Icon name="download" />
              </a>
            </div>

            {/* Mobile Availability Badge Flow */}
            <div 
              className="availability-card mobile-only hero-stagger-item"
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="availability-dot" style={{ width: '8px', height: '8px', background: 'var(--accent-green)', borderRadius: '50%', boxShadow: '0 0 8px var(--accent-green)' }}></div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="availability-text" style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>Available for work</span>
                <span className="availability-sub" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>Full-Stack Roles</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Availability Badge (Desktop) */}
      <div 
        ref={floatingBadgeRef}
        className="availability-card desktop-only"
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="availability-dot" style={{ width: '8px', height: '8px', background: 'var(--accent-green)', borderRadius: '50%', boxShadow: '0 0 8px var(--accent-green)' }}></div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span className="availability-text" style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>Available for work</span>
          <span className="availability-sub" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>Full-Stack Roles</span>
        </div>
      </div>
    </section>
  );
}
