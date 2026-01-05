"use client";

import { useState } from "react";
import { cn } from "@/app/lib/utils";
import ProcessCard from "./ProcessCard";

type ProcessItem = {
  number: string;
  title: string;
  description: string;
};

const processItems: ProcessItem[] = [
  {
    number: "01",
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your project requirements, goals, and technical needs. This will allow me to understand your vision and tailor my development approach to best fit your requirements.",
  },
  {
    number: "02",
    title: "Planning and Architecture",
    description:
      "I conduct thorough analysis of your requirements to develop a comprehensive technical architecture that aligns with your business objectives and ensures scalability and maintainability.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "I execute the development plan, implementing all features and functionality while ensuring code quality, best practices, and consistency throughout the project.",
  },
  {
    number: "04",
    title: "Testing and Quality Assurance",
    description:
      "I continuously test the application, identify and fix bugs, and ensure the software meets quality standards and performs optimally across different environments.",
  },
  {
    number: "05",
    title: "Deployment and Documentation",
    description:
      "I handle the deployment process and provide comprehensive documentation, keeping you informed about the project progress and ensuring you have all the resources needed to maintain the application.",
  },
  {
    number: "06",
    title: "Maintenance and Support",
    description:
      "I believe in continuous improvement, regularly updating and refining the application based on feedback and evolving requirements to ensure long-term success and growth for your business.",
  },
];

export default function Process({ className }: { className?: string }) {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <div
      className={cn(
        "content-stretch flex flex-col gap-[30px] items-start px-[100px] max-xl:px-[60px] max-sm:px-[30px] py-0 relative w-full max-w-[1440px] mx-auto scroll-mt-[40px]",
        className
      )}
      data-name="Process block"
      id="process"
    >
      {processItems.map((item, index) => (
        <ProcessCard
          key={index}
            number={item.number}
            title={item.title}
            description={item.description}
            isExpanded={expandedIndex === index}
            onToggle={() => handleToggle(index)}
            className="mx-[3px]"
          />
        // </div>
      ))}
    </div>
  );
}
