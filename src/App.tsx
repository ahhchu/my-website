import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
//import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Folder from './components/Folder/Folder';

function App() {
  return (
    <>
      <Nav />
      <main>
            <Hero />
            <Folder id="about" label="About" tabOffset={80}>
                <About />
            </Folder>
            <Folder id="experience" label="Experience" tabOffset={240}>
                <Experience />
            </Folder>
            <Folder id="projects" label="Projects" tabOffset={490}>
                <Projects />
            </Folder>
            <Folder id="contact" label="Contact" tabOffset={650}>
                <Contact />
            </Folder>
      </main>
    </>
  );
}

export default App;