import React, { useState } from "react";
import { useLocation } from "react-router";
import PostData from "../postOrderApi";
import { useNavigate } from "react-router";

const OrderCard = ({ product }) => {
  let navigate = useNavigate();
  let location = useLocation();
  product = location.state;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    courier: "",
    address: "",
    quantity: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name + ":" + e.target.value);

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(product);
    const data = {
      product_ids: product.id,
      s_product_qty: formData.quantity,
      c_phone: formData.phone,
      c_name: formData.name,
      courier: formData.courier,
      address: formData.address,
      advance: null,
      cod_amount: "1250",
      discount_amount: null,
      delivery_charge: "80",
    };
    await PostData(data);
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold mb-2">User Information Form</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone No"
        value={formData.phone}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />

      <input
        type="text"
        name="courier"
        placeholder="Courier"
        value={formData.courier}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />
      <input
        type="text"
        name="quantity"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />
      <input
        type="text"
        name="amount"
        placeholder=""
        value={` ৳ ${product.price * formData.quantity}`}
        onChange={handleChange}
        className=" p-2 rounded"
        required
        disabled
      />

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default OrderCard;
