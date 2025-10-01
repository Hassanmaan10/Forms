"use client";
import { useFieldArray, useFormContext } from "react-hook-form";
import { FormValues } from "../FormCard";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const PhoneSection = () => {
  const { control } = useFormContext<FormValues>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "phones",
  });
  return (
    <section>
      {" "}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium">Phone numbers</h4>
          <Button
            type="button"
            className="rounded-full bg-purple-600"
            onClick={() => append({ number: "" })}
          >
            +
          </Button>
        </div>

        {fields.map((field, index) => (
          <div
            key={field.id}
            className="grid grid-cols-1 sm:grid-cols-5 gap-3 rounded-lg border p-3"
          >
            <FormField
              control={control}
              name={`phones.${index}.number`}
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Number</FormLabel>
                  <FormControl>
                    <Input placeholder="+961 3 123 456" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-end">
              <Button
                type="button"
                variant="destructive"
                onClick={() => remove(index)}
                className="w-full"
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhoneSection;
