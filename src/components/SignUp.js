import React, { Text } from 'react';
import './Sign.css'
import { Container, Row, Col, Form, Button, Image} from "react-bootstrap"
import Gambar from '../assets/SignUp.png'

export default function SignUp(){
    return(
        <div className="SignUp">
            <Container fluid>
                <Container className="login-ctn">
                    <Row style={{padding:'50px'}}>
                        <Col xs={12} lg={7}>
                            <Image src={Gambar} fluid/>
                            <h4>Start your new journey with us.</h4>
                            <p>Build your own shop using peduli digital Marketplace, you can sell all your favorite item and get easy money</p>
                        </Col>
                        <Col xs={12} lg={5}>
                            <h2>Sign Up</h2>
                            <Form className="login-form">
                                <Form.Group controlId="formEmail">
                                    <Form.Label style={{color:'#9D9D9D'}}>Username / Email</Form.Label>
                                    <Form.Control size="lg" type="text" placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="formPassword">
                                    <Form.Label style={{color:'#9D9D9D'}}>Password</Form.Label>
                                    <Form.Control size="lg" type="password" placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="formConfPassword">
                                    <Form.Label style={{color:'#9D9D9D'}}>Confirmation Password</Form.Label>
                                    <Form.Control size="lg" type="password" placeholder="" />
                                </Form.Group>
                                <Button style={{backgroundColor:'#0086CF'}} type="submit" block>
                                    Register
                                </Button>
                            </Form>
                            <p className="signup-link">Already have an account? <span><a href="/">Sign In</a></span></p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}