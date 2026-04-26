type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  centered?: boolean;
};

export function SectionHeading({ eyebrow, title, body, centered = false }: SectionHeadingProps) {
  return (
    <div className={`grid gap-5 ${centered ? "mx-auto max-w-[42rem] text-center" : "max-w-[42rem]"}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="font-display section-title">{title}</h2>
      {body ? <p className="body-copy">{body}</p> : null}
    </div>
  );
}
