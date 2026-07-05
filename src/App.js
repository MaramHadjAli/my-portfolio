import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import FeaturedProject from './components/FeaturedProject';
import Projects from './components/Projects';
import CurrentlyLearning from './components/CurrentlyLearning';
import Contact from './components/Contact';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL || '/'}>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<><FeaturedProject /><Projects /></>} />
          <Route path="/learning" element={<CurrentlyLearning />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
