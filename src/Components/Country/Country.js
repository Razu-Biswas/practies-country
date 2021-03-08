import { Button } from 'react-bootstrap';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Country';



const Country = (props) => {
    let { name, capital, area, region, population, flag, alpha3Code } = props.country;
    const history = useHistory();
    const handleClick = (name) => {
        history.push(`/country/${name}`);
    }
    const countryStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '10px',
        borderRadius: '10px',
        width: '400px',

    }
    const imageStyle = {
        height: '200px',
        borderRadius: '10px',
        width: '380px',
        border: '1px solid gray'
    }
    const mainStyle={
        display: 'inline-block',
    }
    return (
        <div style={mainStyle}>
            <div style={countryStyle}>
                <img style={imageStyle} src={flag} alt="" />
                <h3>Name : {name}</h3>
                <h6>Capital : {capital}</h6>
                <p>Region: {region}</p>
                <p>Population : {population}</p>
                <p>Area : {area}</p>
                <p>Code : {alpha3Code}</p>

                <Button variant="outline-danger"

                    onClick={() => handleClick(name)}

                >
                    Details
           </Button>

            </div>

        </div>

    );
};

export default Country;