import { useState } from "react";

export function LoginFunc() {
  const [login, setLogin] = useState({
    username: "",
    password: "",
    remember: false,
  });
  function handleInput(event) {
    const { name, type, value, checked } = event.target;

    setLogin((login) => {
      return {
        ...login,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleResetInput() {
    setLogin({
      username: "",
      password: "",
      remember: false,
    });
  }
  return (
    <div>
      <h1>My form</h1>
      <form action="">
        <input
          type="text"
          name="username"
          value={login.username}
          onChange={handleInput}
        />
        <input
          type="password"
          name="password"
          value={login.password}
          onChange={handleInput}
        />
        <input
          type="checkbox"
          name="remember"
          checked={login.remember}
          onChange={handleInput}
        />
        <button type="reset" onClick={handleResetInput}>
          Reset
        </button>
      </form>
    </div>
  );
}
