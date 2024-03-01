import useClient from "@/hooks/useClient";
import { useMediaQuery } from "@react-hook/media-query";
import Image from "next/image";
import React from "react";
import { IoMenu as MenuIcon } from "react-icons/io5";

type Props = {
    logo: any;
    navItems: { label: string; href: string }[];
    openMobileMenu: () => void;
};

const StandardHeaderLogoWithNav = ({ logo, navItems, openMobileMenu }: Props) => {
    const generateNavItems = navItems.map((items, index) => {
        return (
            <a key={index} href={items.href} className='text-primary hover:scale-110'>
                {items.label}
            </a>
        );
    });
    return (
        <header id='header' className='sticky top-0 z-10 flex h-20 w-full max-w-[1120px]  items-center justify-between bg-white px-4 py-4 md:h-28 '>
            <a href='#hero-magnet' className='h-full w-auto'>
                <Image src={logo} alt='Chillmate Logo' width={0} height={0} id='logo' className='h-full w-auto' priority></Image>
            </a>

            <nav className='hidden gap-4 md:flex'>{generateNavItems}</nav>

            <MenuIcon className='block h-8 w-8 text-primary md:hidden' onClick={openMobileMenu} />
        </header>
    );
};

export default StandardHeaderLogoWithNav;
