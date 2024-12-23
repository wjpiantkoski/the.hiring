"use client";

import { Button } from "@/components/ui/button";

interface ButtonProjectFormProps {
  onClick: () => void;
}

const ButtonProjectForm = ({ onClick }: ButtonProjectFormProps) => {
  return (
    <Button variant="secondary" className="shadow-sm" onClick={onClick}>
      New project
    </Button>
  );
};

export default ButtonProjectForm;
