import React from "react";

// import img37 from "../images/ga1.webp";
// import img38 from "../images/ga2.webp";
// import img39 from "../images/ga3.webp";
// import img40 from "../images/ga4.webp";
// import img41 from "../images/ga5.webp";
// import img42 from "../images/ga6.webp";
// import img43 from "../images/ga7.webp";
// import img44 from "../images/ga8.webp";
// import img45 from "../images/ga9.webp";
export default function Home() {
    return (
        <>
            <div className="xl:mx-auto xl:container 2xl:px-20 px-2 py-20">
                <h1 className="text-4xl font-semibold leading-10 text-gray-800 text-center">Our Gallery</h1>
                <div className="flex flex-wrap items-stretch xl:justify-between justify-center mt-16 xl:gap-6 gap-2">
                    <div className="lg:w-96 w-80">
                        <img   src='/images/ga1.webp' className="h-72 w-full object-cover object-center rounded-t-md" alt="woman smiling" />
                      
                    </div>
                    <div className="lg:w-96 w-80">
                    <img   src='/images/ga2.webp' className="h-72 w-full object-cover object-center rounded-t-md" alt="woman in black dress" />
                       
                       
                    </div>
                    <div className="lg:w-96 w-80">
                        <img   src='/images/ga3.webp' className="h-72 w-full object-cover object-center rounded-t-md" alt="woman in black dress" />
                       
                    </div>
                    <div className="lg:w-96 w-80">
                        <img  src='/images/ga4.webp' className="h-72 w-full object-cover object-center rounded-t-md" alt="woman smiling" />
                      
                    </div>
                    <div className="lg:w-96 w-80">
                        <img   src='/images/ga5.webp' className="h-72 w-full object-cover object-center rounded-t-md" alt="woman smiling" />
                       
                    </div>
                    <div className="lg:w-96 w-80">
                        <img   src='/images/ga6.webp' className="h-72 w-full object-cover object-center rounded-t-md" alt="woman smiling" />
                   
                    </div>
                    <div className="lg:w-96 w-80">
                        <img   src='/images/ga7.webp' className="h-72 w-full object-cover object-center rounded-t-md" alt="woman smiling" />
                   
                    </div>
                    <div className="lg:w-96 w-80">
                        <img   src='/images/ga8.webp' className="h-72 w-full object-cover object-center rounded-t-md" alt="woman smiling" />
                   
                    </div>
                    <div className="lg:w-96 w-80">
                        <img   src='/images/ga9.webp' className="h-72 w-full object-cover object-center rounded-t-md" alt="woman smiling" />
                   
                    </div>
                </div>
            </div>
        </>
    );
}
