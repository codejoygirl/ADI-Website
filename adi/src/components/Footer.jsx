import { FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"

function Footer() {
    return (
        <div
            className="w-[100vw] px-[30px] md:px-[10px] py-[60px]
           bg-gradient-to-r from-[#facc15] via-[#854d0e] to-[#422006] "
        >
            <div className="grid grid-cols-2 gap-96">
                <div>
                    <img src={logo} alt="logo" className="w-20" />
                </div>
                <div className="flex gap-6">
                    <NavLink to='/' className="lg:flex md:inNavLinkne-block text-white font-serif hover:text-[#FF7827] cursor-grab ">
                        Home
                    </NavLink>
                    <NavLink to='/about-us' className="lg:flex md:inNavLinkne-block  text-white font-serif hover:text-[#FF7827] cursor-grab ">
                        About us
                    </NavLink>
                    <NavLink to='/services' className="lg:flex md:inNavLinkne-block text-white font-serif hover:text-[#FF7827] cursor-grab ">
                        Services
                    </NavLink>
                    <NavLink to='/testimonials' className="lg:flex md:inNavLinkne-block text-white font-serif hover:text-[#FF7827] cursor-grab ">
                        Testimonials
                    </NavLink>
                    <NavLink to='/campaigns' className="lg:flex md:inNavLinkne-block text-white font-serif hover:text-[#FF7827] cursor-grab ">
                        Campaigns
                    </NavLink>
                </div>
            </div>
            <div className="grid place-items-center ">
                <div className="flex gap-4 cursor-pointer">
                    <a
                        href="https://twitter.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-name "
                    >  <FaXTwitter color="white" /></a>
                    <a
                        href="https://www.facebook.com/DepressionManagementFoundation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-name "
                    > <FaFacebook  color="white" /></a>
                    <a
                        href="mailto:Aidfordepression@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-name "
                    >          <HiOutlineMail  color="white"/></a>
                    <a
                        href="https://www.instagram.com/depressionmanagement"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-name "
                    >   <FaInstagram  color="white" /></a>
                    <a
                        href="https://wa.me/447724389666"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-name "
                    >  <FaWhatsapp  color="white"/></a>
                </div>
                <p className="text-white ">Copyright © 2024 Aid For Depression Initiative. All rights reserved.</p>
            </div>
           
        </div>
    );
}
export default Footer;
