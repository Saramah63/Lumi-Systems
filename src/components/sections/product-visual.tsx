import Image from "next/image";

export function ProductVisual() {
  return (
    <div className="relative mx-auto aspect-[1/1.05] w-full max-w-[560px] overflow-hidden rounded-[2rem] border border-[rgba(111,182,215,0.22)] bg-[linear-gradient(135deg,#fafdff_0%,#edf8fc_54%,#fff7f2_100%)] p-6 shadow-[0_30px_100px_rgba(20,33,42,0.1)]">
      <div className="absolute left-6 top-6 z-10 rounded-2xl border border-[var(--line)] bg-white/78 px-5 py-4 shadow-[0_20px_60px_rgba(20,33,42,0.08)] backdrop-blur">
        <span className="block text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--blue-strong)]">
          Lumi
        </span>
        <strong className="font-display mt-1 block text-2xl leading-none text-[var(--foreground)]">
          ready to talk
        </strong>
      </div>
      <Image
        alt="Lumi, a soft white child-friendly digital character with blue eyes, a bow, and a glowing antenna"
        className="lumi-float absolute bottom-12 left-1/2 w-[118%] max-w-none -translate-x-1/2 drop-shadow-[0_28px_34px_rgba(20,33,42,0.16)]"
        height={1600}
        priority
        src="/assets/lumi-character.png"
        width={1600}
      />
      <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-wrap gap-2">
        {["calm", "brave", "kind"].map((item) => (
          <span
            className="rounded-full border border-[var(--line)] bg-white/82 px-3 py-2 text-xs font-extrabold text-[var(--foreground)]"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
