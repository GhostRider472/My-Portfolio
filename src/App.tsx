import { useEffect } from 'react';
import { useScrollSpy } from './Hooks/useScrollSpy';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const SECTION_IDS = [
  'home',
  'about',
  'skills',
  'experience',
  'projects',
  'education',
  'contact',
];

export default function App() {
  const activeSection = useScrollSpy(SECTION_IDS, 80);

  // Smooth scroll polyfill for older browsers + scroll-padding-top support
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
