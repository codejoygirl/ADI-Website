
import { BackgroundCarousel } from "./backgroundcarousel";



const Hero = () => {
    return (
        <main >
            <figure className="relative  transition-all duration-500 cursor-pointer  bg-blend-darken hover:[#FF7827] w-full h-1/2">
                <BackgroundCarousel />
                <figcaption className="absolute bottom-80  mx-24 bg-opacity-80 bg-blend-darken ">
                    <h1 className="text-6xl text-white  font-serif font-bold ">Mission Statement:
                        <br /> To Restore Hope to Humanity, One Life at a time.
                    </h1>
                    
                        <p className="text-white text-2xl "> Our goal is to provide support and resources
                            for individuals with depression, educate the public, reduce stigma through awareness, advocate for supportive policies, and build a supportive community.
                            <br />Provide support and resources for individuals with depression, educate the public, reduce stigma through awareness,
                            advocate for supportive policies, and build a supportive community.
                        </p>
                        <div className="mt-4">
                            <button className="bg-[#854d0e] hover:bg-[#422006] text-white font-bold py-2 px-4 rounded">
                                Services
                            </button>
                        </div>
                    
                    <div className="bg-overlay- h-96 ">
                    </div>

                </figcaption>
            </figure>
        </main>
    );
};

export default Hero;
