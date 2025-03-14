import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Pados from './components/Pados';
import Rome from './components/Rome';
import { createContext } from 'react';
import { ContextProvider } from './components/ContextProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const shareData = 'share me';
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Rome />} />
      <Route path='/home' element={<Home />}/>
      <Route path='/pados' element={<Pados />}/>
      </Routes>
      {/* <ContextProvider>
        <div className="App">
          <Home />
          <Pados />
        </div>
      </ContextProvider> */}
    </Router>
      
      
  );
}

export default App;
