import { z } from "zod";

export const registerSchema = z
  .object({
    email: z.string().email({ message: "You must type a valid e-mail" }),
    password: z
      .string()
      .min(8, { message: "Password must have at least 8 characters" }),
    confirmPassword: z
      .string()
      .min(8, {
        message: "Confirmation password must have at least 8 characters",
      }),
  })
  .superRefine(({ confirmPassword, password }, context) => {
    if (confirmPassword !== password) {
      context.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });
