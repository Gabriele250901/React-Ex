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
import { TodoList } from "./components/exercise23/exercise23";
import { LanguageContext } from "./components/exercise28/exercise28";
import { DisplayLanguage } from "./components/exercise28/exercise28pt2";
import { ClickCounterFunc } from "./components/exercise30/exercise30";
import { LoginFunc } from "./components/exercise31/exercise31";

 class App extends React.Component {

  render() {
    return (
      <div>
       
        <Hello />
        <Message />
        <LoginFunc/>
      </div>
    );
  }
}

export default App
// ogni volta che mi correggerai un esercizio togliero` la classe dall'app in modo da non fare casini
