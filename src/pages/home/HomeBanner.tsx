'use client';
import Image from "next/image";
import bannerEl1 from "../../../public/images/banner/el-1.png";
import bannerEl2 from "../../../public/images/banner/el-2.png";
import { useEffect, useState } from "react";
export default function HomeBanner({ onLoaded }: { onLoaded: () => void }) {
    const [banner, setBannerData] = useState<any | null>(null);
    
    useEffect(() => {
    fetch("/json/contentHome.json")
        .then((res) => res.json())
        .then((data) => {
            setBannerData(data.homebanner);
            onLoaded();
        });
    }, [onLoaded]);

    if (!banner) {
        return <p>Loading...</p>;
    }

    return (
        <section className="home-banner section-line">
            <div className="el-1">
                <Image src={bannerEl1} alt=""/>
            </div>
            <div className="el-2">
                <Image src={bannerEl2} alt=""/>
            </div>
            <div className="container-custom">
                <div className="row mb-5">
                    <div className="col-md-7">
                        <div className="home-banner-text __1">
                            <h1>{banner.contentBig1}</h1>
                            <h3>{banner.contentSmall1}</h3>
                        </div>
                        
                    </div>
                    <div className="col-md-5">
                        <div className="home-banner-img __1">
                            <Image src={banner.image1} alt="" fill sizes="1200px"/>
                        </div>
                    </div>
                </div>
                <div className="row flex-md-row-reverse">
                    <div className="col-md-5">
                        <div className="home-banner-text __2">
                            <h3>{banner.contentSmall2}</h3>
                            <h1>{banner.contentBig2}</h1>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="home-banner-img __2">
                            <Image src={banner.image2} alt="" fill sizes="1200px"/>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </section>
    );
}