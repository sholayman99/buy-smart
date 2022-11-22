import React from "react";
import './Product.css'
import { Link, useNavigate } from 'react-router-dom';


const Product = ({ p }) => {
  
  const { gender, image, name, price,id} = p;
  const navigate = useNavigate()

  const handleProductDetails = id =>{
      navigate(`/productDetails/${id}`)
  }

  return (
    <div className="card bg-white  shadow-sm p-10 lg:p-1 ">
      <figure className="p-0">
        <img className="lg:h-72 h-96 lg:w-full w-96" src={image} alt="Shoes" />
      </figure>
      <div className="pl-1 pb-3 mt-3">
        <h2 className="card-title text-2xl font-bold text-black">{name}</h2>
        <p className="text-sm font-thin my-2"> {gender} </p>
        <h2 className="text-lg font-semibold"> {price} </h2>
      </div>
      <Link className="bgi-btn text-center py-4" to={'/everything'} >BUY NOW</Link>
      <button  onClick={() => handleProductDetails(p.id)} className="cart-btn mt-6 mb-3 py-4 font-bold text-center" >VIEW DETAILS</button>
    </div>
  );
};

export default Product;
