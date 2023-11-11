import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch(() => {
        console.error("Something went wrong.");
      });
  }, []);

  return (
    <div className="App">
      <h2>Product:</h2>
      <div className="products-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <div>
              <img src={product.image} className="product-image" />
            </div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
