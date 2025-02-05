import Devices from "./Components/Devices";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Status from "./Components/Status";

let Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Devices />
            <Status />
            <Footer />
        </>
    )
}

export default Home;