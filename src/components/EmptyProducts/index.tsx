import { ShoppingBag } from "lucide-react";

export const EmptyProducts = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10 px-4 text-center border border-dashed rounded-lg bg-muted/10">
      <div className="rounded-full bg-muted p-5 mb-5">
        <ShoppingBag className="h-10 w-10 text-muted-foreground" />
      </div>

      <h3 className="text-xl font-medium mb-2">No hay productos disponibles</h3>

      <p className="text-muted-foreground max-w-md mb-6">
        No se encontraron productos, por favor agrega uno para comenzar.
      </p>
    </div>
  );
};
