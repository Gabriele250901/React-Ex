import React, { useState } from "react";
import "./App.css";
import { Hello } from "./components/exercise1/hello";
import { Message } from "./components/exercise1/message";

import { GitHubUser } from "./components/exercise34/exercise";
import { GitHubUserList } from "./components/exercise35/exercise35";
import { ClickCounterFunc } from "./components/exercise30/exercise30";
import { LoginFunc } from "./components/exercise31/exercise31";
import { CarDetails } from "./components/exercise40/exercise40";
import { LanguageContext } from "./components/exercise41/LanguageContext";
import { DisplayLanguage1 } from "./components/exercise41/execise41";
import { CallBackCounter } from "./components/exercise42/exercise42";
import { FilteredList } from "./components/exercise43/exercise43";
import { Link, Route, Routes } from "react-router-dom";
import { ShowGitHubUser } from "./components/exercise45/Exercise45";
import { RouteGitHubUsernameList } from "./components/exercise48/Exercise48";

function App() {
  return (
    <div>
      <Message />
      <GitHubUser username="gabriele250901"/>
    </div>
  );
}

export default App;
// ogni volta che mi correggerai un esercizio togliero` la classe dall'app in modo da non fare casini
