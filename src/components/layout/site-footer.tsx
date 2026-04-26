import Link from "next/link";
import { footerNavItems } from "@/lib/constants/navigation";
import { siteConfig } from "@/lib/constants/site";

export function SiteFooter() {
  const productLinks = footerNavItems.slice(0, 4);
  const organizationLinks = footerNavItems.slice(4, 7);
  const companyLinks = footerNavItems.slice(7, 9);

  return (
    <footer className="border-t border-black/10 bg-[#fbf8f1] py-10 text-slate-600 md:py-14">
      <div className="container-shell grid gap-10 md:grid-cols-2 xl:grid-cols-[1.1fr_0.78fr_0.78fr_0.72fr_0.9fr]">
        <div className="grid gap-3">
          <div className="text-xl font-semibold text-slate-950">{siteConfig.name}</div>
          <p className="max-w-md text-sm leading-7 text-slate-600">
            Human-centered learning tools for emotional intelligence and communication.
          </p>
        </div>

        <div className="grid gap-3 text-sm">
          <p className="font-semibold text-slate-950">Product</p>
          {productLinks.map((link) => (
            <Link className="transition hover:text-slate-950" href={link.href} key={`${link.href}-${link.label}`}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="grid gap-3 text-sm">
          <p className="font-semibold text-slate-950">Organizations</p>
          {organizationLinks.map((link) => (
            <Link className="transition hover:text-slate-950" href={link.href} key={`${link.href}-${link.label}`}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="grid gap-3 text-sm">
          <p className="font-semibold text-slate-950">Company</p>
          {companyLinks.map((link) => (
            <Link className="transition hover:text-slate-950" href={link.href} key={`${link.href}-${link.label}`}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="grid gap-3 text-sm">
          <p className="font-semibold text-slate-950">Contact</p>
          <a className="transition hover:text-slate-950" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          <p>{siteConfig.location}</p>
          <p>
            Product experience: <span className="font-semibold text-slate-950">lumifriends.app</span>
          </p>
          <p>Restricted access</p>
        </div>
      </div>
      <div className="container-shell mt-8 border-t border-black/10 pt-6 text-xs font-medium text-slate-500">
        © 2026 {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
