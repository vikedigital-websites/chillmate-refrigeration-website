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
            <a key={index} href={items.href} className='group relative text-primary hover:scale-110'>
                {items.label}
                <div className='absolute top-full h-[2px] w-[calc(100%+1rem)] -translate-x-2 scale-x-0 bg-primary transition-all group-hover:scale-x-100' />
            </a>
        );
    });
    return (
        <header id='header' className='flex w-full justify-center bg-white'>
            <div className='flex h-20 w-full max-w-[1120px]  items-center justify-between bg-white px-4 py-4 md:h-28 '>
                <a href='#hero' className='h-full w-auto'>
                    <Image src={logo} alt='Chillmate Logo' width={0} height={0} id='logo' className='h-full w-auto' priority></Image>
                </a>

                <nav className='hidden gap-4 md:flex'>{generateNavItems}</nav>

                <MenuIcon className='block h-8 w-8 text-primary md:hidden' onClick={openMobileMenu} />
            </div>
        </header>
    );
};

StandardHeaderLogoWithNav.displayName = "StandardHeaderLogoWithNav";

export default StandardHeaderLogoWithNav;
