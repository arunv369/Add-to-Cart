import React from "react";

const Product = ({ title, price, img, rating, data, addToCart }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white flex flex-col h-full">
      <img src={img} alt={title} className="h-40 mx-auto" />
      <h2 className="text-[1rem] mt-2 font-[Righteous]">{title}</h2>
      <div className="mt-auto flex items-center justify-between ">
        <p className="text-gray-600 font-semibold font-[Saira] text-[0.9rem]">
          ${price}
        </p>

        <div className="flex items-center text-yellow-500">
          {Array.from({ length: Math.floor(rating.rate) }).map((_, index) => (
            <i key={index} className="fas fa-star"></i>
          ))}
          {rating.rate % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
          <span className="text-gray-500 text-sm ml-1 font-[Saira] text-[0.9rem]">
            ({rating.count})
          </span>
        </div>
      </div>

      <div className="mt-auto">
        <button
          onClick={() => addToCart(data)}
          className="bg-[#8E6CEF] font-[Saira] text-white px-4 py-2 mt-3 rounded-lg w-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
