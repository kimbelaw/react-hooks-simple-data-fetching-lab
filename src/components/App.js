import React, { useState, useEffect } from 'react';

function App() {
    // State to hold the dog image URL and loading status
    const [dogImageUrl, setDogImageUrl] = useState(null);
    const [loading, setLoading] = useState(true);
  
    // useEffect to fetch data from the Dog API
    useEffect(() => {
      // Fetch data from the Dog API
      fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((data) => {
          // Update state with the dog image URL
          setDogImageUrl(data.message);
          // Set loading to false to indicate that data has been loaded
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          // In case of an error, you might want to handle it here
          setLoading(false);
        });
    }, []);
  
    return (
      <div className="App">
        <h1>Random Dog Image</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <img src={dogImageUrl} alt="A Random Dog" />
          </div>
        )}
      </div>
    );
  }
  
  export default App;
  

