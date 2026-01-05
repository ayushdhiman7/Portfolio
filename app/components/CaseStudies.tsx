"use client";

import { cn } from "@/app/lib/utils";
import LearnMoreLink from "./LearnMoreLink";

type CaseStudy = {
  description: string;
};

const caseStudies: CaseStudy[] = [
  {
    description:
      "For a local restaurant, I developed a custom web application with online ordering system that resulted in a 50% increase in online orders and improved customer experience.",
  },
  {
    description:
      "For a B2B software company, I built a scalable full-stack application that improved their internal processes and resulted in a 200% increase in operational efficiency.",
  },
  {
    description:
      "For a national retail chain, I created a mobile app with real-time inventory management that increased customer engagement by 25% and streamlined their operations.",
  },
];

export default function CaseStudies({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col items-start px-[100px] max-xl:px-[60px] max-sm:px-[30px] py-0 relative w-full max-w-[1440px] mx-auto",
        className
      )}
      data-name="Case studies block"
    >
      <div
        className="bg-[#191a23] grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-[128px] max-xl:gap-x-[80px] max-lg:gap-x-[60px] gap-y-[80px] max-lg:gap-y-[60px] px-[60px] max-lg:px-[40px] pt-[70px] pb-[69px] max-lg:py-[40px] relative rounded-[45px] shrink-0 xl:ml-[3px] xl:mt-px flex-1"
        data-name="Case studies"
      >
        {caseStudies.map((caseStudy, index) => {
          return (
            <div
              key={index}
              className={cn(
                "flex flex-col gap-[18px] items-start relative shrink-0 flex-1",
                index % 2 === 0 &&
                  index === caseStudies.length - 1 &&
                  "max-lg:col-span-2 max-md:col-span-1"
              )}
              data-name="Case study"
            >
              {index > 0 && (
                <div
                  className={cn(
                    "absolute -left-[64px] max-xl:-left-[40px] max-lg:-left-[30px] top-0 bottom-0 w-px h-full bg-white max-md:hidden",
                    index % 2 === 0 && "max-lg:hidden"
                  )}
                  aria-hidden="true"
                />
              )}
              {index > 0 && (
                <div
                  className={cn(
                    "absolute -top-[40px] max-lg:-top-[30px] left-0 right-0 h-px w-full bg-white hidden max-md:block",
                    index === caseStudies.length - 1 && "max-lg:block"
                  )}
                  aria-hidden="true"
                />
              )}
              <p
                className={cn(
                  "font-normal relative shrink-0 text-[18px]/[normal] text-white max-w-[286px] whitespace-pre-wrap",
                  index === caseStudies.length - 1 && "max-lg:max-w-none"
                )}
              >
                {caseStudy.description}
              </p>
              {/* <LearnMoreLink variant="SimpleGreen" /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
