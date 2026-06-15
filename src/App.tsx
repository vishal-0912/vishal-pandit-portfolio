import { lazy, Suspense } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ScrollProgress from './components/ui/ScrollProgress';
import CursorGlow from './components/ui/CursorGlow';

const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Certifications = lazy(() => import('./components/sections/Certifications'));
const WhyHireMe = lazy(() => import('./components/sections/WhyHireMe'));
const Contact = lazy(() => import('./components/sections/Contact'));

function App() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <WhyHireMe />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
