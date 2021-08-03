import React, { useContext, useState } from 'react';
import { InputGroup, FormControl, Button, Spinner, Form } from 'react-bootstrap';
import { BreweryContext } from '../store';

const SearchBar = () => {
    const { breweryState, dispatchBreweryData } = useContext(BreweryContext);
    const { isLoading } = breweryState;
    const [city, setCity] = useState('austin');
    const [inputError, setInputError] = useState(false);

    const handleValidation = () => {
        if (!city) {
            setInputError(true);
        } else {
            setInputError(false);
            dispatchBreweryData({ type: 'SET_SEARCH_PARAMETERS', payload: city });
        }
    }

    return(
        <InputGroup style={{ maxWidth: '500px', margin: '20px auto' }} className="mb-3">
            {isLoading &&
                <span style={{ position: 'absolute', top: '4px', left: '-40px', zIndex: '100'}}>
                    <Spinner animation="border" variant="primary" />
                </span>
            }
            <FormControl
                placeholder={inputError ? 'Search Paramter Cannot be Blank.' : 'Search Brewery by City'}
                aria-label="Search Brewery By City"
                aria-describedby="basic-addon2"
                value={city}
                onChange={(e) => {
                    setInputError(false);
                    setCity(e.target.value);
                }}
                isInvalid={inputError}
            />
            <Button onClick={() => handleValidation()} variant="primary" id="button-addon2">
                <i className="bi bi-search"></i>
                {' '}
                Search Breweries
            </Button>
        </InputGroup>
    )
}

export default SearchBar;