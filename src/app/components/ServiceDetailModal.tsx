import React, { Children, ForwardedRef, forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import PillButton from "./PillButton";

type Props = {
    toggleOpen: (ref: React.RefObject<HTMLDialogElement>) => void;
    title: string;
};

const ServiceDetailModal = forwardRef(({ children, title, toggleOpen, ...restProps }: Props & React.ComponentPropsWithoutRef<"dialog">, outerRef: ForwardedRef<HTMLDialogElement | null>) => {
    const innerRef = useRef<HTMLDialogElement>(null);
    useImperativeHandle(outerRef, () => innerRef.current!, []);
    return (
        <dialog ref={innerRef} {...restProps} className='rounded-xl bg-primary p-8 text-white  drop-shadow-md backdrop:overscroll-contain backdrop:bg-white/75 backdrop:backdrop-blur-sm md:p-16 lg:max-w-[75%]'>
            <div className='flex flex-col gap-8 '>
                <h3>{title}</h3>
                {children}
                <div className='flex justify-end'>
                    <PillButton onClick={() => toggleOpen(innerRef)}>Close</PillButton>
                </div>
            </div>
        </dialog>
    );
});

export default ServiceDetailModal;
