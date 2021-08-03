import React, { createContext, useReducer } from 'react';

const initialState = {
    breweryData: [],
    city: 'austin',
    searchCity: 'austin',
    pageNumber: 1,
    isLoading: true,
};

export const BreweryContext = createContext(initialState);

const { Provider } = BreweryContext;

export const BreweryProvider = ({ children }) => {
    const [ breweryState, dispatchBreweryData ] = useReducer(( state, action ) => {
        const currentState = { ...state };
        switch(action.type) {
            case 'SET_BREWERY_DATA':
                currentState.breweryData = action.payload;
                return currentState;
            case 'SET_SEARCH_PARAMETERS':
                currentState.searchCity = action.payload;
                return currentState;
            case 'SET_LOADING':
                currentState.isLoading = action.payload;
                return currentState;
            case 'SET_PAGE_NUMBER':
                currentState.pageNumber = action.payload;
                return currentState;
            default:
                throw new Error('No valid action given to the reducer.');
        }
    }, initialState)

    return(
        <Provider value={{ breweryState, dispatchBreweryData }}>{children}</Provider>
    );
};
