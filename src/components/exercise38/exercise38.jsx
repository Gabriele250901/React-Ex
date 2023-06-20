import useSWR from 'swr'

const fetcher = url => fetch(url).then(response => response.json())
export function useGitHubUser(username) {
  const {data,error, mutate} = useSWR(!username ? null : `https://api.github.com/users/${username}`, fetcher)

  function fetchGitHubUser(){
    mutate()
    
  }


  return { data , error , loading : !data && !error , onFetchUser: fetchGitHubUser};
}
