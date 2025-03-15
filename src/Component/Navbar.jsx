import React from "react";

const Navbar = ({ cartLength, setShowCart }) => {
  return (
    <div className="bg-[#8E6CEF] text-white flex justify-between px-7 py-3 ">
      <h1 className=" w-[20%] flex justify-center text-[1.5rem] items-center font-[Righteous]">
        <i class="fa-brands fa-shopify mr-2 color text-[#F4BD2F]"></i> Shopify
      </h1>
      <button
        onClick={() => setShowCart((prev) => !prev)}
        className=" rounded-full px-5 py-4 font-[Poppins] font-[800]"
      >
        <i className="fa-solid fa-cart-shopping mr-3 text-[#F4BD2F]"></i>
        My Cart({cartLength})
      </button>
    </div>
  );
};

export default Navbar;
