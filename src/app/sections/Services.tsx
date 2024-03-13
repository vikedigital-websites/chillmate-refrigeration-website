import React, { useRef } from "react";
import ServiceCardImageTextRounded from "../components/ServiceCardImageTextRounded";
import SectionHeading from "../components/SectionHeading";
import maintenanceImg from "../assets/maintenance.webp";
import installationImg from "../assets/installation.webp";
import repairImage from "../assets/repair.webp";
import AnchorMagnet from "../components/AnchorMagnet";
import ServiceDetailModal from "../components/ServiceDetailModal";
import { GrHostMaintenance as MaintenanceIcon } from "react-icons/gr";
import { RiToolsFill as RepairIcon } from "react-icons/ri";
import { GiDrill as installationIcon } from "react-icons/gi";

type Props = {};

const Services = (props: Props) => {
    const dialogMaintenance = useRef<HTMLDialogElement>(null);
    const dialogInstallation = useRef<HTMLDialogElement>(null);
    const dialogRepair = useRef<HTMLDialogElement>(null);

    const openDetailsDialog = (ref: React.RefObject<HTMLDialogElement>) => {
        if (!ref.current) return;
        ref.current.hasAttribute("open") ? ref.current.close() : ref.current.showModal();
    };

    return (
        <>
            <section id='services-section' className='relative flex w-full flex-col items-center gap-16'>
                <AnchorMagnet sectionId='services' />
                <SectionHeading>Our Services</SectionHeading>
                <div className='grid w-full grid-rows-3 gap-8 md:grid-cols-3 md:grid-rows-1'>
                    <ServiceCardImageTextRounded
                        id='service-maintenance'
                        img={maintenanceImg}
                        title='Maintenance'
                        description='Scheduled maintenance programs to ensure the optimal performance and longevity of refrigeration equipment.'
                        IconElement={MaintenanceIcon}
                    />
                    <ServiceCardImageTextRounded
                        id='service-installation'
                        img={installationImg}
                        title='Installation'
                        description='Professional installation of commercial refrigeration systems including cool rooms.'
                        IconElement={installationIcon}
                    />
                    <ServiceCardImageTextRounded
                        id='service-repair'
                        img={repairImage}
                        title='Repair'
                        description='Prompt and reliable repair services for malfunctioning or broken refrigeration units, including diagnosis, troubleshooting, and fixing issues.'
                        IconElement={RepairIcon}
                    />
                </div>
            </section>
        </>
    );
};

Services.displayName = "Services";

export default Services;
