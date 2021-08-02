import React from 'react';
import { Card, Button } from 'react-bootstrap';

const BreweryCard = () => {
    return(
        <Card>
            <Card.Header>Brewery Name</Card.Header>
                <Card.Body>
                <Card.Title>City and State</Card.Title>
                <Card.Text>
                    Brewery Address
                </Card.Text>
                <Button variant="primary">Link to Brewery Site</Button>
            </Card.Body>
        </Card>
    )
}

export default BreweryCard;