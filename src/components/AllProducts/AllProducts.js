import React, { useEffect, useState } from "react";
import ProductsContainer from "../ProductsContainer/ProductsContainer";
import Grid from "@mui/material/Grid";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";

export default function AllProducts() {
  const [allProducts, setAllProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await axios("https://fakestoreapi.com/products");
      setAllProducts(response.data);
    } catch (err) {
      getAllProducts([]);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <ProductsContainer type="All Products" bg="#ECECEC">
      <Grid
        container
        rowSpacing={3}
        columnSpacing={3}
        sx={{ width: "80%", marginBottom: "20px" }}
      >
        {allProducts &&
          allProducts.length !== 0 &&
          allProducts.map((product) => (
            <Grid item lg={4} md={6} xs={12}>
              <ProductCard product={product} />
            </Grid>
          ))}
      </Grid>
    </ProductsContainer>
  );
}
