import React from "react";

export const HomePage = ({ title, products }) => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Home Page</h1>
      <h1>{title}</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "200px",
            border: "1px solid black",
          }}
        >
          <p>{product.title}</p>
          <p>${product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export const notNextServerSideProps = async (fetch) => {
  const data = await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => json);

  return {
    props: {
      title: "All Products",
      products: data,
    },
  };
};
