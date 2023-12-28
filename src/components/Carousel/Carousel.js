import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "../ProductCard/ProductCard";

export default function Carousel({ topProducts }) {
  const totalProductsCount = topProducts.length;
  const [currSlide, setCurr] = useState(0);

  const handlePrev = () => {
    if (currSlide === 0) return;
    setCurr((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currSlide === totalProductsCount - 2) return;
    setCurr((prev) => prev + 1);
  };
  return (
    <div className="flex gap-10 justify-between w-[90%]">
      <button className="text-4xl" onClick={handlePrev}>
        {"<"}
      </button>
      <Grid container rowSpacing={3} columnSpacing={3} sx={{ width: "80%" }}>
        {topProducts &&
          topProducts.length !== 0 &&
          topProducts.slice(currSlide, currSlide + 3).map((product) => (
            <Grid item lg={4} md={6} xs={12}>
              <ProductCard product={product} />
            </Grid>
          ))}
      </Grid>
      <button className="text-4xl" onClick={handleNext}>
        {">"}
      </button>
    </div>
  );
}
