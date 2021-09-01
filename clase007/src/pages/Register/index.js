import React from "react";
import { Box } from '@material-ui/core'

const RegisterView = () => {
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
      <RegisterForm />     
    </Box>
  );
};

export default RegisterView;
