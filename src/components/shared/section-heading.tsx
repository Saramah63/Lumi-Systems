type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  centered?: boolean;
};

export function SectionHeading({ eyebrow, title, body, centered = false }: SectionHeadingProps) {
  return (
    <div className={`grid gap-5 ${centered ? "mx-auto max-w-3xl text-center" : "max-w-4xl"}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="font-display section-title">{title}</h2>
      {body ? <p className="body-large">{body}</p> : null}
    </div>
  );
}
