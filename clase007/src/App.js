import React, { StrictMode, useState } from 'react';
import LoginView from './pages/Login';
import RegisterView from './pages/Register';

function App() {
  const [user, setUser] = useState({})
  console.log('User: ', user)

  return (
    <StrictMode>
      {/* <LoginView /> */}
      <RegisterView setUser={setUser}/>
    </StrictMode>
  );
}

export default App;
