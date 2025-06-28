'use client'
import ProductCard from "@/components/product/productCard";
import Image from "next/image";
import { useEffect, useState } from "react";
import productSlideEl2 from "../../../public/images/home/el-4.png";
import productBG from "../../../public/images/product/bg-1.jpg";
import ButtonSite from "@/components/button/button";
interface ProductItem {
    id: string;
    title: string;
    url: string;
    price: string;
    imgUrl: string;
    imgHover: string;
}
export default function HomeProductSlide() {
    const [productData, setProductData] = useState<ProductItem[]>([]);

    useEffect(() => {
    fetch("/json/products.json")
        .then((res) => res.json())
        .then((data) => setProductData(data.products));
    }, []);
    if (!productData) {
        return <p>Loading...</p>;
    }
    return (
        <section className="home-product-slide-section section-line">
            <div className="el">
                <Image src={productSlideEl2} alt="" />
            </div>
            <div className="row">
                <div className="col-md-6 align-self-center">
                    <div className="content-medium anim-fadein">
                        <h2>Furniture with a Purpose</h2>
                    </div>
                    <div className="content __2 anim-fadein">
                        <p>Lorem ipsum dolor sit amet consectetur. Maecenas blandit adipiscing a morbi at senectus. Tristique mauris sed porttitor cras donec feugiat diam. Morbi faucibus risus vel velit. Nisl donec a dictum consectetur. Quis mattis fringilla in cursus eget sapien egestas nec enim. Non lectus et nisl porttitor.</p>
                        <ButtonSite text={"Find out more"} href="#" styleButton="arTop" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="furniture-wrapper">
                        <div className="bg">
                            <Image className="anim-zoomin" src={productBG} alt="" fill sizes="1500px" />
                        </div>
                        <div className="furniture-slide anim-fadein">
                            <div className="swiper">
                                <div className="swiper-wrapper">
                                    {productData.slice(0, 6).map((product, index) => (
                                        <div className="swiper-slide" key={product.id}>
                                            <div className="furniture-box">
                                                <ProductCard key={product.id} product={product} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="furniture-button furniture-button-prev"><i className="fal fa-arrow-left"></i></div>
                                <div className="furniture-button furniture-button-next"><i className="fal fa-arrow-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}