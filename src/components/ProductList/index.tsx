"use client";

import { DataTable } from "../DataTable";
import { EmptyProducts } from "../EmptyProducts";
import { useProducts } from "@/hooks/useProducts";

export const ProductList = () => {
  const { colunms, data, products } = useProducts();
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {products.length > 0 ? (
        <DataTable columns={colunms} data={data} />
      ) : (
        <EmptyProducts />
      )}
    </div>
  );
};
