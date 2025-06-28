'use client'
import ProductCard from "@/components/product/productCard";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from "swiper/modules";
import ButtonSite from "@/components/button/button";
interface ProductItem {
    id: string;
    title: string;
    url: string;
    price: string;
    imgUrl: string;
    imgHover: string;
}
export default function HomeProduct() {
    const [productData, setProductData] = useState<ProductItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    fetch('/json/products.json')
      .then((res) => res.json())
      .then((data) => {
        setProductData(data.products);
        setLoading(false);
      });
    }, []);
    if (!productData) {
        return <p>Loading...</p>;
    }
    if (loading) return <p>Loading...</p>;

    return (
        <section className="home-product-section section-line">
            <div className="container-custom">
                <div className="row">
                    <div className="col-md-7">
                        <div className="content anim-fadein">
                            <h2>Curated collections of high-quality furniture designed to elevate every room in your home.</h2>
                            <ButtonSite text={"Contact for Consulting"} href="#" styleButton="arTop" />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="content anim-fadein">
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Maecenas blandit adipiscing a morbi at senectus. Tristique mauris sed porttitor cras donec feugiat diam. Morbi faucibus risus vel velit. Nisl donec a dictum consectetur. Quis mattis fringilla in cursus eget sapien egestas nec enim. Non lectus et nisl porttitor.
                                <br/><br/>
                                Phasellus pellentesque egestas ac egestas. Turpis dictum fusce urna posuere diam bibendum nisi vestibulum. Tincidunt aliquet non gravida id maecenas eu. A bibendum sit eget ac pellentesque. Dignissim nibh enim est tortor. 
                                <br/><br/>
                                Vitae quis egestas hendrerit tellus eget quis nisi. Pharetra imperdiet habitant commodo elementum tortor pharetra et. Proin diam ornare pellentesque.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-slide anim-fadein">
                <div className="container-custom">
                    <div className="row">
                        <div className="col-12">
                            <div className="product-nav">
                                <div className="product-nav-btn product-btn-prev"><i className="fal fa-arrow-left"></i></div>
                                <div className="product-nav-btn product-btn-next"><i className="fal fa-arrow-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={2}
                    speed={2000}
                    watchSlidesProgress={true}
                    breakpoints= {{
                        992: {
                            slidesPerView: 3.7,
                            spaceBetween: 40,
                            
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                            
                        },
                        600: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                            
                        },
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                            
                        },
                        
                    }}
                    pagination={{
                        el: '.product-pagination',
                        clickable: true,
                        dynamicBullets: true,
                        dynamicMainBullets: 2
                    }}
                    navigation={{
                        nextEl: '.product-btn-next',
                        prevEl: '.product-btn-prev'
                    }}
                    >
                    
                    {productData.map((product, index) => (
                        <SwiperSlide key={index}>
                            <ProductCard key={product.id} product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}