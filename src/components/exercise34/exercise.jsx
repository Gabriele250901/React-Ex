
import { useState } from "react";
import { useEffect } from "react";
import { useGitHubUser } from "../exercise38/exercise38";

export function GitHubUser({ username }) {
  const {data, loading, error} = useGitHubUser(username)
  return <div>
    {loading && <h1>Username is not valid</h1>}
    {error && <h1>There has been an error</h1>}
    {data && <h1>{data.name}</h1>} 
  </div>;
}
