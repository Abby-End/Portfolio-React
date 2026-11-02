// src/App.jsx
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { profile, navLinks, hero} from "./data";

function App() {
  return (
    <>
      <Navbar name={profile.name} links={navLinks} />

      <Hero
        name={profile.name}
        eyebrow={hero.eyebrow}
        headline={hero.headline}
        intro={hero.intro}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
      />
    </>
  );
}

export default App;