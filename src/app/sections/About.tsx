import React from "react";
import AnchorMagnet from "../components/AnchorMagnet";
import SectionHeading from "../components/SectionHeading";
import palceholderImg from "../assets/placeholder-headshot.jpg";
import Image from "next/image";
import ARCTickLogo from "../assets/ARCTick-Logo-.webp";

type Props = {};

const About = (props: Props) => {
    return (
        <section id='about-section' className='relative flex w-full flex-col items-center gap-16'>
            <AnchorMagnet sectionId='about' />
            <SectionHeading>About Us</SectionHeading>
            <div className='flex flex-col gap-16 lg:flex-row'>
                <Image src={palceholderImg} alt='' width={0} height={0} id='logo' className='h-auto w-full rounded-xl' priority></Image>
                <div className='flex flex-col justify-between gap-16'>
                    <p className='text-center leading-loose md:text-start'>
                        At ChillMate, we take pride in our specialization in comprehensive services, which encompass maintenance, installations, and repairs. With over 8 years of industry expertise under our belt, you can trust us to keep
                        your systems in optimal condition, ensuring reliable performance year-round. Moreover, we prioritize safety and compliance by holding all the necessary licenses, providing our customers with peace of mind and
                        assurance of quality service.
                    </p>
                    <div className='flex w-full justify-center'>
                        <div className='max-w-md'>
                            <Image src={ARCTickLogo} alt='ARCTick Logo' width={0} height={0} id='logo' className=' h-auto w-full  md:h-auto md:w-auto' priority></Image>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
