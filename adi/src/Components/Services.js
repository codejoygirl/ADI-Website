import React from "react";
import campaign2 from "../Images/campaign2.jpg";
import articleImg2 from "../Images/article-img-5.png";
import articleImg from "../Images/article-img-10.png";
import { motion } from "framer-motion";

const Services = ({ show }) => {
  return (
    <div
      className={`${show && "blur-sm"}  pt-2 px-2 sm:px-5 md:px-20 lg:pl-24 ff`}
    >
      <h1 className=" text-xl sm:text-2xl py-3 text-[#facc15]">Services</h1>
      <div>
        <section className="pb-5">
          <div className="flex justify-center items-center flex-col sm:flex-row ">
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 bg-[#233554] p-4 "
            >
              <h3 className="text-[#facc15] text-xl font-bold leading-loose p-2 ">
                Counselling and therapy sessions
              </h3>
              <p className="text-[#facc15] text-sm font-normal pb-2 text-justify p-2">
                Our counseling and therapy services offer personalized mental health support in a safe, confidential environment, including individual, group, family, and couples therapy, crisis intervention, teletherapy, and dedicated professionals
                guiding you toward a fulfilling life.
              </p>

            </motion.article>
            <motion.img
              initial={{ opacity: 0.5, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              src={campaign2}
              alt="campaign2"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
      </div>

      <div>
        <section className="pb-5">
          <div className="flex justify-center items-center flex-col sm:flex-row ">
            <motion.img
              initial={{ opacity: 0.5, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              src={articleImg}
              alt="article-img-10"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 bg-[#233554] p-4 "
            >
              <h3 className="text-[#facc15] text-xl font-bold leading-loose p-2">
                Online community platform
              </h3>
              <p className="text-[#facc15] text-sm font-normal text-justify p-2">
                Our online community platform provides discussion forums, resource sharing, support groups, events, messaging, networking, member profiles, moderation, and safety measures to foster
                connections, support, and collaboration among members.
              </p>
              </motion.article>

          </div>
        </section>
      </div>

      <div>
        <section className="pb-5">
          <div className="flex justify-center items-center flex-col sm:flex-row ">
            <motion.article
              initial={{ opacity: 0.5, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              className="sm:w-1/2 bg-[#233554] p-4 "
            >
              <h3 className="text-[#facc15] text-xl font-bold leading-loose  p-2">
                A crisis intervention helpline
              </h3>
              <p className="text-[#facc15] text-sm font-normal text-justify  p-2">
                Crisis Intervention Helpline Services Our Crisis Intervention Helpline provides 24/7 support for those in mental health crises.
                We offer immediate emotional support, crisis assessment, safety planning, resource connection, follow-up care, suicide prevention, and family support.
                No one has to face a crisis alone.
              </p>
              
            </motion.article>
            <motion.img
              initial={{ opacity: 0.5, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 1 }}
              src={articleImg2}
              alt="article-img-5"
              className="sm:w-1/2 rounded-b-lg sm:rounded-lg"
            />
          </div>
        </section>
      </div>

      
    </div>
  );
};

export default Services;
