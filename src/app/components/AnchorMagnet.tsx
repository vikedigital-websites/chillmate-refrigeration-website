import React from "react";

type Props = {
    sectionId: string;
};

const AnchorMagnet = ({ sectionId }: Props) => {
    return <div id={`${sectionId}`} className='absolute bottom-full h-28 w-full md:h-40' />;
};

AnchorMagnet.displayName = "AnchorMagnet";

export default AnchorMagnet;
