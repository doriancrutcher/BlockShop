import React, { Component } from 'react';
import './Item.css'

const Item=(props)=>{

        const addItem=()=>{
            props.addItem(props.name,props.price)
        }


    return(
    <div className="optionDescription" onClick={addItem}>
    <div className='itemImg'><img src={props.itemImg}></img></div>
    <div className='price'>{props.price}</div>
    </div>
    )
}
export default Item;