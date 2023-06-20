
import { useState } from "react";
import { useEffect } from "react";
import { useGitHubUser } from "../exercise38/exercise38";

export function GitHubUser({ username }) {
  const {data, loading, error, onFetchUser} = useGitHubUser(username)
  
  function handleGetUserData(){
    onFetchUser()
  }

  return <div>
    <button onClick={handleGetUserData}>Load user data</button>
    {loading && <h1>Username is not valid</h1>}
    {error && <h1>There has been an error</h1>}
    {data && <h1>{data.name}</h1>} 
  </div>;
}
