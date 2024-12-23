"use client";

import { Input } from "@/components/ui/input";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { FormLabel } from "../ui/form";

interface FormInputProps {
  id: string;
  label: string;
  errorMessage?: string;
  register: UseFormRegister<FieldValues>;
}

const FormInput = ({ id, label, errorMessage, register }: FormInputProps) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col space-y-2">
        <FormLabel htmlFor={id}>{label}</FormLabel>
        <Input id={id} {...register(id)} />
      </div>

      <div className="text-red-500 text-xs mt-1 min-h-6">{errorMessage}</div>
    </div>
  );
};

export default FormInput;
