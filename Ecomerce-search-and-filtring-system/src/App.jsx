import React, { useState } from "react";
import Nav from "./Navigation/Nav";
import Sidebar from "./Sidebar/Sidebar";
import Product from "./products/Product";
import Recmmended from "./recommended/Recmmended";
import products from "./db/Data";
import Card from "./components/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // -----------------input filter -------------

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  // -----------------Radio filter -------------

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // -----------------button filter -------------

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = [...products];

    // -----------------filtering input items -------------
    if (query) {
      filteredProducts = filteredItems;
    }

    //Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(({ img, title, star, reviews, newPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
      />
    ));
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav handleInputChange={handleInputChange} />
      <Recmmended />
      <Product />
      {result}
    </>
  );
}

export default App;
