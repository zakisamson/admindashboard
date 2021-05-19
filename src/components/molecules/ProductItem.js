import React from 'react';
import DeleteIcon from '../../assets/delete.png'

export default function ProductItem({prod_img, prod_name, prod_prc, prod_stock}){
    return(
        <div className="ProductItem">
            <img src={prod_img}></img>
            <p>{prod_name}</p>
            <p>{prod_prc}</p>
            <p>{prod_stock}</p>
            <img src={DeleteIcon}></img>
        </div>
    );
}