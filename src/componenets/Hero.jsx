import ProductCard from "./productCard";
import Categorys from "./ Categories";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/contextData";

export default function Hero({ loading, error }) {
  const { productData } = useContext(ProductContext);
  const [query, setQuery] = useState("");
  const [state, setState] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    const Filtered = name
      ? productData.filter((item) => {
          if (name === "men") return item.category === "men's clothing";
          if (name === "women") return item.category === "women's clothing";
          if (name === "electronics") return item.category === "electronics";
          if (name === "jewelery" || name === "jewelery")
            return item.category === "jewelery";
          return true; // if category doesn’t match, show all
        })
      : productData;

    setState(Filtered);
  }, [name, productData]);

  const filteredProductData = state.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <p className="text-3xl font-semibold text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center ">
        <p className="text-3xl text-gray-600 font-semibold">
          {error.statusText} ,{error.message}...
        </p>
      </div>
    );
  }
  return (
    <>
      <Categorys />
      <section className="max-w-[1450px] mx-auto ">
        <form className="w-fit mx-auto mb-5 md:my-10 sm:my-10">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            type="text"
            placeholder="search for product"
            className="py-2 px-3 border border-gray-500 text-gray-600 rounded-l-2xl  mr-1 w-[300px]  outline-0"
          />
          <button className="py-2 px-3 rounded-r-2xl  bg-yellow-400 border-yellow-400 border font-semibold ">
            Search
          </button>
        </form>

        {!query && (
          <h1 className="text-3xl md:text-4xl  text-center font-semibold text-gray-700 my-10 py-3 mx-auto border-b w-fit border-gray-300 ">
            {name ? name.toUpperCase() : "Featured Products"}
          </h1>
        )}
        <section className=" w-full mx-auto grid gap-2 md:grid-cols-4 sm:grid-cols-2 ">
          {filteredProductData.map((product) => (
            <ProductCard key={product.id} product={product} param={name} />
          ))}
        </section>
      </section>
    </>
  );
}
