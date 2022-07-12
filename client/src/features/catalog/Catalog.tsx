import { useState, useEffect } from "react";
import agent from "../../app/api/agent";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    //call api and use set state above
    agent.Catalog.list().then((products) => setProducts(products));
  }, []);

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
