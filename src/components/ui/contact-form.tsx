"use client";

import { useState } from "react";
import { Input, Select, Textarea } from "@/components/ui/fields";
import type { ContactReason } from "@/types/contact";

const reasons: ContactReason[] = [
  "Pilot interest",
  "Partnership",
  "Research collaboration",
  "Funding / investor discussion",
  "General inquiry",
];

export function ContactForm() {
  const [message, setMessage] = useState("");

  return (
    <form
      className="soft-card grid gap-5 p-6 md:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setMessage("Thank you. Lumi Systems will follow up when the contact endpoint is connected.");
        event.currentTarget.reset();
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-extrabold">
          Name
          <Input required />
        </label>
        <label className="grid gap-2 text-sm font-extrabold">
          Organization
          <Input />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-extrabold">
        Email
        <Input required type="email" />
      </label>
      <label className="grid gap-2 text-sm font-extrabold">
        Reason for contact
        <Select required>
          <option value="">Select one</option>
          {reasons.map((reason) => (
            <option key={reason}>{reason}</option>
          ))}
        </Select>
      </label>
      <label className="grid gap-2 text-sm font-extrabold">
        Message
        <Textarea required />
      </label>
      <button
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#20323d] md:justify-self-start"
        type="submit"
      >
        Send message
      </button>
      <p className="min-h-5 text-sm font-bold text-[var(--blue-strong)]" role="status">
        {message}
      </p>
    </form>
  );
}
