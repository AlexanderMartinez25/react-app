import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";
import "../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formink Page</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, "El nombre debe de ser 3 caracterres o mas")
            .max(15, "El nombre debe de ser menor de 15 caracteres")
            .required("Requerido"),
          email: Yup.string()
            .email("Revise el formato del correo")
            .required("Requerido"),
          password1: Yup.string().min(6, "Mínimo 6 letras").required(),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Las contraseñas no son iguales")
            .required("Requerido"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label="nombre" name="name" placeholder="Alxander" />
            <MyTextInput
              label="Email"
              name="email"
              placeholder="Alxander@gmial.com"
            />
            <MyTextInput
              label="Password"
              name="password1"
              type="password"
              placeholder="*****"
            />

            <MyTextInput
              label="Confirm Password"
              name="password2"
              type="password"
              placeholder="*****"
            />

            <button type="submit">Create</button>
            <button onClick={handleReset} type="button">
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
