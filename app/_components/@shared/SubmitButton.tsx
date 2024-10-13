"use client";

import { Loader } from "lucide-react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";

export default function SubmitButton({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} {...props}>
      {pending && <Loader className="animate-spin h-4 w-4" />}
      {children}
    </Button>
  );
}
