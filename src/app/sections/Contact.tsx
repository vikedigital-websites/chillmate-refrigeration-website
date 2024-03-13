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

            <div className='grid grid-rows-[1fr-min-content] gap-8 lg:grid-cols-2 lg:grid-rows-1 lg:gap-16'>
                <div id='locations-right' className='flex flex-col gap-8 [&_h3]:text-base  [&_h3]:font-bold'>
                    <SectionHeading theme='light'>Contact Us</SectionHeading>
                    <p>Need refrigeration help? Reach out to ChillMate for expert assistance</p>
                    <div>
                        <h3>Trading Hours</h3>
                        <p>&#8250; Monday - Friday : 7am - 3pm</p>
                        <p>&#8250; After hours emergency services</p>
                    </div>
                    <div>
                        <h3>Get In tough</h3>
                        <p>
                            &#8250; Call Dylan on:{" "}
                            <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`} className='underline'>
                                {process.env.NEXT_PUBLIC_PHONE_NUMBER}
                            </a>
                        </p>
                        <p>
                            &#8250; Email Dylan on:{" "}
                            <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className='underline'>
                                {process.env.NEXT_PUBLIC_EMAIL}
                            </a>
                        </p>
                    </div>
                    <div>
                        <h3>Location</h3>
                        <p>
                            Situated in Burleigh Waters, QLD, we extend our services to neighbouring suburbs within a 15km radius. Explore the list of serviced suburbs&nbsp;
                            <a href='#locations' className='underline'>
                                here
                            </a>
                        </p>
                    </div>
                </div>
                <div id='locations-left' className=' rounded-xl'>
                    <EnquireForm uid='' />
                </div>
            </div>
        </section>
    );
};

Contact.displayName = "Contact";

export default Contact;
