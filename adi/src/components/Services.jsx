import { RiMicroscopeLine } from "react-icons/ri";
import { FaHospital } from "react-icons/fa";
import { RiCommunityLine } from "react-icons/ri";


const Services = () => {
    return (
        <div className="bg-gradient-to-r from-[#facc15] via-[#854d0e] to-[#422006]">
            <div className="grid place-items-center text-4xl font-bold text-white p-10"> Services</div>
            <div className="bg-gradient-to-r from-[#facc15] via-[#854d0e] to-[#422006] flex gap-10 md:flex md:flex-row mx-8 ">
                <div className="content-card bg-white w-full md:w-[32%] max-w-sm  border border-gray-200 rounded-lg shadow mb-4">
                    <div className="grid place-items-center">
                        <RiMicroscopeLine color="yellow" size={50} />
                    </div>
                    <h3 className="text-black text-xl font-bold leading-loose p-2 ">
                        Counselling and therapy sessions
                    </h3>
                    <p className="text-black text-sm font-normal pb-2 text-justify p-2">
                        Our counseling and therapy services offer personalized mental health support in a safe, confidential environment, including individual, group, family, and couples therapy, crisis intervention, teletherapy, and dedicated professionals
                        guiding you toward a fulfilling life.
                    </p>
                    <div className="p-2">
                        <button className="bg-[#facc15] hover:bg-black text-white font-bold py-2 px-4  rounded ">
                            Learn more
                        </button>
                    </div>
                </div>



                <div className="content-card bg-white w-full md:w-[32%] max-w-sm  border border-gray-200 rounded-lg shadow mb-4">
                    <div className="grid place-items-center">
                        <RiCommunityLine color="yellow" size={50} />
                    </div>
                    <h3 className="text-black text-xl font-bold leading-loose p-2">
                        Online community platform
                    </h3>
                    <p className="text-black text-sm font-normal text-justify p-2">
                        Our online community platform provides discussion forums, resource sharing, support groups, events, messaging, networking, member profiles, moderation, and safety measures to foster
                        connections, support, and collaboration among members.
                    </p>
                    <div className="p-2">
                    <button className="bg-[#facc15] hover:bg-black text-white font-bold py-2 px-4  rounded">
                        Learn more
                    </button>
                    </div>
                </div>

                <div className="content-card bg-white w-full md:w-[32%] max-w-sm  border border-gray-200 rounded-lg shadow mb-4">
                <div className="grid place-items-center">
                    <FaHospital  color="yellow" size={50} />
                    </div>
                    <h3 className="text-black text-xl font-bold leading-loose  p-2">
                        A crisis intervention helpline
                    </h3>
                    <p className="text-black text-sm font-normal text-justify  p-2">
                        Crisis Intervention Helpline Services Our Crisis Intervention Helpline provides 24/7 support for those in mental health crises.
                        We offer immediate emotional support, crisis assessment, safety planning, resource connection, follow-up care, suicide prevention, and family support.
                        No one has to face a crisis alone.
                    </p>
                    <div className="p-2">
                    <button className="bg-[#facc15] hover:bg-[black] text-white font-bold py-2 px-4  rounded">
                        Learn more
                    </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;
