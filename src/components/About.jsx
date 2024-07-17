import aboutimage from "../assets/logo.png";

const About = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-8 sm:px-[80px] pb-[100px]">
                <div className="grid place-items-center mb-4">
                    <h2 className="text-[#854d0e] text-5xl font-bold leading-10">
                        About us
                    </h2>
                </div>
                <div className="flex">
                    <div className="content-card w-full md:w-[70%] mb-5 h-full p-1">
                        <h1 className=" text-[#854d0e] text-3xl font-bold text-justify" >Empowering the Vulnerables</h1>
                        <p className=" text-[#854d0e] text-lg font-normal text-justify ">
                            Founded in February 2019, by an individual who had personally experienced the impact of depression and is passionate about creating a supportive community for those still dealing with same.
                            <br />
                            Our team includes mental health professionals and individuals with lived experience of depression.
                            <br /> So we really do understand all you can and can’t put into words.
                            We are dedicated to providing accessible resources, support  and education to manage depression and promote mental health.
                            <br /> <strong>We are committed to:</strong>⁠Providing a safe and non judgmental space for people to share their experiences
                            ⁠Building a community that promotes connection, understanding and hope
                        </p>
                        <p className=" text-[#854d0e] text-lg font-normal text-justify mt-4">
                            <strong>Our vision</strong> is a world where depression is met with compassion and support and where people with depression are free from stigma and limitations,
                            and can also thrive and live fulfilling lives.
                        </p>
                        <p className=" text-[#854d0e] text-lg font-normal text-justify mt-4">
                            <strong>Our aims </strong>are to establish a helpline and online support groups, distribute educational materials, organize awareness campaigns, collaborate with organizations and professionals,
                            and create an online community platform for sharing experiences.
                        </p>
                       

                    </div>
                    <div className="content-card w-full md:w-[50%] mb-5 h-full rounded-lg">
                        <img
                            src={aboutimage}
                            alt="logo"
                            className="object-fit-object w-full object-center"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
