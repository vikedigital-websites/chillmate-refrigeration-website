import useClient from "@/hooks/useClient";
import { useMediaQuery } from "@react-hook/media-query";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
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

    const [headerSize, setHeaderSize] = useState<string>("py-4 h-20 md:h-28");

    useEffect(() => {
        const scrollFunction = () => {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                headerSize !== "py-2 h-14 md:h-20" && setHeaderSize("py-2 h-14 md:h-20");
            } else {
                headerSize !== "py-4 h-20 md:h-28" && setHeaderSize("py-4 h-20 md:h-28");
            }
        };

        window.addEventListener("scroll", scrollFunction);

        return () => {
            window.removeEventListener("scroll", scrollFunction);
        };
    });
    return (
        <header id='header' className='flex w-full justify-center bg-white'>
            <div className={`flex w-full max-w-[1120px] items-center justify-between bg-white px-4 ${headerSize} transition-all`}>
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
