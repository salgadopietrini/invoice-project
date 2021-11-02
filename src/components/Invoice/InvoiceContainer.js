import React from "react";

import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Dashboard from '@material-ui/icons/Dashboard';
import AccountCircle from '@material-ui/icons/AccountCircle';

import 'bootstrap/dist/css/bootstrap.min.css';
import './InvoiceContainer.css';
import {
    Button,
    Card,
    CardGroup,
    CardImg,
    Col,
    Container,
    Form,
    FormControl,
    Image,
    Row
} from "react-bootstrap";



export default function InvoiceContainer() {
  return <div>

   <Link to={"/"}>
      <Dashboard className="dashboard"/>
   </Link>
   <Link to={"/userData"}>
      <AccountCircle className="account"/>
  </Link>

  <h2>Your Invoice</h2> 
  
                                <Row>
                                 
                                    <Col xs={10} md={10} style={{padding: '20px', margin:'100px', marginTop: '20px'}} >
                                        <div style={{backgroundColor: "#090F86"}} >
                                        <h2>Invoice #2</h2>

                                            <Container  style={{width: '50rem'}} className="justify-content-lg-center ">
                                            <Container style={{padding: "40px"}}>
                                                <Row>

                                                    <Col xs={6} md={6} style={{marginBottom: "10px"}} >
                                                        <Card>
                                                            <CardImg
                                                                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630572642i/2165.jpg"
                                                                alt="" height="200px"/>

                                                            <Card.Footer>
                                                                <small className="text-muted">Last updated 3 mins
                                                                    ago</small>
                                                            </Card.Footer>
                                                        </Card>

                                                    </Col>
                                                    <Col xs={6} md={6} style={{marginBottom: "10px"}}>
                                                        <Card>
                                                            <CardImg
                                                                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630572642i/2165.jpg"
                                                                alt="" height="200px"/>

                                                            <Card.Footer>
                                                                <small className="text-muted">Last updated 3 mins
                                                                    ago</small>
                                                            </Card.Footer>
                                                        </Card>
                                                    </Col>
                                                    <Col xs={6} md={6} style={{marginBottom: "10px"}}>
                                                        <Card>
                                                            <CardImg
                                                                src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630572642i/2165.jpg"
                                                                alt=""height="200px"/>

                                                            <Card.Footer>
                                                                <small className="text-muted">Last updated 3 mins
                                                                    ago</small>
                                                            </Card.Footer>
                                                        </Card>
                                                    </Col>
          
                                                </Row>
                                            </Container>
                                            </Container>


                                        </div>

                                    </Col>
                                      
                                </Row>
                   
           
  
  </div>;
}




