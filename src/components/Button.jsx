import React, { useState } from "react";

const Button = ({setopens}) => {


  const openModal=()=>{
    setopens(true)

  }
  return (
  
    <button className="bg-[#3e4555] text-white  px-6 py-2 rounded" onClick={openModal}>
      LogIn
    </button>

 
 
  );
};

export default Button;
