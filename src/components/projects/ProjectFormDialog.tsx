"use client";

import { Project } from "@prisma/client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { projectFormSchema, ProjectForm } from "@/lib/zod/schemas/project";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Control,
  FieldValues,
  useForm,
  UseFormRegister,
} from "react-hook-form";
import FormInput from "../shared/FormInput";
import FormTextArea from "../shared/FormTextArea";
import { Form } from "../ui/form";
import FormDatePicker from "../shared/FormDatePicker";
import dayjs from "dayjs";
import SubmitButton from "../shared/SubmitButton";
import { useState } from "react";
import { createProject } from "@/app/(protected)/projects/_actions/createProject";

interface ProjectFormDialogProps {
  project?: Project;
  isOpen: boolean;
  title: string;
  onClose: () => void;
}

const initialProjectValues = {
  name: "",
  startDate: dayjs().toDate(),
  deadline: dayjs().add(3, "month").toDate(),
  description: "",
};

const ProjectFormDialog = ({
  project,
  title,
  isOpen,
  onClose,
}: ProjectFormDialogProps) => {
  const [formErrors, setFormErrors] = useState<
    Record<string, string[] | undefined>
  >({});

  const errorsList = Object.values(formErrors).flat();

  const form = useForm<ProjectForm>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: (project as ProjectForm) ?? initialProjectValues,
  });

  const handleClose = () => {
    onClose();
    form.reset(initialProjectValues);
  };

  const onSubmit = async (data: ProjectForm) => {
    const response = await createProject(data);

    if (!response?.errors) {
      handleClose();
    }

    setFormErrors(response?.errors ?? {});
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col"
          >
            <FormInput
              id="name"
              label="Name"
              errorMessage={form.formState.errors?.name?.message}
              register={
                form.register as unknown as UseFormRegister<FieldValues>
              }
            />

            <FormTextArea
              id="description"
              label="Description"
              errorMessage={form.formState.errors.description?.message}
              register={
                form.register as unknown as UseFormRegister<FieldValues>
              }
            />

            <FormDatePicker
              id="startDate"
              name="startDate"
              label="Start Date"
              control={form.control as unknown as Control<FieldValues>}
              register={
                form.register as unknown as UseFormRegister<FieldValues>
              }
              errorMessage={form.formState.errors.startDate?.message}
            />

            <FormDatePicker
              id="deadline"
              name="deadline"
              label="Deadline"
              control={form.control as unknown as Control<FieldValues>}
              register={
                form.register as unknown as UseFormRegister<FieldValues>
              }
              errorMessage={form.formState.errors.deadline?.message}
            />

            <div className="flex items-center justify-end space-x-2 mt-4">
              <SubmitButton pending={form.formState.isSubmitting}>
                Save
              </SubmitButton>

              <DialogTrigger asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogTrigger>
            </div>
          </form>
        </Form>

        {!!errorsList.length && (
          <DialogFooter>
            {errorsList.map((error, index) => (
              <p key={index} className="text-red-500 text-sm">
                {error}
              </p>
            ))}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectFormDialog;
