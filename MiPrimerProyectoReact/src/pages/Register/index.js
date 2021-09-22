import React from "react";
import RegisterForm from "../../components/RegisterForm";
import { Box } from "@material-ui/core";

const RegisterView = ({ setIsLogged, setUser, setGoHome, setIsRegistered }) => {
  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
        component="div"
      >
        <RegisterForm
          setUser={setUser}
          setIsLogged={setIsLogged}
          setGoHome={setGoHome}
          setIsRegistered={setIsRegistered}
        />
      </Box>
    </>
  );
};

export default RegisterView;