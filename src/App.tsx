import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import BasicComponents from './pages/BasicComponents';
import ButtonComponents from './pages/ButtonComponents';
import DataDisplayComponents from './pages/DataDisplayComponents';
import FormComponents from './pages/FormComponents';
import GridComponents from './pages/GridComponents';
import TypographyComponents from './pages/TypographyComponents';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ 
        marginLeft: '280px', // サイドバーの幅分のマージン
        padding: '20px',
        minHeight: '100vh',
        backgroundColor: '#f8f9fa'
      }}>
        <Routes>
          <Route path="/" element={<BasicComponents />} />
          <Route path="/button" element={<ButtonComponents />} />
          <Route path="/typography" element={<TypographyComponents />} />
          <Route path="/grid" element={<GridComponents />} />
          <Route path="/form" element={<FormComponents />} />
          <Route path="/data" element={<DataDisplayComponents />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
