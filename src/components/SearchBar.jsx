import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const SearchBar = ({ city, setCity, setSearchCity }) => {
    return(
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Search Brewery By City"
                aria-label="Search Brewery By City"
                aria-describedby="basic-addon2"
                value={city}
                onChange={(e) => {
                    setCity(e.target.value);
                }}
            />
            <Button onClick={() => setSearchCity(city)} variant="outline-success" id="button-addon2">
                Search Breweries
            </Button>
        </InputGroup>
    )
}

export default SearchBar;