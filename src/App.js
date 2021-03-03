import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClone, faRubleSign, faSnowflake, faAmericanSignLanguageInterpreting,faSms} from '@fortawesome/free-solid-svg-icons'
import { Button, Nav, NavDropdown, Navbar, Jumbotron, Card, ProgressBar, Spinner } from 'react-bootstrap';

function App() {
  return (
    <div className="container bg">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">MATIBOR</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Gallery</Nav.Link>
            <NavDropdown title="Features" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Web Design</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Web Development</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Graphic Design</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">SEO</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://www.facebook.com/mmrz4/">Facebook</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More Details</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Spinner animation="grow" />
            
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


      <Jumbotron>
        <h1>Hello, Friends!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
            </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>



      <div className="d-flex">
        <Card className="" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title><FontAwesomeIcon icon={faAmericanSignLanguageInterpreting} /> Web Development</Card.Title>
             <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
             </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card> 
        <Card className=" card ml-5" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title><FontAwesomeIcon icon={faSnowflake} /> Web Design</Card.Title>
             <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
             </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card> 
        
        <Card className="ml-5" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title><FontAwesomeIcon icon={faClone} /> UI/UX Design</Card.Title>
             <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
             </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card> 
      </div>
      <div className="mt-5">
        <h2 className="skil p-2">My Skills</h2>
        <h3 className="text-white">Html5</h3>
      <ProgressBar animated now={95} />
      <h3 className="text-white">Css3</h3>
      <ProgressBar animated now={92} />
      <h3 className="text-white">Javascript</h3>
      <ProgressBar animated now={60} />
      <h3 className="text-white">React.js</h3>
      <ProgressBar animated now={70} />
      </div>
      
      <div className="bottom">
         <a className="sms" href="https://www.messenger.com/t/100009010932150"><h2><FontAwesomeIcon icon={faSms} /></h2></a>
         <h3>Thank you guys for visiting my website...</h3>
         
      </div>
    </div>
  );
}


export default App;
