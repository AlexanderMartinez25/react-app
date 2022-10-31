import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyCheckBox, MySelect, MyTextInput } from "../components";
import "../styles/styles.css";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("El correo no tiene un formato invalido")
            .required("Requerido"),
          terms: Yup.boolean()
            // debe de ser alguno de los valores que estan detro de []
            .oneOf([true], "Debe de aceptar las condiciones"),
          jobType: Yup.string()
            // no puede ser uno de los valores que estan dentro de []
            .notOneOf(["it-jr"], "Esta opción no es permitida")
            .required("Requerido"),
        })}
      >
        {(formik) => {
          return (
            <Form>
              <MyTextInput
                label="First Name"
                name="firstName"
                placeholder="Alex"
              />

              <MyTextInput
                label="Last Name"
                name="lastName"
                placeholder="Martinez"
              />

              <MyTextInput
                label="Email Address"
                name="email"
                placeholder="alex@gmail.com"
                type="email"
              />

              <MySelect label="Job Type" name="jobType">
                <option value="">Pick somthing</option>
                <option value="developer">Developer</option>
                <option value="desingner">Designer</option>
                <option value="it-senior">IT Senior</option>
                <option value="it-jr">IT Jr.</option>
              </MySelect>

              <MyCheckBox label="Terms & Conditions" name="terms" />
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
