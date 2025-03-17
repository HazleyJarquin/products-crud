import { z } from "zod";

export const productSchema = z.object({
  name: z.string().nonempty("El nombre es requerido"),
  description: z.string().nonempty("La descripción es requerida"),
  amount: z.number().int().positive("La cantidad debe ser mayor a 0"),
});
