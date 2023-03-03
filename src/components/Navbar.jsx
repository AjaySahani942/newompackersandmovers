import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";


import { TfiAlignRight, TfiClose } from "react-icons/tfi";


function Navbar() {
    const links = [
        { to: "/", label: "Home" },
        
        { 
            to: "/services",
            label: "Services",
            childRoutes: [ 
                { to: "/services/allservices", label: "All Services"   },
                { to: "/services/relocation", label: "Relocation Services " },
                { to: "/services/office", label: "Office Relocation Services" },
                { to: "/services/car", label: "Car Transportation Services" },
                { to: "/services/bike", label: "Bike Transportation Services" },
                { to: "/services/packing", label: "Packing And Moving Servicess" },
                { to: "/services/loading", label: "Loading And Unloading Services" },
                { to: "/services/machine", label: "Heavy Machine Shifting Services" },
                { to: "/services/warehouse", label: "Warehouse And Storage Services" },
                { to: "/services/truck", label: "Truck and Tempo On Rent Services" },
            ],
        },
        {
            to: "/pages",
            label: "Pages",
            childRoutes: [
                { to: "/pages/faqs", label: "FAQ" },
                { to: "/pages/about", label: "About" },
                { to: "/pages/gallery", label: "Gallery" },
                { to: "/pages/contact", label: "Contact" },
                { to: "/pages/review", label: "Reviews" },
                { to: "/pages/privacypolicy", label: "Privacy Policy" },
                { to: "/pages/terms", label: "Terms and Conditions" },
            ],
        },
        {
            to: "/process",
            label: "Process",
            childRoutes: [
                { to: "/process/packing-tips", label: "Packing Tips" },
                { to: "/process/packing-material", label: "Packing Material" },
            ],
        },
        { to: "/about", label: "About" },
        { to: "/contact", label: "Contact" },
    ];
    const [menu, setMenu] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <div className='px-8 relative w-full h-full '>
            <div className='hidden md:block'>
                    <img className='absolute bg-cover bg-center w-full h-full inset-0 blur-sm ' src='/images/Hero.webp' alt='Hero' />
                </div>
                <nav className='lg:hidden relative z-50'>
                    <div className='flex py- justify-between items-center px-4'>
                        <div>
                        <NavLink to='/'>
                            <img className='w-[90px] cursor-pointer' src='/images/logo.webp' alt='logo' />
                        </NavLink>
                        </div>
                        <div className='visible flex items-center'>
                            <button
                                id='open'
                                onClick={() => setMenu(!menu)}
                                className={` ${menu ? "hidden" : ""} focus:outline-none focus:ring-2 focus:ring-black`}
                            >
                                <TfiAlignRight size={25} />
                            </button>
                            <ul
                                id='list'
                                className={` ${menu ? "" : "hidden"} p-2 border-r bg-white absolute rounded top-[17px] left-0 right-0 shadow mt-24`}
                            >
                                {links.map((link, index) => (
                                    <div key={index} className=' group'>
                                        <li className='pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in'>
                                            <div
                                                className=''
                                                activeClassName='text-[#00838C]'
                                                onClick={() => {
                                                    if (link.label === "Services" || link.label === "Pages" || link.label === "Process") return;
                                                    setMenu(!menu);
                                                    navigate(link.to);
                                                }}
                                            >
                                                {link.label}
                                                <div key={index} class=' z-10 hidden bg-grey-200  group-hover:block'>
                                                    {link?.childRoutes?.length > 0 &&
                                                        link?.childRoutes.map((childRoute, index) => (
                                                              <div class=' px-2 py-1 bg-white shadow-lg  '>
                                                                <NavLink
                                                                    className= ' text-black flex justify-between items-center'
                                                                    activeClassName="text-[#00838C]"
                                                                    to={childRoute.to}
                                                                    onClick={() => {
                                                                        setMenu(!menu);
                                                                    }}
                                                                >
                                                                    <p>{childRoute.label}</p>
                                                                </NavLink>
                                                            </div>
                                                        ))}
                                                </div>
                                            </div>
                                        </li>
                                    </div>
                                ))}
                            </ul>
                            <div className='xl:hidden'>
                                <button
                                    id='close'
                                    className={` ${menu ? "" : "hidden"} close-m-menu focus:ring-2 focus:ring-black focus:outline-none`}
                                    onClick={() => setMenu(!menu)}
                                >
                                    <TfiClose size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
                <nav className='f-f-l relative z-10'>
                    <div className='relative z-10 mx-auto container hidden w-full px-4 xl:px-0 lg:flex justify-between items-center py-6'>
                        <div>
                            <img className='w-[100px] cursor-pointer' src='/images/logo.webp' alt='logo' />
                        </div>
                        <div className='flex items-center text-white text-base font-medium'>
                            <ul className='flex items-center pr-3 xl:pr-12 '>
                                {links.map((link, index) => (
                                    <div key={index} className='relative group'>
                                        <li className='pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in'>
                                            <NavLink className='' activeClassName='text-[#00838C]' to={link.to}>
                                                {link.label}
                                            </NavLink>
                                        </li>
                                        <div>
                                        <div className="absolute z-10 hidden bg-grey-200 group-hover:block">
                                            <div key={index} className=' w-full break-words text-wrap whitespace-nowrap'>
                                                {link?.childRoutes?.length > 0 &&
                                                    link?.childRoutes.map((childRoute, index) => (
                                                        <div key={index} class='px-2 py-1 bg-white shadow-lg'>
                                                            <NavLink
                                                                className='text-black flex justify-between items-center'
                                                                activeClassName='text-[#00838C]'
                                                                to={childRoute.to}
                                                            >
                                                                <p>{childRoute.label}</p>
                                                                <span className='ml-1'>{childRoute.icon}</span>
                                                            </NavLink>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
                
            </div>
        </>
    );
}

export default Navbar;
