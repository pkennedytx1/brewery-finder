import React, { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';

const BreweryCard = ({ brewery }) => {
    const { name, website_url, street, state, city } = brewery;

    useEffect(() => {
        console.log('hello');
    }, [])

    return(
        <Card className='mb-4' style={{ minHeight: '200px' }}>
            <Card.Header>
                <i className="bi bi-shop"></i>
                {' '}
                {name}
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    <i className="bi bi-geo-alt-fill"></i>
                    {' '}{city}, {state}
                </Card.Title>
                <Card.Text>
                    {street && (
                        <>
                            <i className="bi bi-geo"></i>
                            {' '}{street}
                        </>
                    )}
                </Card.Text>
                {website_url &&
                    <Button href={website_url} target="_blank" variant="outline-primary">
                        <i className="bi bi-hand-index-thumb"></i>
                        {' '}
                        Link to Brewery Site
                    </Button>
                }
            </Card.Body>
        </Card>
    )
}

export default BreweryCard;