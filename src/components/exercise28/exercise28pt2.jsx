import React from "react";
import { LanguageContext } from "./exercise28";

const strings = {
  en: {
    LANGUAGE_SEL: "The language selected is: English ",
  },
  it: {
    LANGUAGE_SEL: "La lingua selezionata e': Italiano",
  },
};
export class DisplayLanguage extends React.Component {
  render() {
    return (
      
        <LanguageContext.Consumer>
          {(language) => {
            return (
              <h1>
                {strings[language].LANGUAGE_SEL}
                
              </h1>
            );
          }}
        </LanguageContext.Consumer>
      
    );
  }
}
