import React from 'react';
import Next from '../../assets/next.png'

export default function CustomButton({icon, val, link }){
    return(
        <div style={{cursor:'pointer', marginBlock:'40px'}} className="CustomButton">
            <button style={{display:'flex', border:'none', backgroundColor:'#0086CF', color:'white', alignItems:'center', width:"250px"}}>
                <div style={{flex:'0.1'}}>
                    <img src={icon} style={{height:'20px', width:'auto', flex:'0.1'}}></img>
                </div>
                <div style={{flex:'0.8', textAlign:'left', paddingLeft:'20px'}}>
                    <a style={{fontSize:'18px'}}>{val}</a>
                </div>
                <div style={{flex:'0.1'}}>
                    <img src={Next} style={{float:'right'}}></img>
                </div>
                
                
                
            </button>
        </div>
    );
}