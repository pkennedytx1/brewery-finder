import React from 'react';
import { Card, Button } from 'react-bootstrap';

const BreweryCard = ({ brewery }) => {
    const { name, website_url } = brewery;
    return(
        <Card className='mb-4'>
            <Card.Header>{name}</Card.Header>
                <Card.Body>
                <Card.Title>City and State</Card.Title>
                <Card.Text>
                    Brewery Address
                </Card.Text>
                {website_url &&
                    <Button href={website_url} target="_blank" variant="primary">Link to Brewery Site</Button>
                }
            </Card.Body>
        </Card>
    )
}

export default BreweryCard;