// TODO: create a component that displays a single bakery item
import React from 'react';
import "../App.css";


export default function BakeryItem(props) {
  return (
    <div class="BakeryItem">
        <img src={props.item.image} alt=""></img>
        <div class="description">
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <div class="bottomLine">
                <p>{props.item.price}</p>
                <button onClick={() => props.addCart(props.item.name, props.item.price)}>Add to Cart</button>
            </div>
        </div>
    </div>

  )
}
