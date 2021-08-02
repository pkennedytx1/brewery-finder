import SearchBar from './components/SearchBar';
import BreweryCard from './components/BreweryCard';
import CardPagination from './components/Pagination';
import BreweryRenderer from './containers/BreweryRenderer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <BreweryRenderer>
      <div className="App">
        <div>Brewery Finder</div>
        <ul>
          <li>Create axios call to OpenBrewery</li>
          <li>Hook up components (below)</li>
          <li>Pagination</li>
          <li>Bonus: global state</li>
        </ul>
        <h1>Components</h1>
        <SearchBar />
        <Container>
          <Row>
            <Col sm={12} md={6} lg={4}>
              <BreweryCard />
            </Col>
            <Col sm={12} md={6} lg={4}>
              <BreweryCard />
            </Col>
            <Col sm={12} md={6} lg={4}>
              <BreweryCard />
            </Col>
            <Col sm={12} md={6} lg={4}>
              <BreweryCard />
            </Col>
          </Row>
        </Container>
        <CardPagination />
      </div>
    </BreweryRenderer>
  );
}

export default App;
