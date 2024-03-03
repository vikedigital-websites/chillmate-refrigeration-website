import React from "react";
import logo from "../assets/logo-white.svg";
import Image from "next/image";
import { GetStaticProps, InferGetStaticPropsType } from "next";

type Props = {};

const Footer = () => {
    return (
        <footer id='footer-section' className='mt-64 flex w-full justify-center bg-primary px-4 text-white xl:p-16'>
            <div className='cl:flex-col flex w-full flex-col items-center justify-between p-6 text-center lg:max-h-[500px] lg:flex-wrap  lg:items-start lg:text-start xl:max-h-[400px] 2xl:max-h-[400px] [&>*]:pb-8 [&_ul]:list-inside lg:[&_ul]:list-disc'>
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
                        <li>Commercial Maintenance</li>
                        <li>Commercial Installation</li>
                        <li>Commercial Repair</li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>
                            <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}>{process.env.NEXT_PUBLIC_PHONE_NUMBER}</a>
                        </li>
                        <li> chillmaterefrigeration@gmail.com</li>
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
                            <a href='#home'>Home</a>
                        </li>
                        <li>
                            <a href='#services'>Services</a>
                        </li>
                        <li>
                            <a href='#locations'>Locations</a>
                        </li>
                        <li>
                            <a href='#about'>About</a>
                        </li>
                        <li>
                            <a href='#contact'>Contact</a>
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
        </footer>
    );
};

export default Footer;
