import { GitHubUser } from "../exercise34/exercise";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function RouteGitHubUsernameList(){
    const [usernameArr , setUsernameArr] = useState([])
    
   
    function handleFormSubmit(event){
        event.preventDefault();
        const name = event.target.username.value;
        if (name !== "") {
            setUsernameArr([...usernameArr, name]);
          }
          event.target.username.value = "";
        }
    


    
   
    return(
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="username"/>
                <button type="submit">Submit</button>
            </form>
            <ul>
                {usernameArr.map((el,index)=> (
                    <li key={index}>
                        <Link to={el}>{el}</Link>
                    </li>
                ))}
            </ul>
            <Outlet/>
        </div>
    )
}

