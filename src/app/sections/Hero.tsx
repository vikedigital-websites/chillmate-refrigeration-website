import React from "react";
import SectionRoundedBox from "../components/SectionRoundedBox";
import PillButton from "../components/PillButton";
import EnquireForm from "../components/EnquireForm";
import heroImage from "../assets/hero-image.webp";
import AnchorMagnet from "../components/AnchorMagnet";

type Props = {};

const Hero = (props: Props) => {
    return (
        <section
            id='hero-section'
            className='relative flex w-full gap-8 rounded-2xl bg-primary bg-cover px-8 py-16 text-white md:px-28 lg:grid lg:grid-cols-[1.1fr_0.90fr]'
            style={{ backgroundImage: `linear-gradient(90deg, rgba(49,78,102,95) 0%, rgba(49,78,102,95) 35%, rgba(49,78,102,0.80) 100%), url('${heroImage.src}') `, backgroundPosition: "right center" }}>
            <AnchorMagnet sectionId='hero' />
            <div id='hero' className='flex flex-col content-start items-center justify-center gap-8 sm:items-start'>
                <h1 className='font text-center font-bold leading-relaxed tracking-wider sm:text-left'>Chill Out With Expert Refrigeration Solutions</h1>
                <p className='text-center text-sm font-light leading-relaxed sm:text-left lg:mr-28'>
                    When it comes to refrigeration solutions, we offer fast, reliable, and affordable services you can depend on. Count on us to maximize efficiency and minimize downtime.
                </p>
                <PillButton onClick={() => (location.href = "#contact")}>Contact Us Now</PillButton>
            </div>
            <div id='her-right' className='hidden lg:block'>
                <EnquireForm uid='hero' />
            </div>
        </section>
    );
};
Hero.displayName = "Hero";

export default Hero;
