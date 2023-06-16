import { useContext } from "react"
import { LanguageContext } from "./LanguageContext"


export function DisplayLanguage1(){
    const language = useContext(LanguageContext)
    return(
        <div>
            <h2>Current Language: {language}</h2>
        </div>
    )
}