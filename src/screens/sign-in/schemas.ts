import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "You must type a valid e-mail" }),
});
