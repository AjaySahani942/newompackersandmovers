import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import PackingMaterial from "./components/AllProcess/PackingMaterial";
import PackingTips from "./components/AllProcess/PackingTips";

import BikeTransportation from "./components/ServiceProvides/BikeTransportation";
import CarTransportation from "./components/ServiceProvides/CarTransportation";
import HeavyMachineryShifting from "./components/ServiceProvides/HeavyMachineryShifting";
import LoadingandUnloading from "./components/ServiceProvides/LoadingandUnloading";
import OfficeRelocation from "./components/ServiceProvides/OfficeRelocation";
import PackingandMoving from "./components/ServiceProvides/PackingandMoving";
import RelocationServices from "./components/ServiceProvides/RelocationServices";
import TruckandTempoOnRent from "./components/ServiceProvides/TruckandTempoOnRent";
import WarehousingandStorage from "./components/ServiceProvides/WarehousingandStorage";

import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";
import NotFound from "./components/NotFound";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Review from "./components/Review";
import ScrollToTop from './components/ScrollToTop';


import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Services from "./pages/Services";
import TermsAndConditions from "./pages/TermsAndConditions";
import VisitingCard from "./pages/VisitingCard";


function App() {
    const location = useLocation();
    return (
        <>
        {location.pathname === '/' &&
                <div className='hidden md:block'>
                    <img className='absolute bg-cover bg-center w-full h-full inset-0 blur-sm ' src='/images/Hero.webp' alt='' />
                </div>
        }
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route exact path='/services' element={<Services />} />
                <Route exact path='/services/allservices' element={<Services />} />
                <Route exact path='/services/bike' element={<BikeTransportation />} />
                <Route exact path='/services/car' element={<CarTransportation />} />
                <Route exact path='/services/machine' element={<HeavyMachineryShifting />} />
                <Route exact path='/services/loading' element={<LoadingandUnloading />} />
                <Route exact path='/services/office' element={<OfficeRelocation />} />
                <Route exact path='/services/relocation' element={<RelocationServices />} />
                <Route exact path='/services/truck' element={<TruckandTempoOnRent />} />
                <Route exact path='/services/warehouse' element={<WarehousingandStorage />} />
                <Route exact path='/services/packing' element={<PackingandMoving />} />
               
                <Route exact path='/pages/faqs' element={<FAQs />} />
                <Route exact path='/pages/about' element={<About />} />
                <Route exact path='/pages/gallery' element={<Gallery />} />
                <Route exact path='/pages/contact' element={<Contact />} />
                <Route exact path='/pages/review' element={<Review />} />
                <Route exact path='/pages/visiting' element={<VisitingCard />} />
                <Route exact path='/pages/privacypolicy' element={<PrivacyPolicy />} />
                <Route exact path='/pages/terms' element={<TermsAndConditions />} />
               
                <Route exact path='/process/packing-tips' element={<PackingTips />} />
                <Route exact path='/process/packing-material' element={<PackingMaterial />} />
                
                <Route exact path='/about' element={<About />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route exact path='/testimonal' element={<Review />} />

                <Route exact path='/pages/newsletter' element={<NewsLetter />} />s
               
                <Route exact path='/faqs' element={<FAQs />} />
                <Route path='*' element={<NotFound />} />
               
            </Routes> 
            <Footer />
            <div className='h-12 w-12 fixed right-6 bottom-[156px] cursor-pointer z-10'>
                <a href='https://mail.google.com/'>
                    <img src='/images/Email.png' alt='email' />
                </a>
            </div>
            <div className='h-12 w-12 fixed right-6 bottom-[96px] cursor-pointer z-10'>
                <a href='tel:+918853503889'>
                
                    <img src='/images/Phone.png' alt='phone' />
                </a>
            </div>
            <div className='h-12 w-12 fixed right-6 bottom-10 cursor-pointer z-10'>
                <a href='https://wa.me/917786860700'>
                    <img src='/images/Whatsapp2.png' alt='whatsapp' />
                </a>
            </div>
        </>
    );
}

export default App;
