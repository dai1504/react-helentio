'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import collectionEl1 from "../../../public/images/home/el-3.png";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
interface CollectionItem {
    id: string;
    title: string;
    url: string;
    image: string;
}
export default function HomeCollection() {
    const [collectionData, setCollectionData] = useState<CollectionItem[]>([]);

    useEffect(() => {
    fetch("/json/collection.json")
        .then((res) => res.json())
        .then((data) => setCollectionData(data.collection));
    }, []);
    
    return (
        <section className="home-collection-section section-line">
            <div className="el">
                <Image src={collectionEl1} alt="" />
            </div>
            <div className="container-custom">
                <div className="row justify-content-between">
                    <div className="col-md-4 align-self-end">
                        <div className="content anim-fadein">
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Maecenas blandit adipiscing a morbi at senectus. Tristique mauris sed porttitor cras donec feugiat diam. 
                                <br/><br/>
                                Morbi faucibus risus vel velit. Nisl donec a dictum consectetur. Quis mattis fringilla in cursus eget sapien egestas nec enim. Non lectus et nisl porttitor.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="content-big anim-fadein">
                            <h3>GATHER</h3>
                            <h2>SANCTUARY</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-custom">
                <div className="col-12">
                    <div className="collection-slide anim-fadein">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            slidesPerView={1}
                            spaceBetween={40}
                            speed={2000}
                            watchSlidesProgress={true}
                            breakpoints={{
                                992: {
                                    slidesPerView: 'auto',
                                    spaceBetween: 100,
                                    
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                    
                                },
                                600: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                    
                                },
                                576: {
                                    slidesPerView: 1,
                                    spaceBetween: 40,
                                    
                                },
                        
                            }}
                            
                        
                            pagination={{
                                el: '.collection-pagination',
                                clickable: true,
                                dynamicBullets: true,
                                dynamicMainBullets: 2
                            }}
                        
                            navigation={{
                                nextEl: '.collection-btn-next',
                                prevEl: '.collection-btn-prev'
                            }}
                            >
                            
                            {collectionData.map((collection, index) => (
                                <SwiperSlide key={index}>
                                    <a href={collection.url} className={`collection-card ${index % 2 === 1 ? "__2" : "__1"}`}>
                                        <div className="collection-card-img">
                                            <Image src={collection.image} alt="" fill sizes="1000px" />
                                        </div>
                                        <div className="collection-card-content">
                                            <h3>{collection.title}</h3>
                                        </div>
                                    </a>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="line-bottom"></div>
        </section>
    );
}