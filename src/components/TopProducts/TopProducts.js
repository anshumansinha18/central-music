import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "../Carousel/Carousel";
import ProductsContainer from "../ProductsContainer/ProductsContainer";

export default function TopCategoryProducts() {
  const [topProducts, setTopProducts] = useState([]);

  async function getTopProducts() {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/category/electronics"
      );
      setTopProducts(response.data);
    } catch (err) {
      setTopProducts([]);
    }
  }

  useEffect(() => {
    getTopProducts();
  }, []);

  return (
    <ProductsContainer type="Top - Electronics">
      <Carousel topProducts={topProducts} />
    </ProductsContainer>
  );
}
