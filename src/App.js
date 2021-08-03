import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import BreweryCard from './components/BreweryCard';
import CardPagination from './components/Pagination';
import BreweryRenderer from './containers/BreweryRenderer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col, Navbar } from 'react-bootstrap';

function App() {
  const [breweryData, setBreweryData] = useState([]);
  const [city, setCity] = useState('austin');
  const [searchCity, setSearchCity] = useState('austin');
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setLoading] = useState(true);

  return (
    <BreweryRenderer setLoading={setLoading} pageNumber={pageNumber} searchCity={searchCity} breweryData={breweryData} setBreweryData={setBreweryData} >
      <div className="App">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Brewery Finder</Navbar.Brand>
        </Container>
      </Navbar>
        <SearchBar isLoading={isLoading} setSearchCity={setSearchCity} setCity={setCity} city={city} />
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
        <CardPagination endOfData={breweryData.length < 6 ? true : false} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </div>
    </BreweryRenderer>
  );
}

export default App;
