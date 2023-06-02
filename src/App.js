import React from "react";
import "./App.css";
import { Hello } from "./components/exercise1/hello";
import { Message } from "./components/exercise1/message";
import { Welcome } from "./components/exercise2/exercise2";
import { Age } from "./components/exercise6/exercise6";
import { Counter } from "./components/exercise12/exercise12";
import { CounterDisplay } from "./components/exercise12/exercise14";
import { ClickCounter } from "./components/exercise12/exercise16";
import { ClickTracker } from "./components/exercise17/exercise17";
import { InteractiveWelcome } from "./components/exercise18/exercise18";
import { Login } from "./components/exercise19/exercise19";
import { UncontrolledLogin } from "./components/exercise21/exercise21";



function App() {
  return (
    <div>
      <Hello />
      <Message />

      <UncontrolledLogin/>

      <ClickTracker />
    </div>
  );
}

export default App;

// ogni volta che mi correggerai un esercizio togliero` la classe dall'app in modo da non fare casini
