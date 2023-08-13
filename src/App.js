import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="header">List of Countries</h1>
      <ul className="country-list">
        {countries.map(country => (
          <li className="country-item" key={country.cca2}>
            <img className="flag" src={country.flags.png} alt={`${country.name.common} Flag`} />
            <span className="country-name">{country.name.common}</span>
          </li>
        ))}
      </ul>
    </div>
  );
  
}

export default App;
