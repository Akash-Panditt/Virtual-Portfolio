import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JourneySection from './components/JourneySection';
import StartupSection from './components/StartupSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [isStarted, setIsStarted] = useState(() => {
    return sessionStorage.getItem('portfolioStarted') === 'true';
  });

  useEffect(() => {
    if (!isStarted) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      sessionStorage.setItem('portfolioStarted', 'true');
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isStarted]);

  const handleStart = () => {
    setIsStarted(true);
  };

  return (
    <>
      <Preloader isStarted={isStarted} onStart={handleStart} />
      <Navbar isStarted={isStarted} />
      <Hero isStarted={isStarted} />
      <JourneySection />
      <StartupSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
