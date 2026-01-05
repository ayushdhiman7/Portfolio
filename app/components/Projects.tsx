"use client";

import { cn } from "@/app/lib/utils";
import ServiceCard, {
  type CardVariant,
  type IllustrationStyle,
} from "./ServiceCard";
import type { StaticImageData } from "next/image";
import imgSEO from "@/app/assets/illustrations/services/tokyo-magnifier-web-search-with-elements-2.png";
import imgPPC from "@/app/assets/illustrations/services/tokyo-selecting-a-value-in-the-browser-window-1.png";
import imgSocialMedia from "@/app/assets/illustrations/services/tokyo-browser-window-with-emoticon-likes-and-stars-around-2.png";
import imgEmail from "@/app/assets/illustrations/services/tokyo-sending-messages-from-one-place-to-another-1.png";
import imgContent from "@/app/assets/illustrations/services/tokyo-many-browser-windows-with-different-information-1.png";
import imgAnalytics from "@/app/assets/illustrations/services/tokyo-volumetric-analytics-of-different-types-in-web-browsers-2.png";
import redbusImage from "@/app/assets/projects/redbus.png";
import bebangImage from "@/app/assets/projects/bebang.png";
import bebangAdminImage from "@/app/assets/projects/bebangadmin.jpg";
import brainwaveImage from "@/app/assets/projects/brainwave.png";
import jobhubImage from "@/app/assets/projects/jobhub.png";
import resumeBuilderImage from "@/app/assets/projects/resumebuilder.png";

type ProjectItem = {
  lines: string[];
  cardVariant: CardVariant;
  illustrationSrc: StaticImageData;
  illustrationAlt: string;
  illustrationStyle: IllustrationStyle;
  href?: string;
  hoverBgImage?: StaticImageData;
};

const projects: ProjectItem[] = [
  {
    lines: ["E-Commerce", "Platform"],
    cardVariant: "DarkWhite",
    illustrationSrc: imgSocialMedia,
    illustrationAlt: "E-Commerce Platform illustration",
    illustrationStyle: {
      containerHeight: 210,
      backgroundSize: { width: 141.44, height: 141.44 },
    },
    href: "https://store-staging.bebang.ph/",
    hoverBgImage: bebangImage,
  },
  {
    lines: ["E-Commerce", "Dashboard Website"],
    cardVariant: "Green",
    illustrationSrc: imgContent,
    illustrationAlt: "Admin Dashboard E-Commerce Website illustration",
    illustrationStyle: {
      containerHeight: 195.915,
      backgroundSize: { width: 132.08, height: 141.26 },
    },
    href: "https://superadmin-staging.bebang.ph/",
    hoverBgImage: bebangAdminImage,
  },
  {
     lines: ["Bus Booking", "Reservation System"],
    cardVariant: "Grey",
    illustrationSrc: imgPPC,
    illustrationAlt: "Bus Booking Travel System illustration",
    illustrationStyle: {
      containerHeight: 147.624,
      backgroundSize: { width: 126.73, height: 180.28 },
    },
    href: "https://red-bus-silk.vercel.app/",
    hoverBgImage: redbusImage,
  },

  {
    lines: ["Job Portal", "Platform"],
    cardVariant: "DarkGreen",
    illustrationSrc: imgEmail,
    illustrationAlt: "API Integration Platform illustration",
    illustrationStyle: {
      containerHeight: 192.68,
      backgroundSize: { width: 140.67, height: 153.3 },
      backgroundPosition: { x: 59 - 75.7, y: 50 - 76.6 },
      transform: "scaleX(-1)",
    },
    href: "https://www.jobhub.world/home",
    hoverBgImage: jobhubImage,
  },
  {
     lines: ["React Design", "Demo Website"],
     cardVariant: "Green",
     illustrationSrc: imgAnalytics,
     illustrationAlt: "Social Media Dashboard illustration",
     illustrationStyle: {
       containerHeight: 170,
       backgroundSize: { width: 108.36, height: 134.02 },
     },
     href: "https://brainwave-rose-xi.vercel.app/",
     hoverBgImage: brainwaveImage,
   },
  {
    lines: ["Resume Builder", "Website"],
    cardVariant: "Grey",
    illustrationSrc: imgSEO,
    illustrationAlt: "Portfolio Website illustration",
    illustrationStyle: {
      containerHeight: 170,
      backgroundSize: { width: 148.84, height: 183.86 },
    },
    href: "https://jobhub-resume-builder.vercel.app/",
    hoverBgImage: resumeBuilderImage,
  },
];

export default function Projects({ className }: { className?: string }) {
  return (
    <div className="w-full">
      <div
        className={cn(
          "grid grid-cols-2 gap-[40px] max-xl:gap-[30px] max-lg:grid-cols-1 items-start relative w-full max-w-[1440px] mx-auto px-[100px] max-xl:px-[60px] max-sm:px-[30px] scroll-mt-[40px]",
          className
        )}
        id="projects"
      >
        {projects.map((project, index) => (
          <ServiceCard key={index} {...project} />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center relative w-full max-w-[1440px] mx-auto px-[100px] max-xl:px-[60px] max-sm:px-[30px] mt-[60px]">
        <h2 className="text-[25px] font-medium text-center leading-[normal] relative">
          Many other's
        </h2>
      </div>
    </div>
  );
}

