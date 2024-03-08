import React from "react";

const SectionHeading = ({ children, theme = "dark" }: { children: React.ReactNode; theme?: "dark" | "light" }) => {
    return <h2 className={`${theme === "dark" ? "text-primary" : "text-white"} font-bold`}>{children}</h2>;
};

SectionHeading.displayName = "SectionHeading";
export default SectionHeading;
