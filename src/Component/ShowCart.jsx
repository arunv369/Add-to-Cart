import React from "react";

const ShowCart = ({ cart, removeItem, setShowCart }) => {
  return (
    <div>
      <div className="w-80 bg-white shadow-lg p-4 fixed right-0 top-16 h-full overflow-y-auto">
        <h2 className="text-xl mb-4 font-[Righteous] text-[1.5rem]">
          Shopping Cart{" "}
          <i
            onClick={() => setShowCart((prev) => !prev)}
            className="fa-solid fa-xmark ml-[45%] cursor-pointer"
          ></i>
        </h2>
        {cart.length > 0 ? (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 mb-4 border-b pb-2"
            >
              <img src={item.image} alt={item.title} className="h-12" />
              <div className="flex-1">
                <p className="font-[Righteous]">{item.title}</p>
                <p className="font-[Saira]">${item.price}</p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="font-[Saira] bg-red-500 text-white px-3 py-1 rounded-lg "
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default ShowCart;
