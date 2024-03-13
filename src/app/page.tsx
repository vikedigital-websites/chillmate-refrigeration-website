"use client";

import useClient from "@/hooks/useClient";
import { useRef, useState } from "react";
import logo from "./assets/logo.svg";
import SideMenu from "./components/SideMenu";
import StandardHeaderLogoWithNav from "./components/StandardHeaderLogoWithNav";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Locations from "./sections/Locations";
import Services from "./sections/Services";
import ServiceDetailModal from "./components/ServiceDetailModal";
import { FaPhoneFlip as PhoneIcon } from "react-icons/fa6";

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
            <div className='sticky top-0 z-50'>
                <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`} className=' flex w-screen items-center justify-center gap-2 bg-primary p-2 text-center text-white'>
                    CALL DYLAN ON: <b className='animate-pulse'>{process.env.NEXT_PUBLIC_PHONE_NUMBER}</b>
                    <PhoneIcon className='animate-pulse' />
                </a>
                <StandardHeaderLogoWithNav logo={logo} navItems={navItems} openMobileMenu={() => setSideMenuIsOpen((prev) => !prev)} />
            </div>

            {isClient && sideMenuIsOpen && <SideMenu logo={logo} close={closeSideMenu} navItems={navItems}></SideMenu>}
            <main className='flex w-full max-w-[1120px] flex-col gap-32 overflow-x-hidden px-4 xl:p-0'>
                <Hero />
                <Services />
                <Locations />
                <About />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
