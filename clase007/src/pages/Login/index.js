/**https://formik.org/docs/tutorial */
import React from "react";
import { Box, Link, Card } from "@material-ui/core";
import LoginForm from "../../components/LoginForm";
import { useStyles } from "./styles";

export default function LoginView() {
  const classes = useStyles();

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
      <LoginForm />
      <div style={{marginTop: '1rem'}}>
        <Link className={classes.link} href="#">
          Sos nuevo? REGISTRATE!
        </Link>
      </div>
    </Box>
  );
}
