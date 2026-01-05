"use client";

import { cn } from "../lib/utils";
import Button from "./Button";
import Image from "next/image";
import ayushImage from "@/app/assets/ayush.png";
export default function Header({ className }: { className?: string }) {
  return (
    <main
      className={cn(
        "flex items-center max-md:flex-col justify-between gap-[20px] px-[100px] max-xl:px-[60px] max-sm:px-[30px] py-0 relative w-full max-w-[1440px] mx-auto",
        className
      )}
    >
        <div className="flex flex-col gap-[35px] max-xl:gap-[25px] items-start max-md:items-center relative shrink-0 flex-1 pb-[34px] max-md:pb-0 max-w-[531px] max-md:max-w-none">
        <h1 className="font-medium relative shrink-0 text-[60px]/[normal] max-xl:text-[48px]/[1] whitespace-pre-wrap max-md:text-center">
          Hi, I'm Ayush
        </h1>
        <div className="hidden max-md:flex justify-center mb-[20px] mt-[20px] w-full">
          <div className="relative w-[250px] h-[250px] rounded-full overflow-hidden shadow-[0px_5px_0px_0px_#191a23]">
            <Image
              src={ayushImage}
              alt="Ayush"
              className="object-cover w-full h-full"
              width={250}
              height={250}
            />
          </div>
        </div>
        <p className="font-normal relative shrink-0 text-[20px]/[28px] max-xl:text-[16px]/[16px] max-w-[498px] max-md:max-w-none max-md:text-center whitespace-pre-wrap">
          A Full-Stack Software Engineer passionate about building innovative web and mobile applications. I specialize in React, Node.js, Laravel, and modern web technologies.
        </p>
        <Button
          variant="primary"
          className="py-[19px] pr-[36px] max-md:w-full justify-center"
          onClick={() => {
            const element = document.querySelector("#contact");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Get in touch
        </Button>
      </div>
      <div className="relative shrink-0 flex-1 max-md:hidden flex items-center justify-center">
        <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden shadow-[0px_5px_0px_0px_#191a23]">
          <Image
            src={ayushImage}
            alt="Ayush"
            className="object-cover w-full h-full"
            width={400}
            height={400}
          />
        </div>
      </div>
    </main>
  );
}
