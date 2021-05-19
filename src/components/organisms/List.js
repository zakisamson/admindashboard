import React from 'react';
import CustomButton from '../molecules/CustomButton';
import { Table } from 'react-bootstrap'

export default function List(){
    return(
        <div>
            <div className="product-header" style={{textAlign:'left', paddingTop:'50px'}}>
                <p style={{color:'#9D9D9D', fontWeight:'700', fontSize:'18px'}}>Hello zakisamson,</p>
                <h3 style={{fontWeight:'700', fontSize:'36px'}}>This is Your Products</h3>
            </div>
            <div className="add-btn" style={{flex:'1'}}>
                <button style={{backgroundColor:'#0086CF', border:'0.5px solid #0086CF', borderRadius:'5px', padding:'10px', color:'white', float:'right', marginBlock:'20px'}}>
                    <a>Add New Product</a>
                </button>
            </div>
            <div className="list-table" style={{marginBlock:'10px'}}>
                <Table responsive hover>
                    <thead>
                        <th colSpan="2">Product Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>gambar</td>
                            <td>name</td>
                            <td>price</td>
                            <td>stock</td>
                            <td>action</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}