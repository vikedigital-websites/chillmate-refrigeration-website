"use client";
import React, { ComponentPropsWithRef, ComponentPropsWithoutRef, ForwardedRef, HTMLInputTypeAttribute, InputHTMLAttributes, LabelHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, forwardRef, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = {};

export const Input = forwardRef(({ ...props }: InputHTMLAttributes<HTMLInputElement>, ref: ForwardedRef<HTMLInputElement | null>) => {
    return <input ref={ref} type='text' {...props} />;
});
Input.displayName = "Input";

export const Label = forwardRef(({ children, ...props }: LabelHTMLAttributes<HTMLLabelElement>, ref: ForwardedRef<HTMLLabelElement | null>) => {
    return (
        <label {...props} ref={ref}>
            {children}
        </label>
    );
});
Label.displayName = "Label";

export const Select = forwardRef(({ children, ...props }: SelectHTMLAttributes<HTMLSelectElement>, ref: ForwardedRef<HTMLSelectElement | null>) => {
    return (
        <select {...props} ref={ref}>
            {children}
        </select>
    );
});
Select.displayName = "Select";

export const TextArea = forwardRef(({ children, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>, ref: ForwardedRef<HTMLTextAreaElement | null>) => {
    return <textarea {...props} ref={ref}></textarea>;
});
TextArea.displayName = "TextArea";

export const FormInputWithLabel = forwardRef(({ children, id, label, ...props }: ComponentPropsWithRef<"input"> & { label: string }, ref) => {
    const [isFocused, setFocus] = useState(false);
    const InputRef = useRef<HTMLInputElement | null>(null);
    return (
        <div className='relative w-full rounded-lg bg-white/75'>
            <Label htmlFor={id} className={`absolute z-10 origin-top-left transition-all  ${isFocused ? "bottom-full pb-0 pl-3 text-xs text-white " : "p-3 text-sm text-primary"} `}>
                {label}
            </Label>
            <Input
                id={id}
                ref={InputRef}
                {...props}
                onFocus={() => setFocus(true)}
                onBlur={() => InputRef.current?.value === "" && setFocus(false)}
                className='relative z-20 w-full rounded-lg bg-white/0 p-3 text-sm text-black outline-none'
            />
        </div>
    );
});
FormInputWithLabel.displayName = "FormInputWithLabel";

export const FormTextAreaWithLabel = forwardRef(({ children, id, label, ...props }: ComponentPropsWithRef<"textarea"> & { label: string }, ref) => {
    const [isFocused, setFocus] = useState(false);
    const InputRef = useRef<HTMLTextAreaElement | null>(null);
    return (
        <div className='relative w-full rounded-lg bg-white/75'>
            <Label htmlFor={id} className={`absolute z-10 origin-top-left transition-all  ${isFocused ? "bottom-full pb-0 pl-3 text-xs text-white " : "p-3 text-sm text-primary"} `}>
                {label}
            </Label>
            <TextArea
                ref={InputRef}
                id={id}
                {...props}
                onFocus={() => setFocus(true)}
                onBlur={() => InputRef.current?.value === "" && setFocus(false)}
                className='relative z-20 max-h-48 min-h-48 w-full rounded-lg bg-white/0 p-3 text-sm text-black outline-none'
            />
        </div>
    );
});
FormTextAreaWithLabel.displayName = "FormTextAreaWithLabel";

export const FormSelectWithLabel = forwardRef(({ children, id, label, options, ...props }: ComponentPropsWithRef<"select"> & { label: string; options: string[] }, ref) => {
    const [isFocused, setFocus] = useState(false);
    const [showManualInput, setShowManualInput] = useState(false);
    const InputRef = useRef<HTMLSelectElement | null>(null);

    return (
        <>
            <div className='bg-light relative w-full rounded-lg'>
                <Label htmlFor={id} className={`absolute z-10 origin-top-left transition-all  ${isFocused ? "bottom-full pb-0 pl-3 text-xs text-white " : "p-3 text-sm text-primary"} `}>
                    {label}
                </Label>
                <Select
                    ref={InputRef}
                    {...props}
                    id={id}
                    onChange={() => (InputRef.current?.value === "Other" ? setShowManualInput(true) : setShowManualInput(false))}
                    onFocus={() => setFocus(true)}
                    onBlur={() => InputRef.current?.value === "" && setFocus(false)}
                    className='bg-light/0 relative z-20 w-full rounded-lg p-3 text-sm text-black outline-none'>
                    <option className='hidden'></option>
                    {options.map((option, index) => {
                        return <option key={index}>{option}</option>;
                    })}
                </Select>
            </div>
            {showManualInput && <FormInputWithLabel label='Enter Company Type' />}
        </>
    );
});
FormSelectWithLabel.displayName = "FormSelectWithLabel";

const Form = ({ children, className, ...props }: ComponentPropsWithRef<"form">) => {
    return (
        <form className={twMerge("flex flex-col items-center justify-center gap-6 [&_*]:text-base", className)} {...props}>
            {children}
        </form>
    );
};
Form.displayName = "Form";

export default Form;
