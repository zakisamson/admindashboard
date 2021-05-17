import React from 'react';
import { Row } from "react-bootstrap"
import Next from '../assets/next.svg'

export default function CustomButton({icon, text, link }){
    return(
        <div className="CustomButton">
            <a href={link}>
                <Row>
                    <img>{icon}</img>
                    <p>{text}</p>
                    <img src={Next}></img>
                </Row>
            </a>
        </div>
    );
}