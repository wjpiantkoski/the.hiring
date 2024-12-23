"use client";

import { Button } from "../ui/button";
import { Loader2Icon } from "lucide-react";

interface SubmitButtonProps {
  children: React.ReactNode;
  pending: boolean;
}

const SubmitButton = ({ children, pending }: SubmitButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={pending}
      className="disabled:bg-accent disabled:cursor-not-allowed"
    >
      {pending && <Loader2Icon className="animate-spin mr-2 h-4 w-4" />}
      {children}
    </Button>
  );
};

export default SubmitButton;
