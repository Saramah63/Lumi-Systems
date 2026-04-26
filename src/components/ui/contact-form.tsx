"use client";

import { useState } from "react";
import { Input, Select, Textarea } from "@/components/ui/fields";
import type { ContactReason } from "@/types/contact";

const reasons: ContactReason[] = [
  "Request a demo",
  "Daycare pilot",
  "Partnership",
  "Research collaboration",
  "Funding or grants",
  "General inquiry",
];

export function ContactForm() {
  const [message, setMessage] = useState("");

  return (
    <form
      className="grid gap-6"
      onSubmit={(event) => {
        event.preventDefault();
        setMessage(
          "Thank you. Your message has been received. Lumi Systems will review your inquiry and respond if there is a relevant fit for a conversation.",
        );
        event.currentTarget.reset();
      }}
    >
      <div className="grid gap-2">
        <h2 className="text-[clamp(34px,3vw,46px)] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--foreground)]">
          Send a message
        </h2>
        <p className="max-w-[560px] text-[15.5px] leading-6 text-[var(--muted)]">
          Tell us what you would like to discuss and we will review your message.
        </p>
      </div>

      <div className="grid gap-x-6 gap-y-6 md:grid-cols-2">
        <label className="grid gap-2.5 text-[14px] font-semibold text-[var(--foreground)] md:text-[15px]">
          Name
          <Input aria-label="Name" required />
        </label>
        <label className="grid gap-2.5 text-[14px] font-semibold text-[var(--foreground)] md:text-[15px]">
          Organization
          <Input aria-label="Organization" />
        </label>
      </div>
      <label className="grid gap-2.5 text-[14px] font-semibold text-[var(--foreground)] md:text-[15px]">
        Email
        <Input aria-label="Email" required type="email" />
      </label>
      <label className="grid gap-2.5 text-[14px] font-semibold text-[var(--foreground)] md:text-[15px]">
        Reason for contact
        <Select aria-label="Reason for contact" required>
          <option value="">Select one</option>
          {reasons.map((reason) => (
            <option key={reason}>{reason}</option>
          ))}
        </Select>
      </label>
      <label className="grid gap-2.5 text-[14px] font-semibold text-[var(--foreground)] md:text-[15px]">
        Message
        <Textarea aria-label="Message" placeholder="Tell us what you would like to discuss." required />
      </label>
      <button
        className="mt-2 inline-flex min-h-[56px] w-full items-center justify-center rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#20323d]"
        type="submit"
      >
        Send message
      </button>
      <p className="text-[13.5px] leading-[1.5] text-[var(--muted)]">
        We will review your message and respond if there is a relevant fit for a conversation.
      </p>
      <p className="min-h-5 text-sm font-medium leading-6 text-[var(--blue-strong)]" role="status">
        {message}
      </p>
    </form>
  );
}
