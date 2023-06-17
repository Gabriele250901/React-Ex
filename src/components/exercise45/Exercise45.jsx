import { useParams } from "react-router-dom";
import { GitHubUser } from "../exercise34/exercise";

export function ShowGitHubUser() {
    const {username} = useParams()
 
 
    return (
    <div>
      <GitHubUser username={username}/>
    </div>
  );
}
