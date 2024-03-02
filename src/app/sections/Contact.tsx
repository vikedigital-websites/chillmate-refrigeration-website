import React from "react";
import AnchorMagnet from "../components/AnchorMagnet";
import SectionHeading from "../components/SectionHeading";
import Image from "next/image";
import EnquireForm from "../components/EnquireForm";

type Props = {};

const Contact = (props: Props) => {
    return (
        <section id='contact-section' className='relative flex w-full flex-col items-center gap-8 rounded-2xl  bg-primary p-8 text-white drop-shadow-md md:p-16 lg:gap-16'>
            <AnchorMagnet sectionId='contact' />
            <SectionHeading theme='light'>Contact Us</SectionHeading>

            <div className='grid grid-rows-[1fr-min-content] gap-8 lg:grid-cols-2 lg:grid-rows-1 lg:gap-16'>
                <div id='locations-left' className=' rounded-xl'>
                    <EnquireForm />
                </div>
                <div id='locations-right' className='flex flex-col gap-4 lg:justify-center lg:gap-16 '>
                    <div>
                        <h3>Trading Hours</h3>
                        <p>Monday - Friday : 7am - 3pm</p>
                        <p>After hours emergency services</p>
                    </div>
                    <div>
                        <h3>Call Us</h3>
                        <p>
                            Call Dylan on{" "}
                            <a href='tel:0422407129' className='underline'>
                                0422407129
                            </a>
                        </p>
                    </div>
                    <div>
                        <h3>Location</h3>
                        <p>
                            Situated in Burleigh Waters, QLD, we extend our services to neighbouring suburbs within a 15km radius. Explore the list of serviced suburbs{" "}
                            <a href='#locations' className='underline'>
                                here
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
