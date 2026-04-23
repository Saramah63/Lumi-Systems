import Link from "next/link";
import { footerNavItems } from "@/lib/constants/navigation";
import { siteConfig } from "@/lib/constants/site";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--foreground)] py-12 text-white">
      <div className="container-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-3 text-xl font-extrabold">{siteConfig.name}</div>
          <p className="max-w-md text-sm leading-7 text-white/64">
            Emotionally intelligent digital tools for early childhood learning, communication, and healthier everyday
            interaction.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-white/68 md:justify-end">
          {footerNavItems.map((link) => (
            <Link className="transition hover:text-white" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="container-shell mt-10 border-t border-white/12 pt-6 text-xs font-bold text-white/44">
        © {siteConfig.name}
      </div>
    </footer>
  );
}
