import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ 
        marginLeft: '250px', // サイドバーの幅分のマージン
        padding: '20px',
        minHeight: '100vh',
        backgroundColor: '#f8f9fa'
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
