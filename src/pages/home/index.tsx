'use client';

import { useState } from "react";
import HomeBanner from "./HomeBanner";
import HomeProduct from "./HomeProduct";
import HomeContent from "./HomeContent";
import HomeImg from "./HomeImg";
import HomeCollection from "./HomeCollection";
import HomeProductList from "./HomeProductList";
import HomeProductSlide from "./HomeProductSlide";
import FaqSection from "./HomeFaq";
import ImgParallax from "./ImgParallax";

export default function HomePage() {
  const [showProduct, setShowProduct] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showImg, setShowImg] = useState(false);
  const [showCollection, setShowCollection] = useState(false);
  const [showProductList, setShowProductList] = useState(false);
  const [showProductSlide, setShowProductSlide] = useState(false);
  const [showFaq, setShowFaq] = useState(false);
  const [showParallax, setShowParallax] = useState(false);

  return (
    <>
      <HomeBanner onLoaded={() => setShowProduct(true)} />
      {showProduct && <HomeProduct onLoaded={() => setShowContent(true)} />}
      {showContent && <HomeContent onLoaded={() => setShowImg(true)} />}
      {showImg && <HomeImg onLoaded={() => setShowCollection(true)} />}
      {showCollection && <HomeCollection onLoaded={() => setShowProductList(true)} />}
      {showProductList && <HomeProductList onLoaded={() => setShowProductSlide(true)} />}
      {showProductSlide && <HomeProductSlide onLoaded={() => setShowFaq(true)} />}
      {showFaq && <FaqSection onLoaded={() => setShowParallax(true)} />}
      {showParallax && <ImgParallax />}
    </>
  );
}                                                                  