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

            <div className='m-w-full flex flex-col gap-16 md:grid md:grid-cols-[1fr_2fr]'>
                <Image src={palceholderImg} alt='' width={0} height={0} id='logo' className='hidden h-auto w-full rounded-xl object-scale-down md:block' priority />
                <div className='flex flex-col gap-8'>
                    <SectionHeading>About Us</SectionHeading>
                    <p className=''>
                        At ChillMate, we boast 8 years of expertise in comprehensive refrigeration services, including maintenance, installations, and repairs. Our commitment to excellence is evident through strict adherence to industry
                        regulations, ensuring safety and compliance with all necessary licenses. Our tailored solutions prioritize optimal system performance year-round. Beyond technical proficiency, our dedication extends to genuine
                        customer satisfaction and equipment longevity. With ChillMate, expect efficient, reliable, and compliant service that meets the highest standards. Trust us to handle your refrigeration needs with expertise and
                        excellence, providing peace of mind every step of the way.
                    </p>
                    {/* <p>
                        At ChillMate, we pride ourselves on our 8 years of expertise in delivering comprehensive refrigeration services. From meticulous maintenance routines to precise installations and prompt repairs, we tailor our
                        solutions to ensure optimal system performance year-round. Our commitment to excellence is underscored by our strict adherence to industry regulations, holding all necessary licenses to prioritize safety and
                        compliance. Whether for commercial enterprises or residential clients, our focus remains unwavering: to provide reliable service that instills confidence and peace of mind.
                    </p>
                    <p>
                        Moreover, at ChillMate, our dedication to quality extends beyond technical proficiency. It encompasses a genuine concern for customer satisfaction and the longevity of your equipment. By entrusting your refrigeration
                        needs to us, you're choosing a partner committed to delivering efficient, reliable, and compliant solutions that meet the highest standards. With ChillMate, rest assured your systems are in capable hands, where
                        expertise meets excellence, ensuring your peace of mind every step of the way.
                    </p> */}
                    <div className='flex max-h-24 w-full justify-end'>
                        <Image src={ARCTickLogo} alt='ARCTick Logo' width={0} height={0} id='logo' className='object-scale-down' priority></Image>
                    </div>
                </div>
            </div>
        </section>
    );
};

About.displayName = "About";

export default About;
