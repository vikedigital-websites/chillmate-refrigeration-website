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
                        <h3>Get In Touch</h3>
                        <ul className='mt-4 space-y-4 text-sm '>
                            <li>
                                <a className='flex items-center   gap-1.5 ltr:sm:justify-start rtl:sm:justify-end' href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
                                    <svg xmlns='http://www.w3.org/2000/svg' className='size-5 shrink-0 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                                        <path strokeLinecap='round' strokeLinejoin='round' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                                    </svg>

                                    <span className='flex-1 text-white'>{process.env.NEXT_PUBLIC_EMAIL}</span>
                                </a>
                            </li>

                            <li>
                                <a className='flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end' href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}>
                                    <svg xmlns='http://www.w3.org/2000/svg' className='size-5 shrink-0 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                                        />
                                    </svg>

                                    <span className='flex-1 text-white'>{process.env.NEXT_PUBLIC_PHONE_NUMBER}</span>
                                </a>
                            </li>
                        </ul>
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
                    <EnquireForm uid='contact' />
                </div>
            </div>
        </section>
    );
};

Contact.displayName = "Contact";

export default Contact;
