/**https://formik.org/docs/tutorial */
import React from "react";
import { Box, Link } from "@material-ui/core";
import LoginForm from "../../components/LoginForm";
import { useStyles } from "./styles";

export default function LoginView({ setIsLogged, setGoHome }) {
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
      <LoginForm setIsLogged={setIsLogged} setGoHome={setGoHome} />
      <div style={{ marginTop: "1rem" }}>
        <Link
          component="button"
          underline="hover"
          className={classes.link}
          onClick={() => {
            setIsLogged((prevState) => !prevState);
          }}
        >
          {"Sos nuevo? REGISTRATE!"}
        </Link>
      </div>
    </Box>
  );
}