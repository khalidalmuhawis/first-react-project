import React from 'react';
import items from './items';
import styles from './styles';

function App() {
  const petsList = items.map((item) => (
    <div key={item.id} >
      <img  style={styles.shopImage} alt={item.name} src={item.image} />
      <p style={styles.text}>{item.name}</p>
      <p style={styles.text}>{item.price} SR</p>
    </div>
    
  ));
  return <div style = {styles.backgrounds}>{petsList}</div>;
}

export default App;
