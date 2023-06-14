import React from "react";
import "./App.css";
import { Hello } from "./components/exercise1/hello";
import { Message } from "./components/exercise1/message";

import { GitHubUser } from "./components/exercise34/exercise";

function App() {

  return (
    <div>
      <Hello />
      <Message />
      <GitHubUser username="gabriele250901"/>
    </div>
  );
}

export default App;
// ogni volta che mi correggerai un esercizio togliero` la classe dall'app in modo da non fare casini
