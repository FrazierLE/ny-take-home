export const fetchData = () => {
  return fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=EsSFQeaciPxPiQbvmElEbARGb59zSloF')
    .then(res => res.json())
}
