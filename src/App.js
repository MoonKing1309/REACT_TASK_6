import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './pages/Home';
import Project from './pages/Projects';
import Navbar from './components/navbar'
import Content from './components/content'
import Footer from './components/footer'

function App() {
  return (


    <div>
        <Router>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Projects' element={<Project />} />
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
