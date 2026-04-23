import Image from "next/image";

export function ProductVisual() {
  return (
    <div className="relative mx-auto aspect-[1/1.05] w-full max-w-[560px] overflow-hidden rounded-[2rem] border border-[rgba(111,182,215,0.22)] bg-[linear-gradient(135deg,#fafdff_0%,#edf8fc_54%,#fff7f2_100%)] p-6 shadow-[0_30px_100px_rgba(20,33,42,0.1)]">
      <Image
        alt="Lumi, a soft white child-friendly digital character with blue eyes, a bow, and a glowing antenna"
        className="lumi-float absolute bottom-5 left-1/2 w-[118%] max-w-none -translate-x-1/2 drop-shadow-[0_28px_34px_rgba(20,33,42,0.16)]"
        height={1600}
        priority
        src="/assets/lumi-character.png"
        width={1600}
      />
    </div>
  );
}
