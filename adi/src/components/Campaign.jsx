import campaign1 from "../assets/campaign1.jpg"
import campaign4 from "../assets/campaign4.jpg"
import campaign2 from "../assets/campaign2.jpg"

const Campaign = () => {
    return (
        <div className="bg-gradient-to-r from-[#facc15] via-[#854d0e] to-[#422006]">
            <div className="grid place-items-center text-3xl  text-white"> 
                <h2 className="text-white font-bold mt-2">Campaigns</h2>
                <h1 className="text-lg font-sans font-semibold p-2">We are committed to providing exceptional mental health support, raising awareness,
                   <br/> and giving back to society by creating a
                    community where everyone feels understood, 
                    <br/>valued, and empowered to lead fulfilling lives.</h1>
            </div>
            <div className="bg-gradient-to-r from-[#facc15] via-[#854d0e] to-[#422006] flex gap-10 md:flex md:flex-row mx-8">
                <div className="content-card bg-white w-full md:w-[32%] max-w-sm  border border-gray-200 rounded-lg shadow mb-4">
                    <img src={campaign1} alt="campaign1" className="rounded-t-lg" />
                    <h3 className="text-black text-xl font-bold leading-loose p-2 ">
                        Giving back to the society
                    </h3>
                    <p className="text-black text-sm font-normal pb-2 text-justify p-2">
                        Through raising awareness about mental health support
                    </p>
                </div>

                <div className="content-card bg-white w-full md:w-[32%] max-w-sm  border border-gray-200 rounded-lg shadow mb-4">
                    <img src={campaign4} alt="campaign4" className="rounded-t-lg" />
                    <h3 className="text-black text-xl font-bold leading-loose p-2 ">
                        Giving back to the society
                    </h3>
                    <p className="text-black text-sm font-normal text-justify p-2">
                        Through raising awareness about mental health support
                    </p>

                </div>

                <div className="content-card bg-white w-full md:w-[32%] max-w-sm  border border-gray-200 rounded-lg shadow mb-4">
                    <img src={campaign2} alt="campaign2" className="rounded-t-lg" />
                    <h3 className="text-black text-xl font-bold leading-loose p-2 ">
                        Giving back to the society
                    </h3>
                    <p className="text-black text-sm font-normal text-justify p-2">
                        Through raising awareness about mental health support
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Campaign;
