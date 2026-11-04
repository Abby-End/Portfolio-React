{/*Don't forget to import*/ }

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';


import { buttons, profile, navLinks, hero, about, skills, projects,contact,footer } from './data';

function App() {
  return (
    <>
      {/*---------------------------the NavBar-------------------------------*/}
      <Navbar name={profile.name} href={profile.href} links={navLinks} cta={buttons[0]} />

      {/*---------------------------the hero-------------------------------*/}
      <Hero
        avatar={profile.name}
        eyebrow={hero.eyebrow}
        title={hero.title}
        intro={hero.intro}
        primaryCta={buttons[1]}
        secondaryCta={buttons[2]} />

      {/*---------------------------the about-------------------------------*/}
      <About name={profile.name} {...about} />

      {/* --------------------------- Projects --------------------------- */}
      <Projects
        eyebrow="SELECTED WORK"
        title="Projects & Experiments"
        projects={projects}
      />

      {/*---------------------------the skills-------------------------------*/}
      <Skills {...skills} />

       {/*---------------------------contact------------------------------*/}
      <Contact {...contact} />

      {/*---------------------------the footer-------------------------------*/}
      <Footer {...footer} />

    </>
  );
}

export default App;
