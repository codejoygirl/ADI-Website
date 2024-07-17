import About from "../components/About";
import Campaign from "../components/Campaign";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonies from "../components/Testimonies";






const Home = () => {
  return (
    <main >
     <Hero/>
        <Services/>
        <About/>
        <Testimonies/>
        <Campaign/>
        <Contact/>
    </main>
  );
};

export default Home;
