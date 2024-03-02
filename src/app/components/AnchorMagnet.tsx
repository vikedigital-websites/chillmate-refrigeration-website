import React from "react";

type Props = {
    sectionId: string;
};

const AnchorMagnet = ({ sectionId }: Props) => {
    return <div id={`${sectionId}`} className='absolute bottom-full h-20 w-full md:h-28' />;
};

export default AnchorMagnet;
