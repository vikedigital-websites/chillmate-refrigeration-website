import React, { ForwardedRef, HTMLAttributes, HTMLInputTypeAttribute, forwardRef, useRef, useState } from "react";
import PillButton from "./PillButton";

type Props = React.ComponentPropsWithoutRef<"form"> & {};

const FormInput = forwardRef(({ id, type, name, autoComplete, onFocus, onBlur, required }: React.ComponentPropsWithoutRef<"input">, ref: ForwardedRef<HTMLInputElement | null>) => {
    return (
        <input
            ref={ref}
            type={type}
            id={id}
            name={name}
            autoComplete={autoComplete}
            required={required}
            className='relative w-full rounded-lg bg-white/75 p-3 text-sm text-black outline-none focus:ring-2 focus:ring-white'
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
});
FormInput.displayName = "FormInput";
const FormTextArea = forwardRef(({ id, name, autoComplete, onFocus, onBlur, required }: React.ComponentPropsWithoutRef<"textarea">, ref: ForwardedRef<HTMLTextAreaElement | null>) => {
    return (
        <textarea
            ref={ref}
            id={id}
            name={name}
            autoComplete={autoComplete}
            required={required}
            className='relative max-h-48 min-h-48  w-full  rounded-lg bg-white/75 p-3 text-sm text-black outline-none focus:ring-2 focus:ring-white'
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
});
FormTextArea.displayName = "FormTextArea";
const FormLabel = forwardRef(({ htmlFor, children, isFocused }: React.ComponentPropsWithoutRef<"label"> & { isFocused: boolean }, ref) => {
    return (
        <label htmlFor={htmlFor} className={`absolute z-10 origin-top-left  ${isFocused ? "bottom-full pb-1 pl-3 text-xs text-white " : "p-3 text-sm text-primary"} `}>
            {children}
        </label>
    );
});
FormLabel.displayName = "FormLabel";

type FormItemProps = {
    inputType: "input" | "textarea";
    label: string;
    name: string;
    id: string;
    className?: string;
    autoComplete?: React.HTMLInputAutoCompleteAttribute;
    type?: React.HTMLInputTypeAttribute;
};

const FormItem = ({ inputType, name, id, autoComplete, type, label, className }: FormItemProps) => {
    const [isFocused, setFocus] = useState(false);
    const InputRef = useRef<HTMLInputElement | null>(null);
    const TextAreaRef = useRef<HTMLTextAreaElement | null>(null);
    return (
        <div className='relative flex w-full'>
            <FormLabel htmlFor={id} isFocused={isFocused}>
                {label}
            </FormLabel>
            {inputType === "input" ? (
                <FormInput ref={InputRef} type={type} id={id} name={name} autoComplete={autoComplete} onFocus={() => setFocus(true)} onBlur={() => InputRef.current?.value === "" && setFocus(false)} />
            ) : (
                <FormTextArea ref={TextAreaRef} id={id} name={name} onFocus={() => setFocus(true)} onBlur={() => TextAreaRef.current?.value === "" && setFocus(false)} />
            )}
        </div>
    );
};
FormItem.displayName = "FormItem";
const EnquireForm = ({ ...rest }: Props) => {
    return (
        <form className='flex flex-col items-center justify-center gap-6'>
            <p className='text-xl'>Enquire Now</p>
            <div className='relative grid w-full  grid-cols-2 gap-4'>
                <FormItem className='input' inputType='input' type='text' id='name' name='name' autoComplete='name' label='Name'></FormItem>
                <FormItem className='input' inputType='input' type='text' id='phone' name='phone' autoComplete='tel-local' label='Phone Number'></FormItem>
            </div>
            <FormItem className='input' inputType='input' type='text' id='email' name='email' autoComplete='email' label='Email'></FormItem>
            <FormItem className='input' inputType='input' type='text' id='suburb' name='suburb' label='Suburb'></FormItem>
            <FormItem className='input' inputType='textarea' id='message' name='message' label='Message'></FormItem>
            <PillButton type='submit'>Send</PillButton>
        </form>
    );
};

EnquireForm.displayName = "EnquireForm";

export default EnquireForm;
