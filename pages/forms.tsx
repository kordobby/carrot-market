import { RecordWithTtl } from "dns";
import React, { useState } from "react";

export default function Forms() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formerrors, setFormErrors] = useState("");

  const onUserNameChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setUserName(value);
  };

  const onPasswordChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setPassword(value);
  };

  const onEmailChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setEmail(value);
  };

  const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(email, username, password);
    if (username === "" || email === "" || password === "") {
      setFormErrors("All fields are required");
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        onChange={onUserNameChange}
        placeholder="Username"
        required
        minLength={5}
      />
      <input
        type="email"
        onChange={onEmailChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        onChange={onPasswordChange}
        placeholder="Password"
        required
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
