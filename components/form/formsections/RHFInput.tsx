"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { Path, useFormContext } from "react-hook-form";
import { FormValues } from "../FormCard";

type RHFInputProps = {
  name: Path<FormValues>;
  label: string;
  placeholder: string;
  type: string;
  className?: string;
};

export default function RHFInput({
  name,
  label,
  placeholder,
  type,
  className,
}: RHFInputProps) {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              type={type}
              {...field}
              className=""
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
