import React, { HTMLAttributes } from "react";

type Props = React.ComponentPropsWithoutRef<"button"> & {};

const PillButton = ({ children, ...rest }: Props) => {
  return (
    <button
      {...rest}
      className='w-max min-w-32 rounded-full bg-white px-6 py-3 text-sm text-primary transition-transform hover:scale-110 hover:drop-shadow-md'>
      {children}
    </button>
  );
};

export default PillButton;
