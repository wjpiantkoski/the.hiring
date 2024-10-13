import { z } from "zod";

export const userSchema = z.object({
  id: z.string().optional(),
  email: z.string().email(),
  name: z.string().min(3).max(255),
  password_hash: z.string().min(6).max(255),
});

export type User = z.infer<typeof userSchema>;

export const signupSchema = z.object({
  email: z
    .string({
      message: "Email is required",
    })
    .email("Invalid email address"),
  name: z
    .string()
    .min(3, {
      message: "Name must be at least 3 characters long",
    })
    .max(150, {
      message: "Name must be at most 150 characters long",
    }),
  password: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters long",
    })
    .max(255),
});

export type Signup = z.infer<typeof signupSchema>;
