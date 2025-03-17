import { ProductList } from "@/components/ProductList";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col gap-4">
      <div className="w-full flex justify-between items-center p-2">
        <h1 className="text-3xl font-bold text-center text-black">Productos</h1>
        <Link href="/create/product" className="cursor-pointer">
          <Button variant="default" className="cursor-pointer">
            Ingresar Producto
          </Button>
        </Link>
      </div>
      <ProductList />
    </div>
  );
}
