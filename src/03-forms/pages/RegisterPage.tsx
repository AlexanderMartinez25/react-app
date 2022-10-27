import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";

import "../styles/styles.css";

export const RegisterPage = () => {
  const { onChange, formData, email, name, password1, password2 } = useForm({
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
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={(e) => onChange(e)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password1}
          name="password1"
          onChange={(e) => onChange(e)}
        />
        <input
          type="password"
          placeholder="Repeat Password"
          value={password2}
          name="password2"
          onChange={(e) => onChange(e)}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};
