import React, { useEffect, useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')  // thanks to proxy, it calls localhost:5000/api/products
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Football Products</h2>
      {products.map(p => (
        <div key={p._id} style={{border: '1px solid #ddd', padding: '10px', marginBottom: '10px'}}>
          <h3>{p.name}</h3>
          <p>Price: ${p.price}</p>
          <p>Category: {p.category}</p>
          <p>{p.description}</p>
          <img src={p.image} alt={p.name} width={150} />
          <p>Stock: {p.stock}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
