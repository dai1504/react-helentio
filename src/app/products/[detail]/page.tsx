"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import dt1 from "../../../../public/images/home/el-1.png";
import dt2 from "../../../../public/images/home/el-2.png";
import bg from "../../../../public/images/home/2.jpg";
import useResponsive from "@/components/useResponsive";
import { useCart } from "@/lib/cartContext";

interface Product {
    id: string;
    title: string;
    price: string;
    images: string[];
    catelogy: string;
}

export default function ProductDetail() {
    const params = useParams(); 
    const router = useRouter();
    const [product, setProduct] = useState<Product | null>(null);
    const { isMobile } = useResponsive();
    const [isLoading, setIsLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState("Brown");
    const { addItem, toggleCart } = useCart();
    
    useEffect(() => {
        const oldScript = document.getElementById("product-script");
        if (oldScript) {
          oldScript.remove();
        }
        const script = document.createElement("script");
        script.src = "/js/product.js";
        script.id = "product-script";
        script.async = false;
        document.body.appendChild(script);
        
        if (!params?.detail) return; 

        async function fetchProduct() {
            console.log("Fetching product for ID:", params?.detail);
            try {
                const res = await fetch(`/json/products.json`);

                if (!res.ok) {
                    console.error("JSON file not found:", res.status);
                    router.push("/404");
                    return;
                }

                const data = await res.json();
                const foundProduct = data.products.find((p: Product) => p.id === params?.detail);

                if (!foundProduct) {
                    console.error("Product not found");
                    router.push("/404");
                    return;
                }

                console.log("Product Data:", foundProduct);
                setProduct(foundProduct);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        }

        fetchProduct();

        return () => {
            script.remove();
        };
    }, [params?.detail, router]);

    const handleQuantityChange = (newQuantity: number) => {
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    const handleAddToCart = () => {
        if (!product) return;
        
        addItem({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.images[0],
            quantity: quantity,
            color: selectedColor,
            category: product.catelogy,
        });
        
        // Open cart after adding item
        toggleCart();
    };

    if (isLoading || !product) return <p>Loading product...</p>;

    return (
        <>
            <div className="space-top"></div>
            <section className="detail-product-container section-line">
                <div className="container-fluid">
                    <div className="row">
                        
                        <div className="col-md-8 order-0 order-md-0 box-pro-img-sticky">
                            <div className="">
                                {isMobile ? (
                                    <Swiper
                                        className="swiper-product-detail"
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
                                            dynamicBullets: true,
                                            dynamicMainBullets: 3
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
                                ):(
                                    <div className="swiper swiper-container  swiper-product-detail">
                                        <div className="swiper-wrapper d-flex">
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
                        </div>
                        <div className="col-md-4 order-1 order-md-1">
                            <div className="product-content">
                                <div className="box-title">
                                    <div className="title">
                                        <h1>{product.title}</h1>
                                    </div>
                                    <div className="product-quality">
                                        <div className="qtybutton dec" onClick={() => handleQuantityChange(quantity - 1)}>-</div>
                                        <input 
                                            type="number" 
                                            value={quantity} 
                                            className="cart-plus-minus-box" 
                                            step="1" 
                                            min="1" 
                                            name="quantity" 
                                            readOnly 
                                            aria-label="Product quantity"
                                        />
                                        
                                        <div className="qtybutton inc" onClick={() => handleQuantityChange(quantity + 1)}>+</div>
                                    </div>
                                    <div className="btn-product">
                                        <button className="btn-theme" onClick={handleAddToCart}>ADD TO CART</button>
                                        <div className="box-price">
                                            {product.price}
                                        </div>
                                    </div>
                                </div>
                                <div className="box-size widget-product">
                                    <h3>Color</h3>
                                    <div className="size-pick-div">
                                        <input 
                                            type="radio" 
                                            name="sizes-btn" 
                                            id="color-1" 
                                            checked={selectedColor === "Brown"}
                                            onChange={() => setSelectedColor("Brown")}
                                        />
                                        <label htmlFor="color-1" className="sizes">Brown</label>
                                        <input 
                                            type="radio" 
                                            name="sizes-btn" 
                                            id="color-2" 
                                            checked={selectedColor === "Black"}
                                            onChange={() => setSelectedColor("Black")}
                                        />
                                        <label htmlFor="color-2" className="sizes">Black</label>
                                        <input 
                                            type="radio" 
                                            name="sizes-btn" 
                                            id="color-3" 
                                            checked={selectedColor === "White"}
                                            onChange={() => setSelectedColor("White")}
                                        />
                                        <label htmlFor="color-3" className="sizes">White</label>
                                        <input 
                                            type="radio" 
                                            name="sizes-btn" 
                                            id="color-4" 
                                            checked={selectedColor === "Vani"}
                                            onChange={() => setSelectedColor("Vani")}
                                        />
                                        <label htmlFor="color-4" className="sizes">Vani</label>
                                    </div>

                                </div>
                                <div className="box-descript widget-product">
                                    <h3>Description </h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea optio ab rem rerum iure. Quae laboriosam voluptas sapiente aliquid quasi similique laborum voluptatem odit? Incidunt iure.</p>
                                </div>
                                <div className="box-descript widget-product">
                                    <h3>Specifications</h3>
                                    <ul className="tech-info__list">
                                        <li>Regular fit</li>
                                        <li>Material: Mesh + Chrome Plated Base</li>
                                        <li>Dimension: L15.75″ x W17.75″ x H29.5″</li> 
                                        <li>Product code: GW0488</li>
                                    </ul>
                                </div>
                                <div className="box-descript widget-product">
                                    <h3>SHIPPING & RETURN</h3>
                                    <p>Complimentary shipping<br/> Personalized items might take longer to ship. For more details view <a href="#" target="_blank" title="ORDERS &amp; SHIPPING"> Shipping and Delivery section.</a></p>
                                    <p>Free returns on all orders. Please bear in mind that we do not accept returns on certain items. For more information, please read our <a href="#" target="_blank" title="Returns &amp; Refunds">Return Policy. </a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="product-content-section section-line">
                <div className="el-1">
                    <Image src={dt1} alt="" />
                </div>
                <div className="el-2">
                    <Image src={dt2} alt="" />
                </div>
                <div className="container-custom">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-10">
                            <div className="content-big anim-fadein">
                                <h2>Product Content</h2>
                            </div>
                            <div className="content anim-fadein">
                                <p>Lorem ipsum dolor sit amet consectetur. Maecenas blandit adipiscing a morbi at senectus. Tristique mauris sed porttitor cras donec feugiat diam. Morbi faucibus risus vel velit. Nisl donec a dictum consectetur. Quis mattis fringilla in cursus eget sapien egestas nec enim. Non lectus et nisl porttitor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
