/*

API URL: The apiUrl variable holds the URL of the API endpoint (https://jsonplaceholder.typicode.com/posts), which returns a list of posts.
fetchData Function: This asynchronous function uses the fetch() method to request data from the API.
await fetch(apiUrl): Sends a GET request to the API.
Checks if the response is okay with response.ok. If not, it throws an error.
Parses the response data to JSON format with await response.json().
Logging the Data: If successful, it logs the fetched data; otherwise, it catches and logs any errors.

*/

// Define the URL of the API endpoint
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Function to fetch data from the API
async function fetchData() {
  try {
    // Use fetch to make a GET request to the API
    const response = await fetch(apiUrl);

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON response into a JavaScript object
    const data = await response.json();

    // Log the data to the console
    console.log('Fetched Data:', data);
  } catch (error) {
    // Log any errors that occur during the fetch
    console.error('Error fetching data:', error);
  }
}

// Call the fetchData function to initiate the fetch request
fetchData();


