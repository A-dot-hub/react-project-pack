import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      const response = await fetch(
        "https://dummyjson.com/products?limit=10&skip=10",
      );
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return <div className="container"></div>;
}
