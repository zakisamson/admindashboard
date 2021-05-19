import React from 'react';
import { Row, Col, Image, Form, Button } from 'react-bootstrap'
import UploadVector from '../../assets/upload.png'

export default function AddProduct(){
    return(
        <div className="AddProduct" style={{marginTop:'40px'}}>
            <p style={{textAlign:'left', color:'#9D9D9D', fontWeight:'700', fontsize:'18px'}}>Hello zakisamson,</p>
            <div className="product-ctn" style={{borderRadius:'25px', border:'0.5px solid lightgray'}}>
                <div className="header" style={{borderBottom:'0.5px solid lightgray', width:'inherit', padding:'10px'}}>
                    <h2>Add New Product</h2>    
                </div>
                <div className="body" >
                    <Row>
                        <Col style={{padding:'10px'}}>
                            <Image style={{height:'auto', width:'300px'}} src={UploadVector} fluid/>
                        </Col>
                        <Col style={{paddingRight:'40px', textAlign:'left', paddingBlock:'40px', color:'#9D9D9D'}}>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control type="text" placeholder=" " />
                                </Form.Group>
                                <Row>
                                    <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type="text" placeholder=" " />
                                    </Form.Group>
                                    </Col>
                                    <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Stock</Form.Label>
                                        <Form.Control type="text" placeholder=" " />
                                    </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control type="text" placeholder=" " />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" as="textarea" rows={3} />
                                </Form.Group>
                                <Button block type="submit">
                                    Save
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}