import React from 'react';
import { Row, Col, Image } from 'react-bootstrap'
import Down from '../../assets/down.png'


export default function Profile({username_profile, profile_photo}){
    return(
        <div className="Profile" style={{width:'270px', height:'75px', marginTop:'20px', display:'flex'}}>
            <Row style={{alignItems:'center'}}>
                <Col>
                    <Image src={profile_photo} roundedCircle style={{height:'60px', width:'auto'}} />
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <p style={{margin:'0', fontSize:'18px', color:'white', textAlign:'center', fontWeight:'500'}}>{username_profile}</p>
                            <p style={{margin:'0', fontSize:'12px', fontWeight:'600', color:'white', textAlign:'center'}}>Seller Administrator</p>
                        </Col>
                    </Row>
                </Col>
                <Col style={{cursor:'pointer'}}>
                    <Image src={Down} style={{height:'45px'}}/>
                </Col>
            </Row>
        </div>
    );
}