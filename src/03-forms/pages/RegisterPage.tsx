import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";

import "../styles/styles.css";

export const RegisterPage = () => {
  const {
    onChange,
    resetForm,
    isValidEmail,
    formData,
    email,
    name,
    password1,
    password2,
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={(ev) => onSubmit(ev)}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          onChange={(e) => onChange(e)}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={(e) => onChange(e)}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Este campo es necesario</span>}
        <input
          type="password"
          placeholder="Password"
          value={password1}
          name="password1"
          onChange={(e) => onChange(e)}
        />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length > 0 && password1.trim().length > 0 && (
          <span>La contraseña tiene que tener 6 caracteres</span>
        )}

        <input
          type="password"
          placeholder="Repeat Password"
          value={password2}
          name="password2"
          onChange={(e) => onChange(e)}
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length > 0 && password1 !== password2 && (
          <span>las contraseñas deben de ser iguales</span>
        )}

        <button type="submit">Create</button>
        <button onClick={resetForm} type="button">
          Reset Form
        </button>
      </form>
    </div>
  );
};
