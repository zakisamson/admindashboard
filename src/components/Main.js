import React from 'react';
import Sidebar from './Sidebar';
import { Container, Row, Col, Button} from "react-bootstrap"

export default function Main(){
    return(
        <div className="Main">
            <Container fluid>
                <Container>
                    <Row>
                        <Col lg={2}>
                            <Sidebar />
                        </Col>
                        <Col lg={10}>
                            main tab
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}