import "./App.css";
import Navbar from "./Component/Navbar";
import Product from "./Component/Product";
import { useState, useEffect } from "react";
import ShowCart from "./Component/ShowCart";

function App() {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchProduct = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  const addToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((cart) => cart.id !== id));
  };
  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      <Navbar cartLength={cart.length} setShowCart={setShowCart} />
      {loading ? (
        <h1 className="text-center text-2xl font-bold mt-5">Loading...</h1>
      ) : error ? (
        <h1 className="text-center text-2xl text-red-500">{error}</h1>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {product.map((data) => (
            <Product
              key={data.id}
              id={data.id}
              title={data.title}
              price={data.price}
              img={data.image}
              rating={data.rating}
              data={data}
              addToCart={addToCart}
            />
          ))}
          {showCart && (
            <ShowCart
              cart={cart}
              removeItem={removeItem}
              setShowCart={setShowCart}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
