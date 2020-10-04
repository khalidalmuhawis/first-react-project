import React from 'react';
import {items} from './components/items.js';
import {styles} from './components/styles.js';
import PetsList from './components/PetsList';

function App() {
  

  return ( 
  <div>
    <header>
    <h1 style={styles.text} >Pets Shop</h1>
      <p style={styles.text} >Best Pets Ever..</p>
      <img style={styles.shopImage} src="https://cdn2.vectorstock.com/i/1000x1000/01/66/pet-shop-sign-with-three-kinds-of-pets-vector-19020166.jpg" alt="shop pic" ></img>
    </header>
    <PetsList items = {items}/>


  </div>

  );
}  
export default App;
