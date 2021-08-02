import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const SearchBar = () => {
    return(
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Search Brewery By City"
                aria-label="Search Brewery By City"
                aria-describedby="basic-addon2"
            />
            <Button variant="outline-success" id="button-addon2">
                Search Breweries
            </Button>
        </InputGroup>
    )
}

export default SearchBar;