import React from 'react';
import Sidebar from './organisms/Sidebar';
import { Container, Row, Col, Button} from "react-bootstrap"
// import CustomButton from './molecules/CustomButton';
// import dash_icn from '../assets/dashboard_icon.svg'

export default function Main(){
    return(
        <div className="Main" style={{marginTop:'50px'}}>
            <Container fluid>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <Sidebar />
                        </Col>
                        <Col lg={8}>
                            main tab
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}