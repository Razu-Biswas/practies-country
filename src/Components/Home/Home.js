
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country.js';




const Home = () => {

    const [country, setCountry] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    }, [])
const headerStyle={
    backgroundColor: 'lightgray',
    textAlign: 'center',
    height: '55px',
    marginTop: '3px',
    border: '1px solid golden',
    borderRadius:'5px'
}

    return (
        <div style={headerStyle}>
            
            <h1>Country Details : {country.length} </h1>
            {
                country.map(country => <Country country={country}></Country>)
            }
            

        </div>
    );
};

export default Home;