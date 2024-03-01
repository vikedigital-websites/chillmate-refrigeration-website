import Image from "next/image";
import React from "react";

type Props = {
    img: any;
    title: string;
    description: string;
};

const ServiceCardImageTextRounded = ({ img, title, description }: Props) => {
    return (
        <div className='grid grid-rows-[1fr_1fr_min-content] overflow-hidden rounded-xl bg-primary drop-shadow-md'>
            <div className='' style={{ backgroundImage: `url('${img.src}'); `, backgroundPosition: "right center" }}></div>
            <div className='flex flex-col gap-4 p-6 text-white'>
                <h3>{title}</h3>
                <p className='text-sm font-light'>{description}</p>
            </div>
            <div className='flex justify-end p-4'>
                <button className='text-white'>Details ›</button>
            </div>
        </div>
    );
};

export default ServiceCardImageTextRounded;
