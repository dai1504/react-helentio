
import fs from "fs/promises";
import path from "path";
import Image from "next/image";
import { notFound } from "next/navigation";
import dt1 from "../../../../public/images/home/el-1.png";
import dt2 from "../../../../public/images/home/el-2.png";
import bg from "../../../../public/images/home/2.jpg";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
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

// Fetch product data
async function getProduct(id: string): Promise<Product | null> {
    try {
      const filePath = path.join(process.cwd(), "public", "json/products.json");
      const jsonData = await fs.readFile(filePath, "utf-8");
      const products: Product[] = JSON.parse(jsonData).product;
      return products.find((p) => p.id === id) || null;
    } catch (error) {
      console.error("Error loading product data:", error);
      return null;
    }
}

// Product Detail Page
export default async function ProductDetail({ params }: { params: { detail: string } }) {
    const product = await getProduct(params.detail);

    if (!product) {
      return notFound();
    }
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      handleResize(); // Initial check
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
    <div className="">
                        {isMobile ? (
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
                        ):(
                            <div className="swiper swiper-container  swiper-product-detail">
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
};
