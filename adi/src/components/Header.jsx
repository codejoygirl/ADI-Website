import  { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu4Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";


const Header = () => {
  const [show, setShow] = useState(false);
  const [rotate, setRotate] = useState(false);

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
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="py-5 px-5 md:px-12  ff ">
      <section className=" flex items-center justify-between ">
        <div className="sm:w-1/4 flex justify-start">
          <Link to="/">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                rotate: [0, 300, 300, 0],
              }}
              transition={{ duration: 1 }}
              className="text-4xl font-serif text-[#854d0e]"
            >
              <motion.div
                animate={{ rotate: rotate ? [0, 300, 300, 0] : 0 }}
                transition={{ duration: 2 }}
                onClick={() => setRotate(!rotate)}
              >
                Aid For Depression Initiative
                
              </motion.div>
            </motion.div>
          </Link>
        </div>

        <motion.nav
          variants={variants}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.3, delay: 0.05, staggerChildren: 0.2 }}
          className="hidden sm:flex sm:w-3/4 justify-evenly lg:w-2/3 text-[#854d0e] items-center font-harline text-sm"
        >
          
          <motion.div variants={item} className="flex flex-col ">
            <Link
              to="/about"
              className="hover:text-black focus:text-black text-lg text-[#854d0e]"
            >
              Services
            </Link>
          </motion.div>
          <motion.div variants={item}>
            {" "}
            <Link
              to="/projects"
              className="hover:text-black focus:text-black text-lg text-[#854d0e]"
            >
              About
            </Link>
          </motion.div>

          <motion.div variants={item}>
            {" "}
            <Link
              to="/experience"
              className="hover:text-black focus:text-black text-lg text-[#854d0e]"
            >
              Testimonies
            </Link>
          </motion.div>

          <motion.div variants={item}>
            {" "}
            <Link
              to="/certificates"
              className="hover:text-black focus:text-black text-lg text-[#854d0e]"
            >
              Campaign
            </Link>
          </motion.div>


          
         
          
        </motion.nav>

        <div className="sm:hidden text-5xl z-10" onClick={() => setShow(!show)}>
          {show ? <MdClose /> : <RiMenu4Fill />}
        </div>
      </section>

      <nav
        className={`sm:hidden top-0 right-0 bg-navv absolute h-screen w-2/3 ease-in-out duration-300 flex items-center justify-center
        ${show ? "translate-x-0 " : "translate-x-full"}`}
      >
        <div
          className={`flex flex-col text-2xl justify-between items-center h-1/2 `}
        >
          <Link to="/about" onClick={() => setShow(!show)}>
            About
          </Link>
          <Link to="/projects" onClick={() => setShow(!show)}>
            Services
          </Link>
          <Link to="/experience" onClick={() => setShow(!show)}>
            Testimonies
          </Link>
          <Link to="/contact" onClick={() => setShow(!show)}>
            Campaign
          </Link>
         
        </div>
      </nav>
      
    </div>
  );
};

export default Header;