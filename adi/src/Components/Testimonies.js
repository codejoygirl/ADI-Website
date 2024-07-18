import React from "react";
import bannerImg from "../Images/banner-image.png";
import bg2 from "../Images/bg2.png";
import { motion } from "framer-motion";

const Testimonies = ({ show }) => {
  return (
    <div
      className={`${show && "blur-sm"}  pt-2 px-2 sm:px-5 md:px-20 lg:pl-24 ff`}
    >
      <h1 className="text-xl sm:text-2xl py-3 text-[#facc15]">
        Testimonies
        Hear from those whose lives have been transformed by our services.
        These heartfelt stories showcase personal journeys, triumphs, and the support of our community.
        Discover the impact we’re making and how we’re helping individuals achieve better mental health and well-being.</h1>
      <div>
        <section className="pb-5">
          <h2 className="text-name sm:text-xl py-3">
            <span className="text-white">01.</span> Oluwahirene, Nigeria
          </h2>
          <div className="flex justify-center items-center flex-col sm:flex-row ">
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 bg-[#233554] p-4 text-[#facc15]"
            >
              Meeting the ADI Team is a blessing.
              Thanks ma, you just lifted my spirit
              I feel inspired and energized
              Many people dont know what I go through but these day you have been into my life I know that I have a glorious future to live for
              May God bless you ma.
            
            </motion.article>
            <motion.img
              initial={{ opacity: 0.5, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              src={bannerImg}
              alt="banner-image"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
      </div>

      <div>
        <section className="pb-5">
          <h2 className="text-name sm:text-xl py-3">
            <span className="text-white">02.</span> Jane, Entrepreneur.
          </h2>
          <div className="flex justify-center items-center flex-col sm:flex-row ">
            <motion.img
              initial={{ opacity: 0.5, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              src={bg2}
              alt="bg2"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 bg-[#233554] p-4 text-[#facc15]"
            >
              Hmmm… The exact time when I thought everything was over for me that was when I met the ADI team awareness on portfolio 9 community platform ,I decided to join.
              My first class with Them, my private chat with auntie ...her kind loving words and the first video call with me gives me strong hope that Jehovah God has sent an angel to be there for me cuz most people around me neglected me at that very moment of strong storm
              When the second wave hit early last month I was able to scale through because of the various teaching from this great group
              thank you auntie.
              
            </motion.article>

          </div>
        </section>
      </div>
      
      <div>
        <section className="pb-5">
          <h2 className="text-name sm:text-xl py-3">
            <span className="text-white">03.</span> Ngozi, Nigeria
          </h2>
          <div className="flex justify-center items-center flex-col sm:flex-row ">
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 bg-[#233554] p-4 text-[#facc15]"
            >
              The focus group class has helped me to let go of something I wish I can have to myself even when its hard to let it go but really appreciate all you have done. <br />
              The support you gave always and all the cares and love you show us all.God bless you.Love you Ma.
              
            </motion.article>
            <motion.img
              initial={{ opacity: 0.5, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              src={bannerImg}
              alt="banner-image"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
      </div>


      
         
        

      
    </div>
  );
};

export default Testimonies;
