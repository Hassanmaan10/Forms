"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import PersonalInfoSection from "./formsections/PersonalInfoSection";
import PasswordSection from "./formsections/PasswordSection";
import PhoneSection from "./formsections/PhoneSection";

const formSchema = z
  .object({
    firstname: z
      .string()
      .trim()
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name must be at most 50 characters"),

    lastname: z
      .string()
      .trim()
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name must be at most 50 characters"),

    email: z.string().trim().toLowerCase().email("Enter a valid email address"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(72, "Password must be at most 72 characters")
      .regex(/[A-Z]/, "Must include at least one uppercase letter")
      .regex(/[a-z]/, "Must include at least one lowercase letter")
      .regex(/\d/, "Must include at least one number")
      .regex(/[^A-Za-z0-9]/, "Must include at least one symbol"),

    confirmpassword: z.string(),

    phones: z.array(
      z.object({
        number: z.string().trim().min(7, "Enter a valid phone"),
      })
    ),
  })
  .refine((data) => data.password === data.confirmpassword, {
    path: ["confirmpassword"],
    message: "Passwords do not match",
  });

export type FormValues = z.infer<typeof formSchema>;

export default function FormCard() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
      phones: [{ number: "" }],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>
          Create Your account. it&apos;s free and only take a minute
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <PersonalInfoSection />
            <PasswordSection />
            <PhoneSection />
            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-500"
            >
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
