
import { useState } from "react";
import { useEffect } from "react";

export function GitHubUser({ username }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setData(json);
      });
  }, [username]);
  return <div>
    {data && <h1>{data.name}</h1>} 
  </div>;
}
