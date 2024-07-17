import aboutimage from "../assets/banner-image.png";

const Testimonies = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-8 sm:px-[80px] pb-[100px]">
                <div className="grid place-items-center mb-4">
                    <h2 className="text-[#854d0e] text-5xl font-bold leading-10">
                        Testimonies
                    </h2>
                    <h3 className="text-[#854d0e] text-base font-bold leading-10">Hear from those whose lives have been transformed by our services.
                        These heartfelt stories showcase personal journeys, triumphs, and the support of our community.
                        Discover the impact we’re making and how we’re helping individuals achieve better mental health and well-being.</h3>
                </div>
                <div className="flex">
                    <div className="content-card w-full md:w-[50%] mb-5 h-full rounded-lg">
                        <img
                            src={aboutimage}
                            alt="banner-image"
                            className="object-fit-object w-full object-center"
                        />
                    </div>
                    <div className="content-card w-full md:w-[70%] mb-5 h-full p-1">
                        <h1 className=" text-[#854d0e] text-3xl font-bold text-justify" >Oluwahirene, Nigeria</h1>
                        <p className=" text-[#854d0e] text-lg font-normal text-justify ">
                            Meeting the ADI Team is a blessing.
                            Thanks ma, you just lifted my spirit
                            I feel inspired and energized
                            Many people dont know what I go through but these day you have been into my life I know that I have a glorious future to live for
                            May God bless you ma.
                        </p>
                        <h1 className=" text-[#854d0e] text-3xl font-bold text-justify" >Jane, Entrepreneur.</h1>
                        <p className=" text-[#854d0e] text-lg font-normal text-justify mt-4">
                            Hmmm… The exact time when I thought everything was over for me that was when I met the ADI team awareness on portfolio 9 community platform ,I decided to join.
                            <br />My first class with Them, my private chat with auntie ...her kind loving words and the first video call with me gives me strong hope that Jehovah God has sent an angel to be there for me cuz most people around me neglected me at that very moment of strong storm
                            When the second wave hit early last month I was able to scale through because of the various teaching from this great group
                            thank you auntie.
                        </p>
                        <h1 className=" text-[#854d0e] text-3xl font-bold text-justify" >Jane, Entrepreneur.</h1>
                        <p className=" text-[#854d0e] text-lg font-normal text-justify mt-4">
                            The focus group class has helped me to let go of something I wish I can have to myself even when its hard to let it go but really appreciate all you have done. <br />
                            The support you gave always and all the cares and love you show us all.God bless you.Love you Ma.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonies;
