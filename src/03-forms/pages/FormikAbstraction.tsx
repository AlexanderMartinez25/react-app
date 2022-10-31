import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components/MyTextInput";
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
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Alex"
            />

            <MyTextInput
              label="Last Name"
              name="LastName"
              placeholder="Martinez"
            />

            <MyTextInput
              label="Email Address"
              name="email"
              placeholder="alex@gmail.com"
              type="email"
            />

            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select">
              <option value="">Pick somthing</option>
              <option value="developer">Developer</option>
              <option value="desingner">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Jr.</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />
            <label>
              <Field name="terms" type="checkbox" />
              Terms and conditions
            </label>
            <ErrorMessage name="terms" component="span" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
