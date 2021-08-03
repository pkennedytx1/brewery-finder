import React, { useContext, useEffect } from 'react';
import { BreweryContext } from '../store';
import axios from 'axios';

const BreweryRenderer = ({ children }) => {
    const { breweryState, dispatchBreweryData } = useContext(BreweryContext);
    const { searchCity, pageNumber } = breweryState;

    useEffect(() => {
        dispatchBreweryData({ type: 'SET_LOADING', payload: true })
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
            dispatchBreweryData({ type: 'SET_LOADING', payload: false })
            dispatchBreweryData({ type: 'SET_BREWERY_DATA', payload: response.data })
        }
    }

    return(
        <>
            {children}
        </>
    )
}

export default BreweryRenderer;