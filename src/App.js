/* eslint-disable */
import React, { Component, useContext, useState } from 'react';
import { Navbar,Nav,NavDropdown,Container, Card, Button } from 'react-bootstrap';
import './App.css';
import Data from './data.js'
import Detail from './Detail.js'
import axios from 'axios'
import { Link, Route, Switch } from 'react-router-dom'

let stockContext = React.createContext()

function App() {

  let [shoes, shoes변경] = useState(Data)
  const [Stock, setStock] = useState([10,11,12])


  return (
    <div className="App">
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Shoe Shop</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/"> Home</Nav.Link>
        <Nav.Link as={Link} to="/detail" >Detail</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>





<Switch>
  <Route exact path="/">
    <Card className="background">
      <Card.Header>20% Season Off</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <div className="container">
      <stockContext.Provider value={Stock}>
        <div className="row">
          {
            shoes.map((a, i)=> {
              return <Cards shoes={shoes[i]} i={i} key={i}/>
            })
          }
        </div>
      </stockContext.Provider>
      <button className="btn btn-primary" onClick={()=> {

        axios.post('서버url', { id : '12', pw : 1234})
        .then()

        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((result)=> { 
          
          shoes변경([...shoes, ...result.data])
          console.log(result.data);
         })
        .catch(()=> { 
          console.log('실패했어요');
         })

      }}>더보기</button>
  </div>
  </Route>







  <Route path="/detail/:id">
      <Detail shoes={shoes} Stock={Stock} setStock={setStock}/>
  </Route>

  <Route path="/:id">
        <div>아무거나 적었을때</div>
  </Route>

  {/* <Route path="/어쩌구" component={Modal} ></Route> */}
</Switch>





    </div>
  );
}

function Cards(props) {

  let stock = useContext(stockContext)

  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i + 1) +'.jpg'} width="100%" alt="" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content } & { props.shoes.price }</p>
      <Test/>

    </div>
  )
}




function Test() {

  let stock = useContext(stockContext)

  return <p>{stock}</p>
}





export default App;
