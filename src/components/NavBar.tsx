import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ 
      position: 'fixed',
      left: 0,
      top: 0,
      width: '280px',
      height: '100vh',
      backgroundColor: '#2c3e50',
      padding: '2rem 1rem',
      boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
      zIndex: 1000,
      overflowY: 'auto'
    }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: '1rem',
        height: '100%'
      }}>
        <h2 style={{ 
          color: 'white', 
          textAlign: 'center', 
          marginBottom: '2rem',
          fontSize: '1.5rem',
          fontWeight: 'bold'
        }}>
          MUI学習
        </h2>
        
        {/* 基本コンポーネント */}
        <div style={{ marginBottom: '1rem' }}>
          <Typography variant="h6" style={{ color: '#ecf0f1', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 'bold' }}>
            基本コンポーネント
          </Typography>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button style={{
              width: '100%',
              padding: '12px 16px',
              fontSize: '14px',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '0.5rem'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#2980b9';
              e.currentTarget.style.transform = 'translateX(5px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#3498db';
              e.currentTarget.style.transform = 'translateX(0)';
            }}>
              🏠 基本コンポーネント
            </button>
          </Link>
          
          <Link to="/button" style={{ textDecoration: 'none' }}>
            <button style={{
              width: '100%',
              padding: '12px 16px',
              fontSize: '14px',
              backgroundColor: '#2980b9',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '0.5rem'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#1f5f8b';
              e.currentTarget.style.transform = 'translateX(5px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#2980b9';
              e.currentTarget.style.transform = 'translateX(0)';
            }}>
              🔘 Button
            </button>
          </Link>
          
          <Link to="/typography" style={{ textDecoration: 'none' }}>
            <button style={{
              width: '100%',
              padding: '12px 16px',
              fontSize: '14px',
              backgroundColor: '#2980b9',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '0.5rem'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#1f5f8b';
              e.currentTarget.style.transform = 'translateX(5px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#2980b9';
              e.currentTarget.style.transform = 'translateX(0)';
            }}>
              📝 Typography
            </button>
          </Link>
          
          <Link to="/grid" style={{ textDecoration: 'none' }}>
            <button style={{
              width: '100%',
              padding: '12px 16px',
              fontSize: '14px',
              backgroundColor: '#2980b9',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '0.5rem'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#1f5f8b';
              e.currentTarget.style.transform = 'translateX(5px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#2980b9';
              e.currentTarget.style.transform = 'translateX(0)';
            }}>
              📐 Grid
            </button>
          </Link>
        </div>
        
        {/* フォームコンポーネント */}
        <div style={{ marginBottom: '1rem' }}>
          <Typography variant="h6" style={{ color: '#ecf0f1', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 'bold' }}>
            フォームコンポーネント
          </Typography>
          <Link to="/form" style={{ textDecoration: 'none' }}>
            <button style={{
              width: '100%',
              padding: '12px 16px',
              fontSize: '14px',
              backgroundColor: '#27ae60',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '0.5rem'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#229954';
              e.currentTarget.style.transform = 'translateX(5px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#27ae60';
              e.currentTarget.style.transform = 'translateX(0)';
            }}>
              📝 フォームコンポーネント
            </button>
          </Link>
        </div>
        
        {/* データ表示コンポーネント */}
        <div style={{ marginBottom: '1rem' }}>
          <Typography variant="h6" style={{ color: '#ecf0f1', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 'bold' }}>
            データ表示コンポーネント
          </Typography>
          <Link to="/data" style={{ textDecoration: 'none' }}>
            <button style={{
              width: '100%',
              padding: '12px 16px',
              fontSize: '14px',
              backgroundColor: '#e74c3c',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '0.5rem'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#c0392b';
              e.currentTarget.style.transform = 'translateX(5px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#e74c3c';
              e.currentTarget.style.transform = 'translateX(0)';
            }}>
              📊 データ表示コンポーネント
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar; 
