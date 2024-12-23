import { z } from "zod";

export const projectFormSchema = z.object({
  name: z.string().nonempty("Project name is required"),
  startDate: z.coerce.date().optional(),
  deadline: z.coerce.date({
    message: "Deadline is required",
  }),
  description: z.string().max(150, "Description is too long").optional(),
});

export type ProjectForm = z.infer<typeof projectFormSchema>;
