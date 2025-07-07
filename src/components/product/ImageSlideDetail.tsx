"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Product {
  id: string;
  title: string;
  price: string;
  description: string;
  images: string[];
}

interface ProductDetailProps {
  product: Product;
}

export default function ImageSlideDetail({ product }: ProductDetailProps) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Return false during SSR and before hydration to prevent mismatch
  const mobileView = isHydrated ? isMobile : false;

  return (
    <div className="">
      {mobileView ? (
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={15}
          speed={1500}
          loop={false}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
        >
          {product.images.map((image, index) => (
            <SwiperSlide className="product-item" key={index}>
              <a href={image} className="thumb-pro-detail" data-fancybox="gallery-product">
                <Image src={image} alt={`Product ${product.id} - ${index + 1}`} width={500} height={500} />
              </a>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      ) : (
        <div className="swiper swiper-container swiper-product-detail">
          <div className="swiper-wrapper">
            {product.images.map((image, index) => (
              <div className="product-item" key={index}>
                <a href={image} className="thumb-pro-detail" data-fancybox="gallery-product">
                  <Image src={image} alt={`Product ${product.id} - ${index + 1}`} width={500} height={500} />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
