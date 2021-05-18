import React from 'react';
import './Sidebar.css'
import { Container, Row, Col, Button} from "react-bootstrap"
import CustomButton from '../molecules/CustomButton'
import DashboardIcon from '../../assets/dashboard_icon.png'
import ProductIcon from '../../assets/product_icon.png'
import SellingIcon from '../../assets/selling_icon.png'
import PaymentIcon from '../../assets/payment_icon.png'
import UpcomingIcon from '../../assets/upcoming_icon.png'
import LogoutIcon from '../../assets/logout_icon.png'
import Profile from '../molecules/Profile';
import ProfilePhoto from '../../assets/profile2.jpg'

export default function Sidebar(){
    return(
        <div className="Sidebar">
            <div style={{paddingInline:'40px', paddingBlock:'100px', height:'880px'}} className="sidebar-ctn">
                <p style={{color:'white', textAlign:'left'}}>Admin panel</p>
                <h1 style={{fontSize:'36px', fontWeight:'700', color:'white', textAlign:'left'}}>Peduli Digital</h1>
                <Profile username_profile="zakisamson" profile_photo={ProfilePhoto}/>
                <CustomButton icon={DashboardIcon} val="Dashboard" link="/"/>
                <CustomButton icon={ProductIcon} val="Products" link="/"/>
                <CustomButton icon={SellingIcon} val="Selling" link="/"/>
                <CustomButton icon={PaymentIcon} val="Payment" link="/"/>
                <CustomButton icon={UpcomingIcon} val="Upcoming" link="/"/>
                <CustomButton icon={LogoutIcon} val="Logout" link="/"/>
            </div>
        </div>
    );
}