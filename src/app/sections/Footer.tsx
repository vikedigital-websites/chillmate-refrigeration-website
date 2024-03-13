import React from "react";
import logo from "../assets/logo-white.svg";
import Image from "next/image";
import { GetStaticProps, InferGetStaticPropsType } from "next";

type Props = {};

const Footer = () => {
    return (
        <footer id='footer-section' className='mt-64 flex w-full flex-col justify-center bg-primary p-16 text-white'>
            <div className='cl:flex-col flex w-full flex-col items-center justify-between text-center lg:max-h-[500px] lg:flex-wrap  lg:items-start lg:text-start xl:max-h-[400px] 2xl:max-h-[450px] [&>*]:pb-8 [&_h3]:text-base [&_h3]:font-bold [&_li]:list-["›_"] [&_ul]:list-inside lg:[&_ul]:list-disc'>
                <div className='hidden max-w-3xl flex-col gap-16 2xl:flex'>
                    <Image src={logo} alt='Chillmate Logo' width={0} height={0} id='logo' className='h-auto w-full max-w-lg' priority></Image>
                    <p>
                        At ChillMate, we take pride in our specialization in comprehensive services, which encompass maintenance, installations, and repairs. With over 8 years of industry expertise under our belt, you can trust us to keep
                        your systems in optimal condition, ensuring reliable performance year-round. Moreover, we prioritize safety and compliance by holding all the necessary licenses, providing our customers with peace of mind and
                        assurance of quality service.
                    </p>
                </div>
                <div>
                    <h3>Services</h3>
                    <ul>
                        <li>
                            <a href='#service-maintenance' className='hover:underline'>
                                Commercial Maintenance
                            </a>
                        </li>
                        <li>
                            <a href='service-installation' className='hover:underline'>
                                Commercial Installation
                            </a>
                        </li>
                        <li>
                            <a href='service-repair' className='hover:underline'>
                                Commercial Repair
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>
                            <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`} className='hover:underline'>
                                {process.env.NEXT_PUBLIC_PHONE_NUMBER}
                            </a>
                        </li>
                        <li>
                            <a href='mailto:chillmaterefrigeration@gmail.com' className='hover:underline'>
                                chillmaterefrigeration@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Locations</h3>
                    <ul>
                        <li>Austinville - 4213</li>
                        <li>Benowa - 4217</li>
                        <li>Broadbeach - 4218</li>
                        <li>Australia Fair - 4215</li>
                        <li>Arundel - 4214</li>
                        <li>Elanora - 4221</li>
                        <li>West Burleigh - 4219</li>
                        <li>Clear Island Waters - 4226</li>
                        <li>Reedy Creek - 4227</li>
                        <li>Robina - 4230</li>
                        <li>Tugun - 4224</li>
                        <li>Currumbin - 4223</li>
                        <li>Tweed Heads - 2485</li>
                        <li>Burleigh - 4220</li>
                    </ul>
                </div>
                <div>
                    <h3>Navigation</h3>
                    <ul>
                        <li>
                            <a href='#hero' className='hover:underline'>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href='#services' className='hover:underline'>
                                Services
                            </a>
                        </li>
                        <li>
                            <a href='#locations' className='hover:underline'>
                                Locations
                            </a>
                        </li>
                        <li>
                            <a href='#about' className='hover:underline'>
                                About
                            </a>
                        </li>
                        <li>
                            <a href='#contact' className='hover:underline'>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Trading Hours</h3>
                    <ul>
                        <li>Monday - Friday</li>
                        <li>7am - 3pm</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className='mt-8 flex flex-col items-center justify-center gap-8 text-center'>
                <p>
                    Website designed and developed but{" "}
                    <a href='https://vikedigital.com.au' className='underline'>
                        Vike Digital Pty Ltd
                    </a>
                </p>
                <p>© Copyright 2024 ChillMate Refrigeration. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

Footer.displayName = "Footer";

export default Footer;
