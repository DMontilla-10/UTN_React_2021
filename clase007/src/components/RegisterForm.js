import React, { useState } from "react";
import { useFormik } from "formik";
/**npm i yup --save */
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import { nationalities } from "../utils/nationalities";

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "1rem",
  },
  input: {
    margin: ".5rem 0 .5rem 0",
    minWidth: 250,
  },
  div: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const RegisterForm = ({ setUser }) => {
  const classes = useStyles();

  const [interests, setInterests] = useState({
    frontEnd: false,
    backEnd: false,
    qA: false,
  });

  const handleChange = (event) => {
    setInterests({ ...interests, [event.target.name]: event.target.checked });
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      nationality: "",
      birthday: "",
      gender: "",
      email: "",
      password: "",
      description: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string("Ingresa tu nombre").required(
        "El nombre es requerido"
      ),
      lastName: Yup.string("Ingresa tu apellido").required(
        "El apellido es requerido"
      ),
      email: Yup.string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
      password: Yup.string("Enter your password")
        .matches(/(^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$)/, {
          message: "La contraseña debe tener al menos una letra",
          excludeEmptyString: false,
        })
        // .min(8, "La contraseña debe tener al menos 8 caracteres")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      //   alert(JSON.stringify(values, null, 2));
      setUser({ ...values, interests: interests });
    },
  });

  return (
    <Card className={classes.root}>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <div className={classes.div}>
          <TextField
            className={classes.input}
            id="firstName"
            name="firstName"
            label="Nombre"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            variant="outlined"
            size="small"
          />
          <TextField
            className={classes.input}
            id="lastName"
            name="lastName"
            label="Apellido"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            variant="outlined"
            size="small"
          />
        </div>
        <div className={classes.div}>
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
        </div>
        <div className={classes.div}>
          <FormControl
            variant="outlined"
            className={classes.input}
            size="small"
          >
            <InputLabel id="nationality">Nacionalidad</InputLabel>
            <Select
              labelId="nationality"
              id="nationality"
              name="nationality"
              value={formik.values.nationality}
              onChange={formik.handleChange}
              label="Nacionalidad"
            >
              {nationalities.map((nationality) => {
                return (
                  <MenuItem key={{ nationality }} value={nationality}>
                    {nationality}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <TextField
            className={classes.input}
            id="birthday"
            name="birthday"
            label="Fecha de nac"
            type="date"
            onChange={formik.handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            size="small"
          />
        </div>
        <div className={classes.div}>
          <FormControl className={classes.input} component="fieldset">
            <FormLabel component="legend">Género</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
            >
              <FormControlLabel
                value="femenino"
                control={<Radio />}
                label="Femenino"
              />
              <FormControlLabel
                value="masculino"
                control={<Radio />}
                label="Masculino"
              />
              <FormControlLabel
                value="no-binario"
                control={<Radio />}
                label="No binario"
              />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset" className={classes.input}>
            <FormLabel component="legend">Intereses</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={interests.frontEnd}
                    onChange={handleChange}
                    name="frontEnd"
                  />
                }
                label="Front End"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={interests.backEnd}
                    onChange={handleChange}
                    name="backEnd"
                  />
                }
                label="Back End"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={interests.qA}
                    onChange={handleChange}
                    name="qA"
                  />
                }
                label="QA"
              />
            </FormGroup>
          </FormControl>
        </div>
        <TextField
          className={classes.input}
          id="description"
          name="description"
          label="Descripción"
          multiline
          rows={4}
          onChange={formik.handleChange}
          variant="outlined"
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

export default RegisterForm;
