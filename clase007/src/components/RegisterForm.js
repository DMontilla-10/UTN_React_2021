import React, { useState } from "react";
/**https://formik.org/docs/tutorial */
import { makeStyles } from "@material-ui/core/styles";
/** useFormik () es un hook de React personalizado que devuelve todos los estados y ayudantes de
 * Formik directamente. A pesar de su nombre, no está destinado a la mayoría de los casos de uso.
 */
import { useFormik, Field } from "formik";
/**npm i yup --save */
import * as Yup from "yup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  Checkbox,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 600,
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

const nationalities = ["Argentina", "Brasilera", "Paraguaya"];

const RegisterForm = ({ setUser, setIsRegistered, setIsLogged, setGoHome }) => {
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
      email: Yup.string("Ingresá tu email")
        .email("Ingresá un email válido")
        .required("El email es requerido"),
      password: Yup.string("Ingresá tu contraseña")
        /**Validaciones personalizadas con RegEx */
        .matches(/(^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$)/, {
          message: "La contraseña no cumple con los requisitos",
          excludeEmptyString: false,
        })
        .required("La contraseña es requerida"),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      setUser({ ...values, interests: interests });
      setIsRegistered((prevState) => !prevState);
      setGoHome(true)
    },
  });

  return (
    <Card className={classes.root}>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <div className={classes.div}>
          <TextField
            className={classes.input}
            id="firstName"
            name="firstName"
            label="Nombre"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            /** Si se interactuó con el campo y existe algún error de validación */
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            /** Si se interactuó con el campo,el campo quedó vacío al enviar y el campo es requerido */
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
            /** Si se interactuó con el campo y existe algún error de validación */
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            /** Si se interactuó con el campo,el campo quedó vacío al enviar y el campo es requerido */
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
            /** Si se interactuó con el campo y existe algún error de validación */
            error={formik.touched.email && Boolean(formik.errors.email)}
            /** Si se interactuó con el campo,el campo quedó vacío al enviar y el campo es requerido */
            helperText={formik.touched.email && formik.errors.email}
            variant="outlined"
            size="small"
          />
          <TextField
            className={classes.input}
            id="password"
            name="password"
            label="Contraseña"
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
            size="small"
            className={classes.input}
          >
            <InputLabel id="nationality">Nacionalidad</InputLabel>
            <Select
              labelId="nationality"
              id="nationality"
              name="nationality"
              defaultValue="Argentina"
              value={formik.values.nationality}
              onChange={formik.handleChange}
              label="Nacionalidad"
            >
              {nationalities.map((nationality) => {
                return (
                  <MenuItem key={nationality} value={nationality}>
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
                value="no-binario "
                control={<Radio />}
                label="No binario"
              />
            </RadioGroup>
          </FormControl>
          <FormControl className={classes.input} component="fieldset">
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
          label="Descripción"
          name="description"
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
          Registrarme
        </Button>
        {/* <Button
          style={{ margin: ".3rem 0 .3rem 0" }}
          color="primary"
          variant="outlined"
          onClick={() => setIsLogged((prevState) => !prevState)}
        >
          Cancelar
        </Button> */}
      </form>
    </Card>
  );
};

export default RegisterForm;