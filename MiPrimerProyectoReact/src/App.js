import React, { StrictMode, useState } from "react";
import LoginView from "./pages/Login";
import RegisterView from "./pages/Register";
import Home from "./pages/Home";
import { useSelector } from "react-redux";

function App() {
  const [user, setUser] = useState({});
  console.log("User: ", user);

  const usuarioLogeado = useSelector(state => state.isLogged)

  return (
    <StrictMode>
      {usuarioLogeado ? <Home /> : <LoginView />}
      {/* <RegisterView setUser={setUser}/> */}
    </StrictMode>
  );
}

export default App;
