import React from "react";
// import img12 from "../../images/Bike.jpg";


const BikeTransportation = () => {
    return (
        <>
            <div className='2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4'>
                <div className='flex flex-col lg:flex-row justify-between gap-8'>
                    <div className='w-full lg:w-5/12 flex flex-col justify-center'>
                        <h1 className='text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4'>Bike Services</h1>

                        <p className='font-normal text-base leading-6 text-gray-600 pb-8'>
                            Motorcycles are treated as a single vehicle mode, but their safety is often considered in isolation. As with all modes of
                            transport, motorcycle traffic flow effects, driving cycles and rider mode choice behaviors have been neglected for
                            motorcyclists. The standard transportation issues of traffic flow effects and economic evaluation have been largely
                            neglected for motorcycles. A survey of existing and new Australian data was undertaken to assess crash data, crash
                            modeling techniques and geographic information system integration.
                        </p>
                        <h1 className='text-2xl lg:text-3xl font-bold leading-9 text-gray-800 pb-4'>Quality of Bike Services</h1>
                        <p className='font-normal text-base leading-6 text-gray-600 pb-8'>
                            We at NewOm Packers and Movers in Gorakhpur understand that you might be worried about the thought of putting such an
                            expensive investment in the hands of someone else to protect and transport. That's why we have put together a team of
                            experts who are constantly working on improving their skill sets through various training programs, keeping pace with
                            technology and ensuring that we have enough time-tested experience, knowledge and capabilities to ship any vehicle. So if
                            you are looking for the best car shipping company in Gorakhpur then let us help you out!
                        </p>
                    </div>
                    <div className='w-full lg:w-8/12 '>
                        <img className='w-full h-full rounded' src='/images/Bike.jpg' alt='Bike' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BikeTransportation;
