import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = ({ show }) => {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <div className={`${show && "blur-md"} pt-5 px-5 md:px-12 lg:pl-24`}>
      {/* <span className="text-[#64ffda] italic pt-2 pb-8 ff">&lt;body&gt;</span> */}
      <p className=" pb-3 text-[#facc15] ff">Hi 🙂 , Welcome to </p>
      <motion.h1
        variants={variants}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.01, delay: 0.05, staggerChildren: 0.2 }}
        className="font-bold sm:text-7xl text-6xl text-[#facc15] big tracking-wide sm:pt-3 md:flex"
      >
        <div>
          <motion.span variants={item}>A</motion.span>
          <motion.span variants={item}>I</motion.span>
          <motion.span variants={item}>D</motion.span>
        </div>

        <div className="md:ml-4">
          <motion.span variants={item}>F</motion.span>
          <motion.span variants={item}>0</motion.span>
          <motion.span variants={item}>R</motion.span>
        </div>

        <div className="md:ml-4">
          <motion.span variants={item}>D</motion.span>
          <motion.span variants={item}>E</motion.span>
          <motion.span variants={item}>P</motion.span>
          <motion.span variants={item}>P</motion.span>
          <motion.span variants={item}>P</motion.span>
          <motion.span variants={item}>R</motion.span>
          <motion.span variants={item}>E</motion.span>
          <motion.span variants={item}>S</motion.span>
          <motion.span variants={item}>S</motion.span>
          <motion.span variants={item}>I</motion.span>
          <motion.span variants={item}>O</motion.span>
          <motion.span variants={item}>N</motion.span>
        </div>
        <div className="md:ml-4">
          <motion.span variants={item}>I</motion.span>
          <motion.span variants={item}>N</motion.span>
          <motion.span variants={item}>I</motion.span>
          <motion.span variants={item}>T</motion.span>
          <motion.span variants={item}>I</motion.span>
          <motion.span variants={item}>A</motion.span>
          <motion.span variants={item}>T</motion.span>
          <motion.span variants={item}>I</motion.span>
          <motion.span variants={item}>V</motion.span>
          <motion.span variants={item}>E</motion.span>
        </div>
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, x: 50 }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 0.5 }}
        className="text-[#facc15] text-3xl font-bold pb-3 lg:text-5xl"
      >
        A Support for Human Care
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 0.5 }}
        className="py-3 md:w-2/3 text-[#facc15] ff"
      >
        We are committed to providing exceptional mental health support, raising awareness,
        and giving back to society by creating a community where everyone feels understood,
        valued, and empowered to lead fulfilling lives
      </motion.p>
      <Link to="/contact">
        <motion.button className="border-[#facc15]  px-8 py-3 my-3 border rounded-sm hover:bg-[#facc15]  text-[#facc15]  text-xl font-thin ff">
          Contact Us
        </motion.button>
      </Link>


    </div>
  );
};

export default Home;
