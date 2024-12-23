"use client";

import { Control, FieldValues, UseFormRegister } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Input } from "../ui/input";
import { Calendar } from "../ui/calendar";
import dayjs from "dayjs";

interface FormDatePickerProps {
  id: string;
  label: string;
  errorMessage?: string;
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues>;
}

const FormDatePicker = ({
  id,
  errorMessage,
  label,
  register,
  control,
}: FormDatePickerProps) => {
  const formatDate = (date: Date) => dayjs(date).format("MMM DD, YYYY");

  return (
    <div className="flex flex-col w-full">
      <FormField
        control={control}
        name="startDate"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor={id}>{label}</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Input
                    {...register(id)}
                    id={id}
                    type="text"
                    placeholder="Select Date"
                    readOnly
                    value={formatDate(field.value)}
                    className="cursor-pointer"
                  />
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </FormItem>
        )}
      />

      <div className="text-red-500 text-xs mt-1 min-h-6">{errorMessage}</div>
    </div>
  );
};

export default FormDatePicker;
