import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cart, setCart] = useState(new Map());
  const [cost, setCost] = useState(0);


  const addCart = (bakeryName, price) => {
    setCart(new Map(cart.set(bakeryName, cart.get(bakeryName) ? cart.get(bakeryName) + 1 : 1)))
    setCost(Math.round(100 * (cost + price))/100);
  }


  return (
    <div className="App">

      <div class="left">
        <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

        <div class="container">
          {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            <BakeryItem item={item} key={index} addCart={addCart}></BakeryItem>
          ))}
        </div>
      </div>

      <div class="cart">
        <h2>Cart</h2>
          {cost === 0 ? <p>Nothing in cart yet</p> : 
          
          <div>

            {Array.from(cart.entries()).map((entry, index) => 
            (
              <div class="itemListed" key={index}>
                <p>{entry[1]} x {entry[0]}</p>
              </div>
            ))}
            
            <p><b>Total:</b> {cost}</p>
          </div>
          
          }
      </div>
    </div>
  );
}

export default App;
