"use client";

import { Signup, signupSchema } from "@/src/entities/models/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function SignupForm() {
  const form = useForm<Signup>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: Signup): Promise<void> => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input className="bg-stone-100 dark:bg-stone-800" {...field} />
              </FormControl>
              <FormDescription className="text-red-500 h-1">
                {form.formState.errors.name?.message}
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input
                  className="bg-stone-100 dark:bg-stone-800"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-red-500 h-1">
                {form.formState.errors.email?.message}
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  className="bg-stone-100 dark:bg-stone-800"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-red-500 h-1">
                {form.formState.errors.password?.message}
              </FormDescription>
            </FormItem>
          )}
        />

        <div className="pt-2">
          <Button type="submit" size="lg" className="w-full">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
