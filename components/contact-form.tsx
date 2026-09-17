"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { event as trackEvent } from "@/lib/fpixel";
import type { Content, Locale } from "@/lib/i18n";

type ContactContent = Content["contact"];

function buildSchema(validation: ContactContent["form"]["validation"]) {
  return z.object({
    fullName: z
      .string()
      .min(1, validation.nameRequired)
      .min(2, validation.nameMin),
    phone: z
      .string()
      .min(1, validation.phoneRequired)
      .regex(/^[+]?[0-9\s()-]{7,20}$/, validation.phoneInvalid),
    company: z.string().optional(),
    projectName: z.string().min(1, validation.projectRequired),
  });
}

type FormValues = {
  fullName: string;
  phone: string;
  company?: string;
  projectName: string;
};

export function ContactForm({
  content,
  locale,
}: {
  content: ContactContent;
  locale: Locale;
}) {
  const schema = React.useMemo(
    () => buildSchema(content.form.validation),
    [content.form.validation],
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { fullName: "", phone: "", company: "", projectName: "" },
  });

  async function onSubmit(values: FormValues) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, locale }),
      });

      if (!response.ok) {
        throw new Error("request_failed");
      }

      reset();
      trackEvent("Lead");
      toast.success(content.form.successTitle, {
        description: content.form.successDescription,
      });
    } catch {
      toast.error(content.form.errorTitle, {
        description: content.form.errorDescription,
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-5 sm:grid-cols-2"
      noValidate
    >
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="fullName" className="sr-only">
          {content.form.nameLabel}
        </Label>
        <Input
          id="fullName"
          placeholder={content.form.nameLabel}
          aria-invalid={Boolean(errors.fullName)}
          {...register("fullName")}
        />
        {errors.fullName && (
          <p className="text-xs text-destructive">
            {errors.fullName.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="phone" className="sr-only">
          {content.form.phoneLabel}
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder={content.form.phoneLabel}
          aria-invalid={Boolean(errors.phone)}
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-xs text-destructive">{errors.phone.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="company" className="sr-only">
          {content.form.companyLabel}
        </Label>
        <Input
          id="company"
          placeholder={content.form.companyLabel}
          {...register("company")}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="projectName" className="sr-only">
          {content.form.projectLabel}
        </Label>
        <Input
          id="projectName"
          placeholder={content.form.projectLabel}
          aria-invalid={Boolean(errors.projectName)}
          {...register("projectName")}
        />
        {errors.projectName && (
          <p className="text-xs text-destructive">
            {errors.projectName.message}
          </p>
        )}
      </div>

      <div className="sm:col-span-2">
        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className="w-full rounded-full sm:w-auto"
        >
          {isSubmitting ? content.form.submitting : content.form.submit}
        </Button>
      </div>
    </form>
  );
}
