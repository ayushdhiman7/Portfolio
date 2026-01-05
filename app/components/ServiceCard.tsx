import { cn } from "@/app/lib/utils";
import LearnMoreLink from "./LearnMoreLink";
import Heading, { type HeadingVariant } from "./Heading";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

type LearnMoreLinkVariant =
  | "White"
  | "White2"
  | "Black"
  | "Black2"
  | "Green"
  | "Green2"
  | "SimpleGreen"
  | "SimpleWhite"
  | "SimpleBlack";

export type CardVariant = "Grey" | "Green" | "DarkWhite" | "DarkGreen";

export type IllustrationStyle = {
  containerHeight: number;
  backgroundSize: { width: number; height: number };
  backgroundPosition?: { x: number; y: number };
  transform?: string;
};

type ServiceCardProps = {
  lines: string[];
  cardVariant: CardVariant;
  illustrationSrc: StaticImageData;
  illustrationAlt: string;
  illustrationStyle: IllustrationStyle;
  className?: string;
  href?: string;
  hoverBgImage?: StaticImageData;
};

export default function ServiceCard({
  lines,
  cardVariant,
  illustrationSrc,
  illustrationAlt,
  illustrationStyle,
  className,
  href,
  hoverBgImage,
}: ServiceCardProps) {
  // Determine card styling based on variant
  const getCardStyles = (): {
    backgroundColor: string;
    headingVariant: HeadingVariant;
    linkVariant: LearnMoreLinkVariant;
  } => {
    switch (cardVariant) {
      case "Grey":
        return {
          backgroundColor: "#f3f3f3",
          headingVariant: "Green",
          linkVariant: "Black",
        };
      case "Green":
        return {
          backgroundColor: "#b9ff66",
          headingVariant: "White",
          linkVariant: "Black",
        };
      case "DarkWhite":
        return {
          backgroundColor: "#191a23",
          headingVariant: "White",
          linkVariant: "White",
        };
      case "DarkGreen":
        return {
          backgroundColor: "#191a23",
          headingVariant: "Green",
          linkVariant: "White",
        };
    }
  };

  const { backgroundColor, headingVariant, linkVariant } = getCardStyles();

  const cardContent = (
    <div
      className={cn(
        "border border-[#191a23] border-solid flex items-center justify-between gap-[10px] overflow-clip p-[49px] max-xl:p-[35px] relative rounded-[45px] shadow-[0px_5px_0px_0px_#191a23] shrink-0 w-full",
        hoverBgImage && "group",
        href && "cursor-pointer transition-all duration-300 hover:shadow-[0px_8px_0px_0px_#191a23] hover:-translate-y-[3px]",
        className
      )}
      style={{ backgroundColor }}
      data-name="Card"
    >
      {hoverBgImage && (
        <>
          <div
            className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 rounded-[45px] overflow-hidden pointer-events-none z-0"
            style={{
              backgroundImage: `url(${hoverBgImage.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="absolute inset-0 bg-black/40 md:bg-black/0 md:group-hover:bg-black/40 transition-opacity duration-300 rounded-[45px] pointer-events-none z-[1]" />
        </>
      )}
      <div
        className="flex flex-col gap-[93px] max-xl:gap-[60px] items-start justify-center relative shrink-0 z-10"
        data-name="Heading and link"
      >
        <div className={cn(
          hoverBgImage && "group-hover:opacity-0 transition-opacity duration-300"
        )}>
        <Heading
          lines={lines}
          variant={headingVariant}
          headingClassName="text-[30px]/[1.27] max-xl:text-[25px]/[1.27]"
          as="h3"
        />
        </div>
        <LearnMoreLink variant={linkVariant} />
      </div>
      <div
        className={cn(
          "relative shrink-0 overflow-hidden flex-1 h-auto max-w-[210px] z-10",
          hoverBgImage && "md:group-hover:opacity-0 md:opacity-100 opacity-0 transition-opacity duration-300"
        )}
        data-name="Illustration"
        style={{
          aspectRatio: `210 / ${illustrationStyle.containerHeight}`,
        }}
      >
        <Image
          src={illustrationSrc}
          alt={illustrationAlt}
          className="absolute max-w-none max-h-none"
          style={{
            width: illustrationStyle.backgroundSize.width + "%",
            height: illustrationStyle.backgroundSize.height + "%",
            left:
              (illustrationStyle.backgroundPosition?.x ??
                50 - illustrationStyle.backgroundSize.width / 2) + "%",
            top:
              (illustrationStyle.backgroundPosition?.y ??
                50 - illustrationStyle.backgroundSize.height / 2) + "%",
            transform: illustrationStyle.transform,
          }}
        />
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer" className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
