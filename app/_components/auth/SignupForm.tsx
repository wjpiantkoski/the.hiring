"use client";

import { Input } from "../ui/input";
import { signUp } from "@/app/(auth)/actions";
import SubmitButton from "../@shared/SubmitButton";
import { useFormState } from "react-dom";

const initialState = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: {} as any,
  message: "",
};

export default function SignupForm() {
  const [state, formAction] = useFormState(signUp, initialState);

  return (
    <form action={formAction} className="w-full space-y-5">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-semibold">
          Name
        </label>
        <Input type="text" id="name" name="name" required />
        <span className="h-1 text-red-500 text-xs">
          {state.errors.fieldErrors?.name}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-semibold">
          E-mail
        </label>
        <Input type="email" id="email" name="email" required />
        <span className="h-1 text-red-500 text-xs">
          {state.errors.fieldErrors?.email}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="font-semibold">
          Password
        </label>
        <Input type="password" id="password" name="password" required />
        <span className="h-1 text-red-500 text-xs">
          {state.errors.fieldErrors?.password}
        </span>
      </div>

      <div className="pt-2">
        <SubmitButton className="w-full">Submit</SubmitButton>
      </div>
    </form>
  );
}
