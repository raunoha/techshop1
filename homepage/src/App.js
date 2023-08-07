import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Projects from './pages/Projects';
import {Contact} from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';

function App() {
  return (
    <div className="App">
      
        <Navbar />
     <Routes>
     <Route path="" element={ <Homepage /> } />
     <Route path="/about me" element={ < About/> } />
     <Route path="/projects" element={ <Projects /> } />
     <Route path="/project/:id" element={ <ProjectDisplay /> } />
     <Route path="/contact" element={ < Contact /> } />
      </Routes>
     <Footer />
    </div>
  );
}

export default App;
