"use client";

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface FormTextAreaProps {
  id: string;
  label: string;
  errorMessage?: string;
  register: UseFormRegister<FieldValues>;
}

const FormTextArea = ({
  id,
  label,
  register,
  errorMessage,
}: FormTextAreaProps) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col space-y-2">
        <Label htmlFor={id}>{label}</Label>
        <Textarea id={id} {...register(id)} />
      </div>

      <div className="text-red-500 text-xs mt-1 min-h-6">{errorMessage}</div>
    </div>
  );
};

export default FormTextArea;
