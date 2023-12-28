import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProductCard({ product }) {
  return (
    <Card sx={{ height: 400, borderRadius: "10px" }}>
      <CardMedia
        sx={{ height: 200 }}
        image={product.image}
        title="green iguana"
        className="object-cover"
      />
      <CardContent>
        <div className="flex justify-between">
          <div className="font-bold w-[70%]">{product.title}</div>
          <div>${product.price}</div>
        </div>
        <div>{product.description.split(" ").slice(0, 20).join(" ")}...</div>
      </CardContent>
    </Card>
  );
}
