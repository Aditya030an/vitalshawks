import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/navbar.jsx';
import Home from './Component/Home';  
import Industries from './Component/Industries.jsx';  
import Contact from './Component/Contact.jsx';  
import About from './Component/About.jsx'; 
import Client from './Component/Client.jsx'; 
import Footer from './Component/Footer.jsx'; 
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        
        {/* Define routes for Home only */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Industries" element={<Industries />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Client" element={<Client />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;