import React, { useEffect, useState } from 'react';
import './styles/App.css';
import { HashRouter } from 'react-router';
import Navbar from './components/UI/navbar/Navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context/context.js';


function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, [])

  return (
    <div className="App">
      <AuthContext.Provider value={{
          isAuth,
          setIsAuth,
          isLoading
        }}>
          <HashRouter>
          <Navbar />
          <AppRouter /> 
        </HashRouter>
      </AuthContext.Provider> 
    </div>
  )
}

export default App;
