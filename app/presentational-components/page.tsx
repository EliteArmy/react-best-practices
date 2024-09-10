'use client'; // used only for nextjs

import React, { useState } from 'react';

function ProductSummary({
  totalPrice,
  productCount,
}: {
  totalPrice: number;
  productCount: number;
}) {
  return (
    <>
      <h3>Summary</h3>
      <p>Total Products: {productCount}</p>
      <p>Total Price: ${totalPrice}</p>
    </>
  );
}

export default function ProductList() {
  const [products] = useState([
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Smartphone', price: 499 },
    { id: 3, name: 'Tablet', price: 299 },
  ]);

  // Calculate total price in the parent component
  const totalPrice = products.reduce((total, product) => total + product.price, 0);

  return (
    <section>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      {/* Pass the calculated total price as a prop */}
      <ProductSummary
        totalPrice={totalPrice}
        productCount={products.length}
      />
    </section>
  );
}
