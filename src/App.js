import React, { useContext } from 'react';
import SearchBar from './components/SearchBar';
import BreweryCard from './components/BreweryCard';
import CardPagination from './components/Pagination';
import BreweryRenderer from './containers/BreweryRenderer';
import { BreweryContext } from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col, Navbar } from 'react-bootstrap';

function App() {
  const { breweryState } = useContext(BreweryContext);
  const { breweryData } = breweryState;

  return (
    <div className="App">
      <BreweryRenderer>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Brewery Finder</Navbar.Brand>
          </Container>
        </Navbar>
        <SearchBar />
        <Container>
          <Row>
            {breweryData?.length > 0 ? breweryData.map((brewery, i) => {
              return(
                <Col key={i} sm={12} md={6} lg={4}>
                  <BreweryCard brewery={brewery} />
                </Col>
              )
            }) : <h3 style={{ textAlign: 'center', margin: '40px auto 40px auto' }} >No Brewery Data to Display</h3>}
          </Row>
        </Container>
        { breweryData?.length > 0 &&
          <CardPagination endOfData={breweryData.length < 6 ? true : false} />
        }
      </BreweryRenderer>
    </div>
  );
}

export default App;
