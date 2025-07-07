
import HomeBanner from "./HomeBanner";
import HomeCollection from "./HomeCollection";
import HomeContent from "./HomeContent";
import FaqSection from "./HomeFaq";
import HomeImg from "./HomeImg";
import HomeProduct from "./HomeProduct";
import HomeProductList from "./HomeProductList";
import HomeProductSlide from "./HomeProductSlide";
import ImgParallax from "./ImgParallax";

export default function HomePage() {
    return (
        <>
            <HomeBanner />
            <HomeProduct />
            <HomeContent />
            <HomeImg />
            <HomeCollection />
            <HomeProductList />
            <HomeProductSlide />
            <FaqSection />  
            <ImgParallax /> 
        </>
    );
}