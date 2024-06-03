import React from "react";
import { useParams } from "react-router-dom";

type Params = {
  id: string;
};

function ProductDetail() {
  const { id } = useParams<Params>();

  return (
    <div>
      <h1>Product Detail</h1>
      <p>Product ID: {id}</p>
    </div>
  );
}

export default ProductDetail;
