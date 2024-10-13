"use server";

import SignUpUseCaseFactory from "@/src/application/usecases/authentication/signup/signup.usecase.factory";
import { signupSchema } from "@/src/entities/models/user";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signUp(formData: FormData) {
  const validatedData = signupSchema.safeParse({
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  if (!validatedData.success) {
    throw new Error("Invalid form data");
  }

  const usecase = SignUpUseCaseFactory.create();
  const { cookie: sessionCookie } = await usecase.execute(validatedData.data);

  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  redirect("/dashboard");
}
