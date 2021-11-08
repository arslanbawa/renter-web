import React from 'react'
import HeaderLinks from '../../Components/HeaderLinks/HeaderLinks'
import Logo from '../../Components/Logo/Logo'
import Banner from '../../Components/Banner/Banner'
import NavBar from '../../Components/NavBar/NavBar'
import Features from '../../Components/Features/Features'
import AppCard from '../../Components/AppCard/AppCard'
import ContactUs from '../../Components/ContactUs/ContactUs'
import Footer from '../../Components/Footer/Footer'
import AboutUs from '../../Components/AboutUs/AboutUs'
export default function Home() {
    return (
        <div>
            <HeaderLinks />
            {/* <Logo /> */}
            <NavBar />
            <Banner />
            <Features />
            <AppCard />
            <ContactUs />
            <AboutUs />
            <Footer/>
        </div>
    )
}
