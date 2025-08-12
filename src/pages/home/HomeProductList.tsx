'use client'
import ButtonSite from "@/components/button/button";
import ProductCard from "@/components/product/productCard";
import { FadeInSection } from "@/components/scrollEffects";
import ZoomInSection from "@/components/zoomInEffect";
import Image from "next/image";
import { useEffect, useState } from "react";
interface ProductItem {
    id: string;
    title: string;
    url: string;
    price: string;
    imgUrl: string;
    imgHover: string;
}
export default function HomeProductList({ onLoaded }: { onLoaded: () => void }) {
    const [productData, setProductData] = useState<ProductItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    fetch("/json/products.json")
        .then((res) => res.json())
        .then((data) => {
            setProductData(data.products);
            setIsLoading(false);
            onLoaded();
        });
    }, [onLoaded]);
    
    if (isLoading) {
        return <p>Loading...</p>;
    }
    
    return (
        <section className="home-list-section section-line">
            <div className="container-custom">
                <div className="row">
                    <div className="col-12">
                        <div className="content-big">
                            <FadeInSection className="anim-fadein w-100 position-relative">
                                <h3>INSPIRE YOUR</h3>
                                <div className="content-img">
                                    <ZoomInSection>
                                        <Image className="anim-zoomin" src="/images/home/5.jpg" alt="" fill sizes="1000px" />
                                    </ZoomInSection>
                                </div>
                                <h2>SPACE</h2>
                            </FadeInSection>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-product">
                <div className="row gy-2 gx-2 gx-lg-4 gy-lg-4">
                    {productData.slice(0, 8).map((product, index) => (
                        <FadeInSection className="col-6 col-lg-3 anim-fadein" key={product.id}>
                            <ProductCard key={product.id} product={product} />
                        </FadeInSection>
                    ))}
                </div>
                <div className="row section-padding">
                    <FadeInSection className="col-12 d-flex justify-content-center anim-fadein">
                        <ButtonSite text={"View All"} href="#" styleButton="arBottom" />
                       
                    </FadeInSection>
                </div>
            </div>
        </section>
    );
}