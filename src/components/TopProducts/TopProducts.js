import React, { useEffect, useState } from "react";
import axios from "axios";
import { CalculatorIcon } from "@heroicons/react/24/outline";
import Carousel from "../Carousel/Carousel";
import "./TopProducts.css";
import ProductCard from "../ProductCard/ProductCard";
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
