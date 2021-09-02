import React from "react";
import { Box } from '@material-ui/core'
import RegisterForm from "../../components/RegisterForm";

const RegisterView = ({setUser}) => {
  return (
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
      <RegisterForm setUser={setUser}/>     
    </Box>
  );
};

export default RegisterView;
