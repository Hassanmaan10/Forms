"use client";
import { useFieldArray, useFormContext } from "react-hook-form";
import { FormValues } from "../FormCard";
import { Button } from "@/components/ui/button";
import RHFInput from "./RHFInput";

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
            className="grid grid-cols-1 sm:grid-cols-5 items-end gap-3 rounded-lg border p-3"
          >
            <RHFInput
              name={`phones.${index}.number`}
              label="Number"
              placeholder="+961 3 123 456"
              type="tel"
              className="sm:col-span-4 w-full" // <-- span 4 cols, fill width
            />

            <div className="sm:col-span-1 flex justify-end">
              <Button
                type="button"
                variant="destructive"
                onClick={() => remove(index)}
                className="w-full sm:w-auto" // full width on mobile, auto on desktop
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
