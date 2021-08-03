import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import BreweryCard from './components/BreweryCard';
import CardPagination from './components/Pagination';
import BreweryRenderer from './containers/BreweryRenderer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [breweryData, setBreweryData] = useState([]);
  const [city, setCity] = useState('austin');
  const [searchCity, setSearchCity] = useState('austin');

  return (
    <BreweryRenderer searchCity={searchCity} breweryData={breweryData} setBreweryData={setBreweryData} >
      <div className="App">
        <div>Brewery Finder</div>
        <ul>
          <li>Create axios call to OpenBrewery</li>
          <li>Hook up components (below)</li>
          <li>Pagination</li>
          <li>Bonus: global state</li>
        </ul>
        <h1>Components</h1>
        <SearchBar setSearchCity={setSearchCity} setCity={setCity} city={city} />
        <Container>
          <Row>
            {breweryData?.length > 0 ? breweryData.map((brewery, i) => {
              return(
                <Col sm={12} md={6} lg={4}>
                  <BreweryCard key={i} brewery={brewery} />
                </Col>
              )
            }) : <h3>No Brewery Data to Display</h3>}
          </Row>
        </Container>
        <CardPagination />
      </div>
    </BreweryRenderer>
  );
}

export default App;
