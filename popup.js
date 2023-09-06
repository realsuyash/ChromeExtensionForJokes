// Define the URL of the joke API
const apiUrl = 'https://v2.jokeapi.dev/joke/Any';

// Function to fetch and display a new joke
async function fetchJoke() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const jokeText = data.joke || `${data.setup} ${data.delivery}`;
    document.getElementById('joke-text').textContent = jokeText;
  } catch (error) {
    console.error('Error fetching joke:', error);
  }
}

// Add a click event listener to the "Get Joke" button
document.getElementById('get-joke').addEventListener('click', fetchJoke);

// Fetch and display a joke when the popup is opened
fetchJoke();
