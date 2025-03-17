"use client";

import { productSchema } from "@/schemas/productSchema";
import { IProducts, useProductStore } from "@/store/useProductStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { CustomInput } from "../CustomInput";
import { ArrowLeftIcon, HashIcon, TagIcon, TypeIcon } from "lucide-react";
import { CustomTextArea } from "../CustomTextArea";
import { Button } from "../ui/button";
import Link from "next/link";

type ProductFormValues = Omit<IProducts, "code" | "createdAt">;

export const ProductForm = () => {
  const { addProduct } = useProductStore();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<ProductFormValues>({
    defaultValues: {
      name: "",
      description: "",
      amount: 0,
    },
    resolver: zodResolver(productSchema),
  });

  const onSubmit = (data: ProductFormValues) => {
    addProduct({
      amount: data.amount,
      code: Math.floor(Math.random() * 1000),
      createdAt: new Date().toISOString(),
      description: data.description,
      name: data.name,
    });

    redirect("/");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-6"
    >
      <div className="w-full flex items-center">
        <Link href={"/"}>
          <ArrowLeftIcon className="h-5 w-5" />
        </Link>
        <h1 className="text-2xl font-semibold text-gray-800 text-center flex-1">
          Crear Producto
        </h1>
      </div>

      <CustomInput
        {...register("name")}
        label="Nombre"
        placeholder="Celular..."
        error={errors.name && errors.name.message}
        icon={<TagIcon className="h-5 w-5" />}
        iconPosition="right"
      />

      <CustomTextArea
        {...register("description")}
        className="h-24"
        rows={4}
        label="Descripción"
        placeholder="Celular gama alta"
        error={errors.description && errors.description.message}
        icon={<TypeIcon className="h-5 w-5" />}
        iconPosition="right"
      />

      <CustomInput
        {...register("amount", {
          setValueAs: (v) => (v === "" ? undefined : Number(v)),
        })}
        label="Cantidad"
        placeholder="10"
        error={errors.amount && errors.amount.message}
        icon={<HashIcon className="h-5 w-5" />}
        iconPosition="right"
      />

      <Button
        type="submit"
        disabled={!isDirty}
        className="w-full cursor-pointer text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out"
      >
        Crear Producto
      </Button>
    </form>
  );
};
