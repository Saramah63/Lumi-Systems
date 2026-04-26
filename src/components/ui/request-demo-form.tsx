"use client";

import { useState } from "react";
import { Input, Select, Textarea } from "@/components/ui/fields";

const organizationTypes = [
  "Daycare center",
  "Early childhood education provider",
  "Research / university",
  "Municipality",
  "Funding / innovation partner",
  "Other",
] as const;

const interests = [
  "Product demo",
  "Daycare pilot",
  "Research collaboration",
  "Partnership discussion",
  "Funding or grant collaboration",
  "General inquiry",
] as const;

export function RequestDemoForm() {
  const [message, setMessage] = useState("");

  return (
    <form
      className="grid gap-6"
      onSubmit={(event) => {
        event.preventDefault();
        setMessage(
          "Thank you. Your request has been received. Lumi Systems will review your message and respond if there is a relevant fit for a demo, pilot, or collaboration discussion.",
        );
        event.currentTarget.reset();
      }}
    >
      <div className="grid gap-2">
        <h2 className="text-[clamp(34px,3vw,46px)] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--foreground)]">
          Request a demo
        </h2>
        <p className="max-w-[560px] text-[15.5px] leading-6 text-[var(--muted)]">
          Tell us a little about your organization and what you would like to explore.
        </p>
      </div>

      <div className="grid gap-x-6 gap-y-6 md:grid-cols-2">
        <label className="grid gap-2.5 text-[14px] font-semibold text-[var(--foreground)] md:text-[15px]">
          Name <span className="sr-only">required</span>
          <Input aria-label="Name" required />
        </label>
        <label className="grid gap-2.5 text-[14px] font-semibold text-[var(--foreground)] md:text-[15px]">
          Organization
          <Input aria-label="Organization" />
        </label>
      </div>
      <div className="grid gap-x-6 gap-y-6 md:grid-cols-2">
        <label className="grid gap-2.5 text-[14px] font-semibold text-[var(--foreground)] md:text-[15px]">
          Role
          <Input aria-label="Role" />
        </label>
        <label className="grid gap-2.5 text-[14px] font-semibold text-[var(--foreground)] md:text-[15px]">
          Email
          <Input aria-label="Email" required type="email" />
        </label>
      </div>
      <div className="grid gap-x-6 gap-y-6 md:grid-cols-2">
        <label className="grid gap-2.5 text-[14px] font-semibold text-[var(--foreground)] md:text-[15px]">
          Country / City
          <Input aria-label="Country or City" />
        </label>
        <label className="grid gap-2.5 text-[14px] font-semibold text-[var(--foreground)] md:text-[15px]">
          Organization type
          <Select aria-label="Organization type" required>
            <option value="">Select one</option>
            {organizationTypes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </Select>
        </label>
      </div>
      <label className="grid gap-2.5 text-[14px] font-semibold text-[var(--foreground)] md:text-[15px]">
        Interest
        <Select aria-label="Interest" required>
          <option value="">Select one</option>
          {interests.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </Select>
      </label>
      <label className="grid gap-2.5 text-[14px] font-semibold text-[var(--foreground)] md:text-[15px]">
        Message
        <Textarea aria-label="Message" placeholder="Tell us what you are interested in exploring." required />
      </label>
      <button
        className="mt-2 inline-flex min-h-[56px] w-full items-center justify-center rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#20323d]"
        type="submit"
      >
        Request Demo
      </button>
      <p className="text-[13.5px] leading-[1.5] text-[var(--muted)]">
        We will review your request and respond if there is a relevant fit for a demo, pilot, or collaboration
        discussion.
      </p>
      <p className="min-h-5 text-sm font-medium leading-6 text-[var(--blue-strong)]" role="status">
        {message}
      </p>
    </form>
  );
}
