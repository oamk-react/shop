import './App.css';
import { useEffect, useState } from 'react';
import Product from './Product';
import uuid from 'react-uuid';

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const myProducts = []
    myProducts.push(new Product(1,"Takki","Tosi hieno takki",50,"placeholder.png"))
    myProducts.push(new Product(2,"Housut","Mahtavat housut",100,"placeholder.png"))
    myProducts.push(new Product(3,"Lakki","Uusinta muotia oleva lakki",20,"placeholder.png"))
    setProducts(myProducts)
  }, [])
  

  return (
    <div>
      <h1>My web shop</h1>
      {products.map(product => (
        <div key={uuid()}>
          <img src={require('./' + product.image)} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}

    </div>  
  );
}

export default App;
