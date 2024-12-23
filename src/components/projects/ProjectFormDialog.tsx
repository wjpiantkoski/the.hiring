"use client";

import { Project } from "@prisma/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { projectFormSchema, ProjectForm } from "@/lib/zod/schemas/project";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";
import FormInput from "../shared/FormInput";

interface ProjectFormDialogProps {
  project?: Project;
  isOpen: boolean;
  title: string;
  onClose: () => void;
}

const initialProjectValues = {
  name: "",
  startDate: new Date(),
  deadline: new Date(),
  description: "",
};

const ProjectFormDialog = ({
  project,
  title,
  isOpen,
  onClose,
}: ProjectFormDialogProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProjectForm>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: (project as ProjectForm) ?? initialProjectValues,
  });

  const onSubmit = (values: ProjectForm) => {
    console.log({ values });
  };

  const handleClose = () => {
    onClose();
    reset(initialProjectValues);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <FormInput
            id="name"
            label="Name"
            errorMessage={errors.name?.message}
            register={register as unknown as UseFormRegister<FieldValues>}
          />

          <div className="flex items-center space-x-2 mt-4">
            <Button type="submit">Save</Button>

            <DialogTrigger asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogTrigger>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectFormDialog;
