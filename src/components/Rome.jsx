import { Link } from 'react-router-dom';

export default function Rome() {
    return (
        <>
            <div className="App">
            <nav style={{ backgroundColor: '#333', padding: '10px', color: 'white' }}>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        
        <li style={{ marginRight: '15px' }}>
          <Link to="/home" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
        </li>
        <li>
          <Link to="/pados" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
        </li>
      </ul>
    </nav>
            </div>
        </>
        
    )
}