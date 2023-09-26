import './App.css';
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Education from './components/education/Education'
import Services from './components/services/Services'
import Project from './components/project/Project'
import Experience from './components/experiences/Experience'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>
      <About />
      <Navbar />
      <Skills />
      <Education />
      <Services />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
