import React from "react";
import { motion } from "framer-motion";

const Campaigns = ({ show }) => {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };



  return (
    <div
      className={`${show && "blur-sm"}  pt-2 px-2 sm:px-5 md:px-12 lg:pl-24 ff`}
    >
      <div className="mb-10">
        <h1 className="text-xl sm:text-2xl py-3 text-[#facc15]">Campaigns</h1>
        <p className=" font-light text-[#facc15]">
          Our Campaigns include:
        </p>
        <div className="flex justify-center items-center">
          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.01, delay: 0.05, staggerChildren: 0.2 }}
            className="text-center flex flex-wrap justify-center items-center text-name sm:w-2/3 md:w-1/2"
          >
            <motion.p
              variants={item}
              className="bg-[#233554] px-5 py-3 m-2 hover:text-white  hover:px-6"
            >
              We are committed to providing exceptional mental health support, raising awareness,
              <br /> and giving back to society by creating a
              community where everyone feels understood,
              <br />valued, and empowered to lead fulfilling lives.
            </motion.p>
            <motion.p
              variants={item}
              className="bg-[#233554] px-5 py-3 m-2 hover:text-white  hover:px-6"
            >
              Giving back to the society
              Through raising awareness about mental health support
            </motion.p>
           
            
          </motion.div>
        </div>
      </div>
      
    </div>
  );
};

export default Campaigns;
