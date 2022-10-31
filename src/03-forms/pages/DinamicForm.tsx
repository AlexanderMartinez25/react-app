import { Formik, Form } from "formik";
import { MyTextInput } from "../components";
import formJson from "../data/custom-form.json";

export const DinamicForm = () => {
  return (
    <div>
      <h1>DinamicForm</h1>
      <Formik
        initialValues={{
          name: "alex",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form>
            {formJson.map(({ label, name, placeholder, type }) => {
              return (
                <MyTextInput
                  key={name}
                  type={type as any}
                  name={name}
                  label={label}
                  placeholder={placeholder}
                />
              );
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
