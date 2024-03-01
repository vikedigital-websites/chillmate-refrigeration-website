"use client";

import useClient from "@/hooks/useClient";
import { useState } from "react";
import logo from "./assets/logo.svg";
import SideMenu from "./components/SideMenu";
import StandardHeaderLogoWithNav from "./components/StandardHeaderLogoWithNav";
import SectionRoundedBox from "./components/SectionRoundedBox";
import Hero from "./sections/Hero";

export default function Home() {
    const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false);

    const isClient = useClient();
    const navItems = [
        {
            label: "Home",
            href: "#header",
        },
        {
            label: "Services",
            href: "#header",
        },
        {
            label: "Locations",
            href: "#header",
        },
        {
            label: "About",
            href: "#header",
        },
        {
            label: "Contact",
            href: "#header",
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
            <main className='w-full max-w-[1120px] overflow-x-hidden px-4 xl:p-0'>
                <Hero />
            </main>
        </>
    );
}
