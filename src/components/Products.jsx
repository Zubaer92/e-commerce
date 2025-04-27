import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

function Products({ product }) {
  let [imgSrc, setImgSrc] = useState(
    `https://admin.refabry.com/storage/product/${product.image}`
  );
  let navigate = useNavigate();

  const handleError = () => {
    setImgSrc("src/images/testImage.jpg");
  };

  const goToDetails = () => {
    navigate("/details", { state: product });
  };

  const goToOrder = () => {
    navigate("/ordernow", { state: product });
  };

  return (
    <>
      {console.log(product)}
      <div className="flex border-amber-950 items-center text-center justify-center w-1/4 bg-gray-300 ">
        <div className="h-1/2 ">
          <img
            src={imgSrc}
            onError={handleError}
            alt="Jackets"
            className="w-1/2"
          />
          <p
            htmlFor="product"
            key={product.unique_id}
            className="text-lg font-bold"
          >
            {product.name}
          </p>
          <p htmlFor="price">Price : &#2547;{product.price} </p>
          <button
            className="w-full bg-green-600 font-bold rounded-xl p-2 text-white"
            onClick={goToDetails}
          >
            See Details
          </button>{" "}
          <br />
          <button
            onClick={goToOrder}
            className="w-full bg-orange-700 font-bold rounded-xl p-2 text-white"
          >
            Order Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Products;
