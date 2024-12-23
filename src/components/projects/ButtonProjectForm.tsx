"use client";

import { Button } from "@/components/ui/button";
import React from "react";

interface ButtonProjectFormProps {
  onClick: () => void;
  variant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  children: React.ReactNode;
}

const ButtonProjectForm = ({
  onClick,
  variant,
  children,
}: ButtonProjectFormProps) => {
  return (
    <Button variant={variant} className="shadow-sm" onClick={onClick}>
      {children}
    </Button>
  );
};

export default ButtonProjectForm;
