import useSWR from 'swr'

const fetcher = url => fetch(url).then(response => response.json())
export function useGitHubUser(username) {
  const {data,error,} = useSWR(!username ? null : `https://api.github.com/users/${username}`, fetcher)

  return { data , error , loading : !data && !error };
}
