import React from "react";
import AnchorMagnet from "../components/AnchorMagnet";
import SectionHeading from "../components/SectionHeading";
import Image from "next/image";
import locationMap from "../assets/location-map.webp";

type Props = {};

const Locations = (props: Props) => {
    return (
        <div id='locations' className='relative flex w-full flex-col items-center gap-8 rounded-2xl bg-primary p-8 text-white drop-shadow-md md:p-16'>
            <AnchorMagnet sectionId='locations' />
            <SectionHeading theme='light'>Areas We Cover</SectionHeading>
            <div className='flex flex-col items-center gap-4'>
                <h3>Based in Burleigh Waters QLD</h3>
                <p className='max-w-lg text-center font-light'>{`Can't find your suburb listed, but you're nearby? Feel free to give us a call and see if we can assist you.`}</p>
            </div>

            <div className='grid grid-rows-[1fr-min-content] gap-8 lg:grid-cols-2 lg:grid-rows-1'>
                <div id='locations-left' className='overflow-hidden rounded-xl'>
                    <Image src={locationMap} alt='locations map' width={0} height={0} id='logo' className='h-auto w-full' priority></Image>
                </div>
                <div id='locations-right' className='grid grid-rows-2 items-center gap-4 lg:grid-cols-2 lg:grid-rows-1 md:[&>ul>li]:list-inside md:[&>ul>li]:list-disc'>
                    <ul id='locations-list-one' className=' flex flex-col gap-4 text-center md:gap-8 lg:text-start'>
                        <li>Austinville - 4213</li>
                        <li>Benowa - 4217</li>
                        <li>Broadbeach - 4218</li>
                        <li>Australia Fair - 4215</li>
                        <li>Arundel - 4214</li>
                        <li>Elanora - 4221</li>
                        <li>West Burleigh - 4219</li>
                    </ul>
                    <ul id='locations-list-two' className=' flex flex-col gap-4 text-center md:gap-8 lg:text-start'>
                        <li>Clear Island Waters - 4226</li>
                        <li>Reedy Creek - 4227</li>
                        <li>Robina - 4230</li>
                        <li>Tugun - 4224</li>
                        <li>Currumbin - 4223</li>
                        <li>Tweed Heads - 2485</li>
                        <li>Burleigh - 4220</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Locations;
