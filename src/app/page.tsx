"use client";

import useClient from "@/hooks/useClient";
import { useState } from "react";
import logo from "./assets/logo.svg";
import SideMenu from "./components/SideMenu";
import StandardHeaderLogoWithNav from "./components/StandardHeaderLogoWithNav";
import SectionRoundedBox from "./components/SectionRoundedBox";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Locations from "./sections/Locations";
import About from "./sections/About";
import Contact from "./sections/Contact";

export default function Home() {
    const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false);

    const isClient = useClient();
    const navItems = [
        {
            label: "Home",
            href: "#hero",
        },
        {
            label: "Services",
            href: "#services",
        },
        {
            label: "Locations",
            href: "#locations",
        },
        {
            label: "About",
            href: "#about",
        },
        {
            label: "Contact",
            href: "#contact",
        },
    ];
    const closeSideMenu = () => {
        setSideMenuIsOpen(false);
    };

    return (
        <>
            <a href='tel: 0422407129' className='block w-screen bg-primary p-2 text-center text-white'>
                CALL DYLAN ON: <b>04 2240 7129</b>
            </a>
            <StandardHeaderLogoWithNav logo={logo} navItems={navItems} openMobileMenu={() => setSideMenuIsOpen((prev) => !prev)} />

            {isClient && sideMenuIsOpen && <SideMenu logo={logo} close={closeSideMenu} navItems={navItems}></SideMenu>}
            <main className='flex w-full max-w-[1120px] flex-col gap-32 overflow-x-hidden px-4 xl:p-0'>
                <Hero />
                <Services />
                <Locations />
                <About />
                <Contact />
            </main>
        </>
    );
}
