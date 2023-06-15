import { useState } from "react";
import { useLogin } from "../exercise37/exercise37";

export function LoginFunc() {
  const {login, inputChange , resetInput} =useLogin()
  return (
    <div>
      <h1>My form</h1>
      <form action="">
        <input
          type="text"
          name="username"
          value={login.username}
          onChange={inputChange}
        />
        <input
          type="password"
          name="password"
          value={login.password}
          onChange={inputChange}
        />
        <input
          type="checkbox"
          name="remember"
          checked={login.remember}
          onChange={inputChange}
        />
        <button type="reset" onClick={resetInput}>
          Reset
        </button>
      </form>
    </div>
  );
}
