"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseFormRegister, FieldValues } from "react-hook-form";

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
        <Label htmlFor={id}>{label}</Label>
        <Input id={id} {...register(id)} />
      </div>

      <div className="text-red-500 text-xs mt-1 min-h-6">{errorMessage}</div>
    </div>
  );
};

export default FormInput;
