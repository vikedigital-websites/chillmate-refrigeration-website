import React, { ForwardedRef, HTMLAttributes, HTMLInputTypeAttribute, forwardRef, useRef, useState } from "react";
import PillButton from "./PillButton";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Form, { FormInputWithLabel, FormTextAreaWithLabel } from "./Form";
import useUserTimeZone from "@/hooks/useUserTimeZone";

type Props = React.ComponentPropsWithoutRef<"form"> & {};

const EnquireForm = ({ uid }: { uid: string }) => {
    const userTimeZone = useUserTimeZone();
    return (
        <Form action='https://formsubmit.co/def2d41314d442c73c1530281cfcaa1b' method='POST'>
            <input type='hidden' name='_next' value={`${process.env.NEXT_PUBLIC_BASE_SLUG}thanks/`}></input>
            <input type='hidden' name='_captcha' value='true'></input>
            <input type='hidden' name='_template' value='table'></input>
            <input type='text' name='_honey' style={{ display: "none" }}></input>
            <input type='hidden' name='user-timezone_(may-be-spam-if-not-australia)' readOnly value={userTimeZone || "null"}></input>
            <input
                type='hidden'
                name='_autoresponse'
                value="Hi there! Your message has been successfully submitted to the Chillmate team. We're grateful for your interest and will be in touch shortly if necessary. Have a great day!"></input>
            <input type='hidden' name='_subject' value='Chillmate Website Enquiry'></input>
            <h2 className='text'>Enquire Now</h2>
            <div className='grid w-full gap-6 lg:grid-cols-2'>
                <FormInputWithLabel label='Full Name' required type='text' id={`name-${uid}`} name='full-name' autoComplete='name' />
                <FormInputWithLabel label='Email' required type='email' id={`email-${uid}`} name='email' autoComplete='email' />
            </div>

            <FormInputWithLabel label='Suburb' required type='text' id={`suburb-${uid}`} name='suburb' autoComplete='suburb' />
            <FormInputWithLabel label='Phone' required type='tel' pattern='^(?:(?:\+?61|0)4(?:[ ]?\d){8}|13\d{4}|(?:(?:\+?61\s?)?0?[1-9](?:[ ]?\d){8}))$' id={`phone-${uid}`} name='phone' autoComplete='tel-local' />

            <FormTextAreaWithLabel label='Message' required id={`message-${uid}`} name='message' />
            <PillButton type='submit'>Send</PillButton>
        </Form>
    );
};

EnquireForm.displayName = "EnquireForm";

export default EnquireForm;
