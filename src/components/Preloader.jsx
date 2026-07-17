import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Icon from './Icon';

export default function Preloader({ isStarted, onStart }) {
  const [show, setShow] = useState(true);
  const containerRef = useRef(null);
  
  const emailRef = useRef(null);
  const leftContentRef = useRef(null);
  const bottomLeftRef = useRef(null);
  const centerNameRef = useRef(null);
  const btnRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  // If already started from session storage, don't show preloader at all
  useEffect(() => {
    if (isStarted) {
      setShow(false);
    }
  }, [isStarted]);

  useGSAP(() => {
    if (!show || isStarted) return;
    
    // Initial mount animations
    gsap.set(emailRef.current, { opacity: 0 });
    gsap.set(leftContentRef.current, { opacity: 0, x: -30 });
    gsap.set(bottomLeftRef.current, { opacity: 0, y: 20 });
    gsap.set(centerNameRef.current, { opacity: 0, letterSpacing: '0em' });
    gsap.set(btnRef.current, { opacity: 0, y: 20 });
    gsap.set(scrollIndicatorRef.current, { opacity: 0 });

    const tl = gsap.timeline();

    tl.to(leftContentRef.current, { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }, 0.3)
      .to(emailRef.current, { opacity: 1, duration: 1 }, 0.5)
      .to(centerNameRef.current, { opacity: 1, letterSpacing: '0.3em', duration: 1 }, 0.5)
      .to(bottomLeftRef.current, { opacity: 1, y: 0, duration: 1 }, 0.6)
      .to(btnRef.current, { opacity: 1, y: 0, duration: 0.6 }, 0.8)
      .to(scrollIndicatorRef.current, { opacity: 0.2, duration: 1 }, 1.5);
      
  }, { scope: containerRef });

  const handleStart = () => {
    // Exit animation
    gsap.to(containerRef.current, {
      opacity: 0,
      scale: 1.05,
      filter: 'blur(10px)',
      duration: 1.2,
      ease: 'power3.inOut',
      onComplete: () => {
        onStart();
      }
    });
  };

  if (!show) return null;
  if (isStarted) return null;

  return (
    <div
      ref={containerRef}
      className="preloader"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#050505',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Smokey Background Image */}
      <div style={{ 
        position: 'absolute', 
        inset: '-20px', 
        backgroundImage: `url('/images/ime-1.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(8px)',
        opacity: 0.7,
        zIndex: 0
      }}></div>

      {/* Smokey Dark Overlay */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        background: 'radial-gradient(circle at center, rgba(10,10,12,0.6) 0%, rgba(5,5,5,0.95) 100%)',
        zIndex: 0
      }}></div>



      {/* Top Right Email */}
      <div 
        ref={emailRef}
        style={{ position: 'absolute', top: '2.5rem', right: '3rem', zIndex: 10 }}
      >
        <a 
          href="mailto:akashpandit8436@gmail.com" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            padding: '0.6rem 1.25rem',
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '100px',
            color: 'rgba(255,255,255,0.9)', 
            fontSize: '0.85rem',
            fontWeight: 500,
            letterSpacing: '0.05em', 
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            textDecoration: 'none'
          }} 
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(255,255,255,0.1)';
          }} 
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
            e.currentTarget.style.color = 'rgba(255,255,255,0.9)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <Icon name="mail" size={16} />
          Email me
        </a>
      </div>

      {/* Left Side Content */}
      <div 
        ref={leftContentRef}
        style={{ position: 'absolute', top: '48%', left: '5rem', transform: 'translateY(-50%)', zIndex: 10 }}
      >
        <p style={{ color: 'var(--accent-blue)', fontSize: '0.75rem', letterSpacing: '0.2em', marginBottom: '1rem', fontWeight: 600, opacity: 0.5 }}>PORTFOLIO 2026</p>
        <h1 style={{ fontSize: '7.5vw', fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.03em', color: 'rgba(255,255,255,0.95)' }}>Akash<br/>Pandit</h1>
      </div>

      {/* Bottom Left Content */}
      <div 
        ref={bottomLeftRef}
        style={{ position: 'absolute', bottom: '3rem', left: '5rem', zIndex: 10 }}
      >
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.5 }}>
          Full-Stack Developer | Product Builder | Frontend Developer
        </p>
      </div>

      {/* Center Content */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p 
          ref={centerNameRef}
          style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '2rem', opacity: 0.8 }}
        >
          Akash Pandit
        </p>
        
        <button
          ref={btnRef}
          onClick={handleStart}
          onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05, backgroundColor: 'rgba(245, 158, 11, 0.1)', boxShadow: '0 0 20px rgba(245,158,11,0.2)', duration: 0.3 })}
          onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, backgroundColor: 'transparent', boxShadow: 'none', duration: 0.3 })}
          onMouseDown={(e) => gsap.to(e.currentTarget, { scale: 0.95, duration: 0.1 })}
          onMouseUp={(e) => gsap.to(e.currentTarget, { scale: 1.05, duration: 0.1 })}
          style={{
            background: 'transparent',
            border: '1px solid var(--accent-blue)',
            color: 'var(--accent-blue)',
            padding: '0.8rem 3rem',
            borderRadius: '100px',
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.15em',
            cursor: 'pointer',
            transition: 'border-color 0.3s ease, color 0.3s ease', // keep basic css transition, gsap handles transform/bg
          }}
        >
          START
        </button>
      </div>

      {/* Bottom Center Scroll Indicator */}
      <div 
        ref={scrollIndicatorRef}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}
      >
        <p style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff' }}>Scroll</p>
      </div>
    </div>
  );
}
