/**https://formik.org/docs/tutorial */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
/**npm i yup --save */
import * as Yup from "yup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
  },
  form: {
  },
  input: {
    margin: ".3rem 0 .3rem 0",
  },
});

export default function LoginView() {
  const classes = useStyles();

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
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}} component='div'>
      <Card style={{background: '#AAA'}} className={classes.root}>
        <form onSubmit={formik.handleSubmit}>
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
            Submit
          </Button>
        </form>
      </Card>
    </Box>
  );
}
