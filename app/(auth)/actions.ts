"use server";

import SignUpUseCaseFactory from "@/src/application/usecases/authentication/signup/signup.usecase.factory";
import { signupSchema } from "@/src/entities/models/user";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function signUp(prevState: any, formData: FormData) {
  const validatedData = signupSchema.safeParse({
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten(),
    };
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
