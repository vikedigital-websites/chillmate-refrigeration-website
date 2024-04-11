import React from "react";
import { tiresiasLp } from "../fonts";
import { twMerge } from "tailwind-merge";

const SectionHeading = ({ children, theme = "dark", className }: { children: React.ReactNode; theme?: "dark" | "light"; className?: string }) => {
    return (
        <div className={twMerge("relative mx-auto w-full max-w-[500px]", className)}>
            <h2 className={`${theme === "dark" ? "text-primary" : "text-white"} text-center font-bold ${tiresiasLp.className}`}>{children}</h2>
            <div className='absolute top-full grid w-full grid-cols-[1fr_min-content_1fr] items-center gap-4'>
                <div className={`h-[1px] w-full rounded-full ${theme === "dark" ? "bg-primary" : "bg-white"}`}></div>
                <div className={`h-1 w-1 rounded-full ${theme === "dark" ? "bg-primary" : "bg-white"}`}></div>
                <div className={`h-[1px] w-full rounded-full ${theme === "dark" ? "bg-primary" : "bg-white"}`}></div>
            </div>
        </div>
    );
};

SectionHeading.displayName = "SectionHeading";
export default SectionHeading;
