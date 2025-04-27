import React from "react";
import { useState } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";

function Details(product) {
  let navigate=useNavigate()
  let location = useLocation();
  product = location.state;
  let [imgSrc, setImgSrc] = useState(
    `https://admin.refabry.com/storage/product/${product.image}`
  );

  const handleError = () => {
    setImgSrc("src/images/testImage.jpg");
  };
  const goToOrder = () => {
    navigate("/ordernow", { state: product });
  };
  return (
    <>
      <div className="flex">
        <img
          src={imgSrc}
          onError={handleError}
          alt="Jackets"
          className="w-100 h-125"
        />
        <div className="w-1/2 h-125  relative">
          <p className="p-4 mt-20 text-xl font-semibold text-justify ">
            {product.short_desc}
          </p>
          <div className="bottom-1.5 absolute w-full">
            <button
              onClick={goToOrder}
              className="w-full bg-orange-700 font-bold rounded-xl p-2 text-white mb-0"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
