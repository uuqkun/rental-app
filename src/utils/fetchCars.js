export default async function fetchCars() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const data = await response.json();
  return data;
}

console.log(fetchCars());