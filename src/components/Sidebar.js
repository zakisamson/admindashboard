import React from 'react';
import './Sidebar.css'
import { Container, Row, Col, Button} from "react-bootstrap"

export default function Sidebar(){
    return(
        <div className="Sidebar">
            <Container className="sidebar-ctn">
                <p>Admin panel</p>
                <h1>Peduli Digital</h1>
                
            </Container>
        </div>
    );
}