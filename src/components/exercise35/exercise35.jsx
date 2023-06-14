import { useState } from "react";
import { GitHubUser } from "../exercise34/exercise";


export function GitHubUserList(){
    const [usernameArr , setUsernameArr] = useState([])
    const [input , setInput] = useState({username : ""})
   

    function handleInput(event){
        const {name , value} = event.target
        setInput({
            [name] : value
        })
    }
    function handleAddUsername(){
        setUsernameArr([...usernameArr, input.username])
        
        console.log(usernameArr)
    }
    return(
        <div>
            <input type="text" name="username" value={input.username} onChange={handleInput}/>
            <button type="submit" onClick={handleAddUsername}>Add username</button>
            {usernameArr.map((el,index)=> (
                <li style={{listStyle: "none"}}key={index}><GitHubUser username={el}/></li>
            ))}
        </div>
    )
}