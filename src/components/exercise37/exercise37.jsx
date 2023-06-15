import { useState } from "react";


export function useLogin(){
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

      return{
        login : login,
        inputChange : handleInput,
        resetInput : handleResetInput,

      }
}