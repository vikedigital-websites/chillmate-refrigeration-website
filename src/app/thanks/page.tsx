"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import heroImage from "../assets/hero-image.webp";
import Link from "next/link";

type Props = {};

function ThanksPage({}: Props) {
    const [count, setCount] = useState(3);
    const router = useRouter();

    useEffect(() => {
        const timer = setInterval(() => {
            if (count > 0) {
                setCount(count - 1);
            } else {
                // Perform the action after countdown completes
                clearInterval(timer); // Clear the interval when countdown is done
                // Replace the following with your desired action/function call
                router.push("/");
            }
        }, 1000);

        return () => {
            clearInterval(timer); // Clean up the interval on component unmount
        };
    }, [count, router]);
    return (
        <>
            <div className='flex h-[100svh] items-center'>
                <section
                    id='hero-section'
                    className='relative flex w-full max-w-[1120px] gap-8 rounded-2xl bg-primary bg-cover px-8 py-16 text-white md:px-28'
                    style={{ backgroundImage: `linear-gradient(90deg, rgba(49,78,102,95) 0%, rgba(49,78,102,95) 35%, rgba(49,78,102,0.80) 100%), url('${heroImage.src}') `, backgroundPosition: "right center" }}>
                    <div className='flex flex-col gap-8'>
                        <h1 className='text-2xl'>Your message has been successfully submitted to the Chillmate team</h1>
                        <p className='text-3xl'>You will be redirected in {count} </p>
                        <p>
                            If you are not redirected click{" "}
                            <Link href='/' className='underline'>
                                here
                            </Link>{" "}
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}

function page({}: Props) {
    return <ThanksPage />;
}

export default page;
