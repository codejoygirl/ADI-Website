import React from "react";
import { FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const Social = () => {
  return (
    <div className="text-base sm:text-xl ">

      <a
        href="https://twitter.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#854d0e]"
      >  <BsTwitter color="white" className="hover:py-1" /></a>
      <a
        href="https://www.facebook.com/DepressionManagementFoundation"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#854d0e] "
      > <FaFacebook color="white" className="hover:py-1" /></a>
      <a
        href="mailto:Aidfordepression@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#854d0e] "
      >          <HiOutlineMail color="white" className="hover:py-1" /></a>
      <a
        href="https://www.instagram.com/depressionmanagement"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#854d0e]"
      >   <FaInstagram color="white" className="hover:py-1" /></a>
      <a
        href="https://wa.me/447724389666"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#854d0e] "
      >  <FaWhatsapp color="white" className="hover:py-1" /></a>
    </div>
    
  );
};

export default Social;
