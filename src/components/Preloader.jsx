import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader({ isStarted, onStart }) {
  const [show, setShow] = useState(true);

  // If already started from session storage, don't show preloader at all
  useEffect(() => {
    if (isStarted) {
      setShow(false);
    }
  }, [isStarted]);

  if (!show) return null;

  return (
    <AnimatePresence>
      {!isStarted && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
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

          {/* Large Background Text */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.03, scale: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              fontSize: '28vw',
              fontWeight: 900,
              whiteSpace: 'nowrap',
              color: '#fff',
              pointerEvents: 'none',
              lineHeight: 0.85,
              textAlign: 'center',
              userSelect: 'none',
              letterSpacing: '-0.02em',
              zIndex: 1
            }}
          >
            AKASH<br/>PANDIT
          </motion.div>

          {/* Top Right Email */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{ position: 'absolute', top: '2.5rem', right: '3rem', zIndex: 10 }}
          >
            <a href="mailto:akashpandit8436@gmail.com" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', letterSpacing: '0.05em', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>Email me</a>
          </motion.div>

          {/* Left Side Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
            style={{ position: 'absolute', top: '48%', left: '5rem', transform: 'translateY(-50%)', zIndex: 10 }}
          >
            <p style={{ color: 'var(--accent-blue)', fontSize: '0.75rem', letterSpacing: '0.2em', marginBottom: '1rem', fontWeight: 600, opacity: 0.5 }}>PORTFOLIO 2026</p>
            <h1 style={{ fontSize: '7.5vw', fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.03em', color: 'rgba(255,255,255,0.95)' }}>Akash<br/>Pandit</h1>
          </motion.div>

          {/* Bottom Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            style={{ position: 'absolute', bottom: '3rem', left: '5rem', zIndex: 10 }}
          >
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.5 }}>
              Full-Stack Developer | Product Builder | UI/UX Enthusiast
            </p>
          </motion.div>

          {/* Center Content */}
          <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.p 
              initial={{ opacity: 0, letterSpacing: '0em' }}
              animate={{ opacity: 1, letterSpacing: '0.3em' }}
              transition={{ delay: 0.5, duration: 1 }}
              style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '2rem', opacity: 0.8 }}
            >
              Akash Pandit
            </motion.p>
            
            <motion.button
              onClick={onStart}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(245, 158, 11, 0.1)', boxShadow: '0 0 20px rgba(245,158,11,0.2)' }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
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
                transition: 'all 0.3s ease',
              }}
            >
              START
            </motion.button>
          </div>

          {/* Bottom Center Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: 1.5, duration: 1 }}
            style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}
          >
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff' }}>Scroll</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
