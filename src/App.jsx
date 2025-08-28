// src/App.jsx
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('API Key:', import.meta.env.VITE_API_KEY);
    fetch(import.meta.env.VITE_API_URL + '/data')
      .then(response => response.json())
      .then(data => console.log(data));
  }, []);

  return <div>My Tauri + React app</div>;
}

export default App;
