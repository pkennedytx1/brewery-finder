import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BreweryRenderer = ({ children, setBreweryData, searchCity }) => {
    useEffect(() => {
        fetchBreweryData();
    }, [searchCity])

    const fetchBreweryData = async () => {
        let response = null
        try {
            response = await axios.get(`https://api.openbrewerydb.org/breweries?by_city=${searchCity}&per_page=6`);
        } catch (error) {
            console.error(error);
            response = error;
        } finally {
            setBreweryData(response.data);
        }
    }

    return(
        <>
            {children}
        </>
    )
}

export default BreweryRenderer;