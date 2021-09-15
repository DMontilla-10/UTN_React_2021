import React, { StrictMode, useState } from 'react';
import LoginView from './pages/Login';
import RegisterView from './pages/Register';
import Home from './pages/Home'

function App() {
  const [user, setUser] = useState({})
  console.log('User: ', user)

  return (
    <StrictMode>
      {/* <LoginView /> */}
      {/* <RegisterView setUser={setUser}/> */}
      <Home />
    </StrictMode>
  );
}

export default App;
