import React from 'react';
import Sidebar from './organisms/Sidebar';
import { Container, Row, Col, Button} from "react-bootstrap"
import List from './organisms/List';
import AddProduct from './organisms/AddProduct';

export default function Main(){
    return(
        <div className="Main" style={{marginTop:'40px'}}>
            <Container fluid>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <Sidebar />
                        </Col>
                        <Col lg={8}>
                            <AddProduct />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}