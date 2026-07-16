import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Icon from './Icon';

export default function Hero({ isStarted }) {
  const roleTags = ["Full-Stack Developer", "Product Builder", "UI/UX Enthusiast"];
  const videoRef = useRef(null);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 1.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
  };

  return (
    <section onClick={handleVideoClick} className="hero" id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', cursor: 'pointer' }}>
      
      {/* Full Screen Video Background */}
      <motion.div 
        className="hero-photo-wrapper"
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={isStarted ? { opacity: 1, filter: 'blur(0px)' } : { opacity: 0, filter: 'blur(10px)' }}
        transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98], delay: 1.4 }}
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
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
      </motion.div>

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '5rem' }}>
        <div style={{ maxWidth: '700px' }}>
          <motion.div
            initial="hidden"
            animate={isStarted ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h1 variants={itemVariants} className="hero-name">
              Akash <span>Pandit</span>
            </motion.h1>
            
            <motion.div variants={itemVariants} className="role-tags" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem', marginTop: '1rem' }}>
              {roleTags.map((tag, index) => (
                <span key={index} className="role-tag" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '0.4rem 1rem', borderRadius: '100px', fontSize: '0.9rem', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}>{tag}</span>
              ))}
            </motion.div>

            <motion.p variants={itemVariants} className="hero-desc" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '600px' }}>
              I build scalable, high-performance web applications with a focus on immersive user experiences. During my internship, I contributed to Resumify — an AI-powered resume builder — working on full-stack features from idea to deployment.
            </motion.p>
            
            <motion.div variants={itemVariants} className="hero-btns" style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem' }}>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#projects" className="btn btn-primary">
                View Work <Icon name="arrow-right" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="mailto:akashpandit8436@gmail.com" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
                Let's Talk
              </motion.a>
            </motion.div>
            
            <motion.div variants={itemVariants} className="hero-socials" style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem' }}>
              <a href="https://github.com/Akash-Panditt" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s ease' }} onMouseOver={e => e.currentTarget.style.background='rgba(255,255,255,0.2)'} onMouseOut={e => e.currentTarget.style.background='rgba(255,255,255,0.1)'}>
                <Icon name="github" />
              </a>
              <a href="https://www.linkedin.com/in/akash-pandiit/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s ease' }} onMouseOver={e => e.currentTarget.style.background='rgba(255,255,255,0.2)'} onMouseOut={e => e.currentTarget.style.background='rgba(255,255,255,0.1)'}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </motion.div>

            {/* Mobile Availability Badge Flow */}
            <motion.div 
              className="availability-card mobile-only"
              variants={itemVariants}
            >
              <div className="availability-dot" style={{ width: '8px', height: '8px', background: 'var(--accent-green)', borderRadius: '50%', boxShadow: '0 0 8px var(--accent-green)' }}></div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="availability-text" style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>Available for work</span>
                <span className="availability-sub" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>Full-Stack Roles</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Availability Badge (Desktop) */}
      <motion.div 
        className="availability-card desktop-only"
        initial={{ opacity: 0, y: 20 }}
        animate={isStarted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <div className="availability-dot" style={{ width: '8px', height: '8px', background: 'var(--accent-green)', borderRadius: '50%', boxShadow: '0 0 8px var(--accent-green)' }}></div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span className="availability-text" style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>Available for work</span>
          <span className="availability-sub" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>Full-Stack Roles</span>
        </div>
      </motion.div>
    </section>
  );
}
