import React, { ForwardedRef, HTMLAttributes, HTMLInputTypeAttribute, forwardRef, useRef, useState } from "react";
import PillButton from "./PillButton";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Form, { FormInputWithLabel, FormTextAreaWithLabel } from "./Form";

type Props = React.ComponentPropsWithoutRef<"form"> & {};

const EnquireForm = ({ uid }: { uid: string }) => {
    return (
        <Form action='https://formsubmit.co/f04c55a590ccd5dfc86262c7a9c11fa7' method='POST'>
            <input type='hidden' name='_next' value='https://chillmaterefrigeration.com/thanks/'></input>
            <input type='hidden' name='_captcha' value='false'></input>
            <input type='hidden' name='_template' value='table'></input>
            <input type='text' name='_honey' style={{ display: "none" }}></input>
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
            <FormInputWithLabel label='Phone' required type='tel' pattern='^(?:\(?(?:0[2378]\d{1}|13\d{1}|1800|1900)\)?[\s-]?\d{4}[\s-]?\d{4}|\(?(?:04|\+614)(?:[ ]?\d){8}\)?)$' id={`phone-${uid}`} name='phone' autoComplete='tel-local' />

            <FormTextAreaWithLabel label='Message' required id={`message-${uid}`} name='message' />
            <PillButton type='submit'>Send</PillButton>
        </Form>
    );
};

EnquireForm.displayName = "EnquireForm";

export default EnquireForm;
