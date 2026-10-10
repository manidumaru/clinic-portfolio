"use client";

import { useState, type ComponentProps, type ReactNode } from "react";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { Icon } from "@/components/icons/Icon";
import { buttonClasses } from "@/components/ui/Button";
import { arrowNudge } from "@/components/ui/styles";
import { CONTACT } from "@/constants/contact";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";
import { sendMessage } from "@/lib/send-message";
import { cn } from "@/lib/cn";

type Status = "idle" | "invalid" | "sending";
type FieldName = keyof ContactFormValues;

const copy = CONTACT.form;
const fieldClass =
  "rounded-[14px] border border-[#D5E0E1] bg-[#FBFCFC] px-4 font-[inherit] text-base text-ink transition-[border-color,box-shadow] duration-200 placeholder:text-placeholder focus:border-brand focus:shadow-[0_0_0_4px_rgba(41,121,132,.16)] focus:outline-none aria-invalid:border-danger aria-invalid:bg-[#FFFBFA]";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", phone: "", email: "", message: "" },
    reValidateMode: "onSubmit",
  });

  // As in the design: typing into a field clears its error.
  const field = (name: FieldName) => register(name, { onChange: () => clearErrors(name) });

  const onValid = async (values: ContactFormValues) => {
    setStatus("sending");
    const toastId = toast.loading(copy.sending);
    const result = await sendMessage(values);
    toast.update(toastId, {
      render: result.ok ? copy.success : copy.failedAlert,
      type: result.ok ? "success" : "error",
      isLoading: false,
      autoClose: result.ok ? 6000 : 8000,
      closeButton: true,
    });
    if (result.ok) reset();
    setStatus("idle");
  };

  const sending = status === "sending";

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onValid, () => setStatus("invalid"))}
      aria-labelledby="form-title"
      className="flex min-w-0 flex-[1_1_440px] flex-col gap-5 rounded-[28px] border border-line bg-white p-[clamp(24px,4vw,40px)] shadow-[0_30px_60px_-40px_rgba(22,40,43,.3)]"
    >
      <div className="flex flex-col gap-1.5">
        <h3 id="form-title" className="m-0 text-2xl font-extrabold tracking-[-0.02em]">
          {copy.title}
        </h3>
        <p className="m-0 text-[15px] text-muted">{copy.note}</p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
        <Field
          id="f-name"
          label={copy.fields.name.label}
          error={errors.name?.message}
          registration={field("name")}
          type="text"
          autoComplete="name"
          placeholder={copy.fields.name.placeholder}
        />
        <Field
          id="f-phone"
          label={copy.fields.phone.label}
          error={errors.phone?.message}
          registration={field("phone")}
          type="tel"
          autoComplete="tel"
          placeholder={copy.fields.phone.placeholder}
        />
      </div>
      <Field
        id="f-email"
        label={copy.fields.email.label}
        error={errors.email?.message}
        registration={field("email")}
        type="email"
        autoComplete="email"
        placeholder={copy.fields.email.placeholder}
      />
      <Field
        id="f-message"
        label={copy.fields.message.label}
        error={errors.message?.message}
        registration={field("message")}
        multiline
        placeholder={copy.fields.message.placeholder}
      />

      {status === "invalid" && <ErrorNotice>{copy.invalidAlert}</ErrorNotice>}

      <button
        type="submit"
        disabled={sending}
        className={buttonClasses({ size: "lg", className: "h-14 cursor-pointer border-none px-7 font-[inherit]" })}
      >
        {sending ? (
          <>
            <Icon name="spinner" size={18} strokeWidth={2.4} className="animate-spin" />
            <span>{copy.sending}</span>
          </>
        ) : (
          <>
            <span>{copy.submit}</span>
            <Icon name="arrowRight" size={18} strokeWidth={2} className={arrowNudge} />
          </>
        )}
      </button>
    </form>
  );
}

type FieldProps = {
  id: string;
  label: ReactNode;
  error?: string;
  registration: UseFormRegisterReturn;
  multiline?: boolean;
} & Pick<ComponentProps<"input">, "type" | "autoComplete" | "placeholder">;

function Field({ id, label, error, registration, multiline, ...inputProps }: FieldProps) {
  const errorId = `${id}-err`;
  const a11y = { id, "aria-invalid": error ? true : undefined, "aria-describedby": error ? errorId : undefined };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-bold">
        {label}
      </label>
      {multiline ? (
        <textarea
          rows={5}
          {...a11y}
          {...registration}
          placeholder={inputProps.placeholder}
          className={cn(fieldClass, "min-h-[140px] resize-y py-3.5 leading-[1.55]")}
        />
      ) : (
        <input {...a11y} {...registration} {...inputProps} className={cn(fieldClass, "h-[52px]")} />
      )}
      {error && (
        <span id={errorId} role="alert" className="text-[13px] font-semibold text-danger">
          {error}
        </span>
      )}
    </div>
  );
}

function ErrorNotice({ children }: { children: ReactNode }) {
  return (
    <div
      role="alert"
      className="flex items-start gap-3 rounded-[14px] border border-[#F5C6C2] bg-[#FEF3F2] px-4 py-3.5 text-sm leading-normal font-semibold text-[#912018]"
    >
      <Icon name="alert" strokeWidth={2} className="flex-none" />
      <span>{children}</span>
    </div>
  );
}
