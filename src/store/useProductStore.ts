import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IProducts {
  code: number;
  name: string;
  description: string;
  amount: number;
  createdAt: string;
}

type IProductStore = {
  products: IProducts[];
  addProduct: (product: IProducts) => void;
  removeProduct: (code: number) => void;
};

export const useProductStore = create<IProductStore>()(
  persist(
    (set) => ({
      products: [],
      addProduct: (product) =>
        set((state) => ({
          products: [...state.products, product],
        })),
      removeProduct: (code) =>
        set((state) => ({
          products: state.products.filter((p) => p.code !== code),
        })),
    }),
    { name: "product-store" }
  )
);
