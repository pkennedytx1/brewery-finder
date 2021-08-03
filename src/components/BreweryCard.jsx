import React from 'react';
import { Card, Button } from 'react-bootstrap';

const BreweryCard = ({ brewery }) => {
    const { name, website_url, street, state, city } = brewery;
    return(
        <Card className='mb-4' style={{ minHeight: '200px' }}>
            <Card.Header>{name}</Card.Header>
            <Card.Body>
                <Card.Title>{city}, {state}</Card.Title>
                <Card.Text>
                    {street}
                </Card.Text>
                {website_url &&
                    <Button href={website_url} target="_blank" variant="primary">Link to Brewery Site</Button>
                }
            </Card.Body>
        </Card>
    )
}

export default BreweryCard;