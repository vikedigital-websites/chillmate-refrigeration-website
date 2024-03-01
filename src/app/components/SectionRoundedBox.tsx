import React from "react";

type Props = {
  children: any;
};

const SectionRoundedBox = ({ children }: Props) => {
  return <section className='w-full rounded-xl bg-primary p-8 text-white drop-shadow-md'>{children} </section>;
};

export default SectionRoundedBox;
