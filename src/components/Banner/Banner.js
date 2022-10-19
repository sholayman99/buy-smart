import React from 'react';
import './Banner.css'
import bg from '../../assets/bg.png'

const Banner = () => {
    return (
        <div className="hero  grid-cols-2 text-center sm-max-w-full  min-h-screen  " 
        style={{ backgroundImage: `url(${bg})` , backgroundRepeat:"no-repeat",height:'auto',width:'100%'}}>
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content  text-neutral-content ">
          <div className=" max-w-md ">
            <h1 className="mb-5 text-5xl font-bold">DEW DROPS OFFER FOR COLD WINTER</h1>
            <p className="mb-5 text-2xl">25% Off On All Products</p>
            <button className="btn btn-accent text-slate-900">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;