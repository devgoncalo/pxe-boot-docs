import Image from "next/image";
import poweredLogos from "../assets/powered-logo.png";

export function Powered() {
  return (
    <div className="flex flex-col gap-1 text-xs font-normal leading-relaxed text-white md:mb-12 md:w-[420px] max-sm:md:mb-0">
      <text>Powered by</text>
      <div className="flex gap-3">
        <Image
          src={poweredLogos}
          alt="poweredLogos"
          className="h-[1.4rem] w-[21rem]"
        />
      </div>
    </div>
  );
}
