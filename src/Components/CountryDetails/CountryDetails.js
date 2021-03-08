import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const CountryDetails = () => {
    const {name} = useParams();
    console.log(name)
const [country, setCountry] = useState({});
console.log(country)
    useEffect(()=> {
        console.log('hello')
       const url = `https://restcountries.eu/rest/v2/name/${name}`;
       fetch(url)
       .then(res => res.json())
       .then(data => setCountry(data[0]))
    }, [name])
    

    const countryStyle={
        border: '1px solid purple',
        marginLeft: '30px',
        marginRight: '30px',
        marginTop: '10px',
        paddingTop: '15px',
        borderRadius: '10px',
        // width: '400px',
       backgroundColor: 'lightgray',
    //    marginLeft: '300px',
        textAlign: 'center'
    
    }
    const imageStyle={

        height: '200px',
        borderRadius: '10px',
        width: '500px',
        border: '1px solid gray'
    }
   
    return (
        <div style={countryStyle}>
            <img style={imageStyle} src={country.flag} alt=""/>
            <h3>Name: {country.name}</h3>
            <h6>N.Name : {country.nativeName}</h6>
            <p> Capital: {country.capital}</p>
            <p>Region : {country.region}</p>
            <p>Code : {country.alpha3Code}</p>
            <p>Population : {country.population}</p>
            <p>Area : {country.area}</p>
            <p>Subregion : {country.subregion}</p>
            <p>TimeZones : {country.timezones}</p>
            <p>NumCode : {country.numericCode}</p>
        </div>
    );
};

export default CountryDetails;