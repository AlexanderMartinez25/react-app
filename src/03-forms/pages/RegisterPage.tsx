import { ChangeEvent, FormEvent, useState } from "react";
import "../styles/styles.css";

export const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });
  const { email, name, password1, password2 } = registerData;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(registerData);
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
