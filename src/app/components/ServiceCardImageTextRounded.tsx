import Image, { StaticImageData } from "next/image";
import React from "react";
import PillButton from "./PillButton";
import { IconType } from "react-icons";

type Props = {
    img: StaticImageData;
    title: string;
    description: string;
    IconElement: IconType;
};

function ServiceCardImageTextRounded({ img, title, description, IconElement, ...restProps }: Props & React.ComponentPropsWithoutRef<"div">) {
    return (
        <div className='relative rounded-xl' {...restProps} style={{ backgroundImage: `linear-gradient(90deg, rgba(49,78,102,90) 0%, rgba(49,78,102,0.80) 100%), url('${img.src}'); `, backgroundPosition: "right center" }}>
            <div className='absolute right-0 top-0  h-16 w-16 -translate-y-1/2 rounded-full bg-primary p-4 ring-8 ring-white'>
                <IconElement className='h-full w-full text-white' />
            </div>
            <div className='flex flex-col gap-4 p-6 text-white'>
                <h3>{title}</h3>
                <p className='text-sm font-light'>{description}</p>
            </div>
        </div>
    );
}

// function ServiceCardImageTextRounded({ img, title, description, openDetails, ...restProps }: Props & React.ComponentPropsWithoutRef<"div">) {
//     return (
//         <div className='grid grid-rows-[1fr_1fr_min-content] overflow-hidden rounded-xl bg-primary drop-shadow-md' {...restProps}>
//             <div className='' style={{ backgroundImage: `url('${img.src}'); `, backgroundPosition: "right center" }}></div>
//             <div className='flex flex-col gap-4 p-6 text-white'>
//                 <h3>{title}</h3>
//                 <p className='text-sm font-light'>{description}</p>
//             </div>
//             <div className='flex justify-end p-4'>
//                 <button className='text-white hover:scale-110' onClick={openDetails}>
//                     Details ›
//                 </button>
//             </div>
//         </div>
//     );
// }

export default ServiceCardImageTextRounded;
