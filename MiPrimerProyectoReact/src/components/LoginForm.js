import React from "react";
import { useFormik } from "formik";
/**npm i yup --save */
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import {Card, TextField, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { signIn } from '../actions';

const useStyles = makeStyles({
    root: {
      maxWidth: 300,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: '1rem'
    },
    input: {
      margin: ".5rem 0 .5rem 0",
    },
  });

const LoginForm = () => {
  const classes = useStyles();

  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
      password: Yup.string("Enter your password")
        .min(8, "Password should be of minimum 8 characters length")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      dispatch(signIn())
    },
  });

  return (
    <Card className={classes.root}>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <TextField
          className={classes.input}
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          variant="outlined"
          size="small"
        />
        <TextField
          className={classes.input}
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          variant="outlined"
          size="small"
        />
        <Button
          style={{ margin: ".3rem 0 .3rem 0" }}
          color="primary"
          variant="contained"
          type="submit"
        >
          entrar
        </Button>
      </form>
    </Card>
  );
};

export default LoginForm;
