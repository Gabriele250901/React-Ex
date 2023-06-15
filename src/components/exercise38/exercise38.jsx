import { useState, useEffect } from "react";

export function useGitHubUser(username) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });

  }, [username]);
  return {data}
}
