"use client";

import { cn } from "@/app/lib/utils";
import TeamCard from "./TeamCard";
import type { StaticImageData } from "next/image";
import personImage1 from "@/app/assets/team/person-1.jpg";
import personImage2 from "@/app/assets/team/person-2.jpg";
import personImage3 from "@/app/assets/team/person-3.jpg";
import Button from "./Button";

type TeamMember = {
  name: string;
  title: string;
  description: string;
  imageSrc: StaticImageData;
};

const teamMembers: TeamMember[] = [
  {
    name: "Frontend Development",
    title: "Core Expertise",
    description:
      "Expertise in React.js, Vue.js, Next.js, HTML5, CSS3, and Responsive Design. Building modern, interactive user interfaces with JavaScript (ES6+) and TypeScript",
    imageSrc: personImage1,
  },
  {
    name: "Backend Development",
    title: "Server-Side Skills",
    description:
      "Proficient in Node.js, Express.js, Laravel, and PHP. Building robust server-side applications with clean architecture and best practices",
    imageSrc: personImage3,
  },
  {
    name: "APIs & Integration",
    title: "Technical Skills",
    description:
      "Expert in RESTful APIs, API Design & Integration, MVC / Clean Architecture. Implementing authentication with JWT and OAuth, plus validation & error handling",
    imageSrc: personImage2,
  },
  {
    name: "Database Management",
    title: "Data Expertise",
    description:
      "Skilled in MongoDB, MySQL, PostgreSQL, and SQLite. Designing efficient database schemas and optimizing queries for performance",
    imageSrc: personImage2,
  },
  {
    name: "Languages & Core",
    title: "Programming Skills",
    description:
      "Proficient in JavaScript (ES6+), TypeScript, and SQL. Writing clean, maintainable code following modern development standards",
    imageSrc: personImage3,
  },
  {
    name: "Web Development",
    title: "Full-Stack",
    description:
      "3+ years of experience in full-stack web development. Creating end-to-end solutions from frontend to backend with modern technologies",
    imageSrc: personImage1,
  },
  {
    name: "Version Control",
    title: "DevOps Tools",
    description:
      "Experienced with Git, GitHub, GitLab. Managing code repositories, branching strategies, and collaborative development workflows",
    imageSrc: personImage2,
  },
  {
    name: "Testing & Quality",
    title: "QA Practices",
    description:
      "Proficient in unit testing, integration testing, and end-to-end testing. Ensuring code quality and reliability through comprehensive testing strategies",
    imageSrc: personImage3,
  },
  {
    name: "State Management",
    title: "Frontend Architecture",
    description:
      "Expert in state management solutions like Redux, Context API, Vuex. Building scalable and maintainable frontend architectures",
    imageSrc: personImage1,
  },
];

export default function Team({ className }: { className?: string }) {
  return (
    <div
      className="max-w-[1440px] mx-auto px-[100px] max-xl:px-[60px] max-sm:px-[30px] scroll-mt-[40px]"
      id="skills"
    >
      <div
        className={cn(
          "grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-[40px] max-xl:gap-[30px] max-sm:gap-[20px] relative",
          className
        )}
        data-name="Group of cards"
      >
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
      {/* <Button
        variant="primary"
        className="mt-[40px] block ml-auto py-[19px] px-[76px] max-sm:w-full max-sm:justify-center"
      >
        View all skills
      </Button> */}
    </div>
  );
}
