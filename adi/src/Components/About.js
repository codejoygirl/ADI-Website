import React from "react";
import { TbPhone, TbMail } from "react-icons/tb";
import { MdOutlineMyLocation } from "react-icons/md";
import img from "../Images/bg1.png";
import { motion } from "framer-motion";

const About = ({ show }) => {
  return (
    <div
      className={`${show && "blur-sm"}  pt-2 px-2 sm:px-5 md:px-12 lg:pl-24 ff`}
    >
      <h1 className=" text-xl sm:text-2xl py-3 text-white">About</h1>
      <div className="flex flex-col sm:flex-row justify-center items-center font-thin">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.5 }}
          className="sm:w-1/2  text-white sm:p-5 sm:pl-10 sm:text-xl "
        >
          Founded in February 2019, by an individual who had personally experienced the impact of depression and is passionate about creating a supportive community for those still dealing with same.
          <br />
          Our team includes mental health professionals and individuals with lived experience of depression.
          <br /> So we really do understand all you can and can’t put into words.
          We are dedicated to providing accessible resources, support  and education to manage depression and promote mental health.
          <br /> <strong>We are committed to:</strong>⁠Providing a safe and non judgmental space for people to share their experiences
          ⁠Building a community that promotes connection, understanding and hope

          <p className=" text-white text-lg font-normal text-justify mt-4">
            <strong>Our vision</strong> is a world where depression is met with compassion and support and where people with depression are free from stigma and limitations,
            and can also thrive and live fulfilling lives.
          </p>
          <p className=" text-white text-lg font-normal text-justify mt-4">
            <strong>Our aims </strong>are to establish a helpline and online support groups, distribute educational materials, organize awareness campaigns, collaborate with organizations and professionals,
            and create an online community platform for sharing experiences.
          </p>
          <section className=" mt-2 sm:text-l text-white text-center">
            <div className="flex gap-4 items-center justify-start my-3 pt-6">
              <TbPhone />
              <p>+2348032215653</p>
            </div>
            <div className="flex gap-4 items-center justify-start my-3">
              <TbMail />
              <p>Aidfordepression@gmail.com</p>
            </div>
            <div className="flex gap-4 items-center justify-start my-3">
              <MdOutlineMyLocation />
              <p>Nigeria</p>
            </div>
          </section>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.4, zoom: 1 }}
          animate={{
            opacity: 1,
            zoom: 0,
          }}
          transition={{ duration: 0.5 }}
          className="sm:w-1/2 flex justify-center pt-5"
        >
          <div className=" sm:w-3/4 border-2 border-[#FF5823">
            <img src={img} alt="" className=" w-full  z-10 m-2 hover:ml-0" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
