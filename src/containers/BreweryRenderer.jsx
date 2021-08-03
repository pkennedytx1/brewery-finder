import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BreweryRenderer = ({ children, pageNumber, setBreweryData, searchCity, setLoading }) => {
    useEffect(() => {
        setLoading(true);
        fetchBreweryData();
    }, [searchCity, pageNumber])

    const fetchBreweryData = async () => {
        let response = null
        try {
            response = await axios.get(`https://api.openbrewerydb.org/breweries?by_city=${searchCity}&per_page=6&page=${pageNumber}`);
        } catch (error) {
            console.error(error);
            response = error;
        } finally {
            setLoading(false);
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