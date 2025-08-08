import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ 
      position: 'fixed',
      left: 0,
      top: 0,
      width: '250px',
      height: '100vh',
      backgroundColor: '#2c3e50',
      padding: '2rem 1rem',
      boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
      zIndex: 1000
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
          ナビゲーション
        </h2>
        
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button style={{
            width: '100%',
            padding: '15px 20px',
            fontSize: '16px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#2980b9';
            e.currentTarget.style.transform = 'translateX(5px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#3498db';
            e.currentTarget.style.transform = 'translateX(0)';
          }}>
            🏠 ホーム
          </button>
        </Link>
        
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <button style={{
            width: '100%',
            padding: '15px 20px',
            fontSize: '16px',
            backgroundColor: '#27ae60',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#229954';
            e.currentTarget.style.transform = 'translateX(5px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#27ae60';
            e.currentTarget.style.transform = 'translateX(0)';
          }}>
            ℹ️ About
          </button>
        </Link>
        
        <Link to="/contact" style={{ textDecoration: 'none' }}>
          <button style={{
            width: '100%',
            padding: '15px 20px',
            fontSize: '16px',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#c0392b';
            e.currentTarget.style.transform = 'translateX(5px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#e74c3c';
            e.currentTarget.style.transform = 'translateX(0)';
          }}>
            📧 お問い合わせ
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar; 
