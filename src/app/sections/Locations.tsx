import React from "react";
import AnchorMagnet from "../components/AnchorMagnet";
import SectionHeading from "../components/SectionHeading";
import Image from "next/image";
import locationMap from "../assets/location-map.webp";

type Props = {};

const Locations = (props: Props) => {
    return (
        <section id='locations-section' className='relative flex w-full flex-col items-center gap-8 rounded-2xl bg-primary p-8 text-white drop-shadow-md md:p-16'>
            <AnchorMagnet sectionId='locations' />

            <div className='grid grid-rows-[1fr-min-content] gap-8 lg:grid-cols-2 lg:grid-rows-1'>
                <div id='locations-lef' className='t flex flex-col justify-between gap-4'>
                    <SectionHeading theme='light'>Areas We Cover</SectionHeading>

                    <h3 className='text-base capitalize'>Based in Burleigh Waters QLD</h3>

                    <div className='grid grid-cols-[max-content_max-content] grid-rows-1 justify-between gap-2 [&>ul>li]:list-inside [&>ul>li]:list-disc [&>ul>li]:text-base'>
                        <ul id='locations-list-one' className=' flex flex-col gap-4 md:gap-4 lg:text-start'>
                            <li>
                                Austinville <span className='hidden md:inline'> - 4213</span>
                            </li>
                            <li>
                                Benowa <span className='hidden md:inline'>- 4217</span>
                            </li>
                            <li>
                                Broadbeach <span className='hidden md:inline'>- 4218</span>
                            </li>
                            <li>
                                Australia Fair <span className='hidden md:inline'>- 4215</span>
                            </li>
                            <li>
                                Arundel <span className='hidden md:inline'>- 4214</span>
                            </li>
                            <li>
                                Elanora <span className='hidden md:inline'>- 4221</span>
                            </li>
                            <li>
                                West Burleigh <span className='hidden md:inline'>- 4219</span>
                            </li>
                        </ul>
                        <ul id='locations-list-two' className=' flex flex-col gap-4  md:gap-4 lg:text-start'>
                            <li>
                                Clear Island Waters <span className='hidden md:inline'>- 4226</span>
                            </li>
                            <li>
                                Reedy Creek <span className='hidden md:inline'>- 4227</span>
                            </li>
                            <li>
                                Robina <span className='hidden md:inline'>- 4230</span>
                            </li>
                            <li>
                                Tugun <span className='hidden md:inline'>- 4224</span>
                            </li>
                            <li>
                                Currumbin <span className='hidden md:inline'>- 4223</span>
                            </li>
                            <li>
                                Tweed Heads <span className='hidden md:inline'>- 2485</span>
                            </li>
                            <li>
                                Burleigh<span className='hidden md:inline'> - 4220</span>
                            </li>
                        </ul>
                    </div>
                    <p className='ont-light'>{`Can't find your suburb listed, but you're nearby? Feel free to give us a call and see if we can assist you.`}</p>
                </div>
                <div id='locations-right' className='overflow-hidden rounded-xl'>
                    <Image src={locationMap} alt='locations map' width={0} height={0} id='logo' className='h-full w-full object-cover' priority></Image>
                </div>
            </div>
        </section>
    );
};

Locations.displayName = "Locations";

export default Locations;
