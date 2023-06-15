
import { useState } from "react";
import { useEffect } from "react";
import { useGitHubUser } from "../exercise38/exercise38";

export function GitHubUser({ username }) {
  const {data} = useGitHubUser(username)
  return <div>
    {data && <h1>{data.name}</h1>} 
  </div>;
}
