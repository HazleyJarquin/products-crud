import { Button } from "@/components/ui/button";
import { IProducts, useProductStore } from "@/store/useProductStore";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, TrashIcon } from "lucide-react";
import { format } from "date-fns";

export const useProducts = () => {
  const { products, removeProduct } = useProductStore();
  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "dd/MM/yyyy HH:mm:ss");
  };
  const colunms: ColumnDef<IProducts>[] = [
    {
      accessorKey: "code",
      header: ({ column }) => {
        return (
          <Button
            className="cursor-pointer"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Código
            <ArrowUpDown />
          </Button>
        );
      },
    },
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button
            className="cursor-pointer"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Nombre
            <ArrowUpDown />
          </Button>
        );
      },
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "amount",
      header: ({ column }) => {
        return (
          <Button
            className="cursor-pointer"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Cantidad
            <ArrowUpDown />
          </Button>
        );
      },
    },
    {
      accessorKey: "createdAt",
      header: ({ column }) => {
        return (
          <Button
            className="cursor-pointer"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            F. Creación
            <ArrowUpDown />
          </Button>
        );
      },
    },
    {
      accessorKey: "actions",
      header: "Acciones",
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <Button
              className="cursor-pointer"
              variant="ghost"
              onClick={() => {
                removeProduct(row.original.code);
              }}
            >
              <TrashIcon className="text-red-500" />
            </Button>
          </div>
        );
      },
    },
  ];

  const data = products.map((p) => {
    return {
      code: p.code,
      name: p.name,
      description: p.description,
      amount: p.amount,
      createdAt: formatDate(p.createdAt),
    };
  });

  return { colunms, data, products };
};
