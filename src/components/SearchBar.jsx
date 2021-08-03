import React from 'react';
import { InputGroup, FormControl, Button, Spinner } from 'react-bootstrap';

const SearchBar = ({ city, setCity, setSearchCity, isLoading }) => {
    return(
        <InputGroup style={{ maxWidth: '500px', margin: '20px auto' }} className="mb-3">
            {isLoading &&
                <span style={{ position: 'absolute', top: '4px', left: '-40px', zIndex: '100'}}>
                    <Spinner animation="border" variant="primary" />
                </span>
            }
            <FormControl
                placeholder="Search Brewery By City"
                aria-label="Search Brewery By City"
                aria-describedby="basic-addon2"
                value={city}
                onChange={(e) => {
                    setCity(e.target.value);
                }}
            />
            <Button onClick={() => setSearchCity(city)} variant="primary" id="button-addon2">
                <i class="bi bi-search"></i>
                {' '}
                Search Breweries
            </Button>
        </InputGroup>
    )
}

export default SearchBar;