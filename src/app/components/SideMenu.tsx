import React, { useState } from "react";

import { IoCloseOutline as CloseIcon } from "react-icons/io5";
import Image from "next/image";

type Props = {
    close: () => void;
    logo: any;
    navItems: { label: string; href: string }[];
};

const SideMenu = ({ close, logo, navItems }: Props) => {
    const [slideAnimation, setSlideAnimation] = useState<"animate-slideInRight" | "animate-slideOutRight">("animate-slideInRight");
    const [opacityAnimation, setOpacityAnimation] = useState<"animate-opacityShow" | "animate-opacityHide">("animate-opacityShow");
    const initiateClose = () => {
        setOpacityAnimation("animate-opacityHide");
        setSlideAnimation("animate-slideOutRight");
    };
    const onAnimationEnd = () => {
        if (slideAnimation === "animate-slideInRight") return;
        close();
    };
    console.log(navItems);

    const generateNavItems = navItems.map((items, index) => {
        return (
            <a key={index} href={items.href} onClick={initiateClose}>
                {items.label}
            </a>
        );
    });
    return (
        <div className='fixed inset-0 z-50'>
            <div className={`${opacityAnimation} absolute inset-0 backdrop-blur-lg`} onClick={initiateClose}></div>
            <nav
                className={`${slideAnimation} absolute bottom-0 right-0 top-0 my-4 flex max-w-[60%] flex-col gap-4 rounded-l-lg bg-white py-4 pl-8 pr-4 drop-shadow-md [&>a]:flex [&>a]:border-b-2 [&>a]:pb-2`}
                onAnimationEnd={onAnimationEnd}>
                <Image src={logo} alt='logo' width={0} height={0} id='logo' className='h-auto w-full' priority></Image>
                <div className='absolute left-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary p-1 text-white ring-4 ring-white' onClick={initiateClose}>
                    <CloseIcon size={"100%"} className='animate-pulse' />
                </div>
                {generateNavItems}
            </nav>
        </div>
    );
};

export default SideMenu;
