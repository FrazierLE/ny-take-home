export const fetchData = (category: string) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
}
