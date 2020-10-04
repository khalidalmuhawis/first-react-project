import React from 'react';
import {items} from './components/items.js';
import PetsList from './components/PetsList';
import { Description, ShopImage, Title, ListWrapper, PetWrapper, GlobalStyle } from "./components/styles";
import { ThemeProvider } from "styled-components";



const theme = {
  mainColor: "darkblue",
  backgroundColor: "lightblue",
  darkRed: "darkred",
};

function App() {
  

  return ( 
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <header>
    <Title>Pets Shop</Title>
      <Description>Best Pets Ever..</Description>
      <ShopImage src="https://previews.123rf.com/images/nalinn/nalinn1609/nalinn160900707/62745947-pets-shop-name-board.jpg" alt="shop pic"/>
    </header>
    <PetsList items = {items}/>

  </ThemeProvider>

  );
}  
export default App;
