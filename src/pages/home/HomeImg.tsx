"use client";
import { FadeInSection } from "@/components/scrollEffects";
import ZoomInSection from "@/components/zoomInEffect";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function HomeImg ( { onLoaded }: { onLoaded: () => void }) {
    const [img, setImgData] = useState<any | null>(null);
        
    useEffect(() => {
        fetch("/json/contentHome.json")
            .then((res) => res.json())
            .then((data) => {
                setImgData(data.homeimg);
                onLoaded();
            });
    }, [onLoaded]);

    if (!img) {
        return <p>Loading...</p>;
    }
    return (
        <section className="home-img-section section-line">
            <div className="container-custom">
                <div className="row">
                    <div className="col-md-auto align-self-center">
                        <FadeInSection className="content-big text-end anim-fadein">
                            <h3>{img.subtitle}</h3>
                            <h2>{img.title}</h2>
                        </FadeInSection>
                    </div>
                    <div className="col">
                        <div className="home-img-title">
                            <ZoomInSection>
                                <Image className="anim-zoomin" src={img.image1} alt="" fill sizes="1200px" />
                            </ZoomInSection>
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="home-img-big">
                            <ZoomInSection>
                                <Image className="anim-zoomin" src={img.image2} alt="" fill sizes="1200px" />
                            </ZoomInSection>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}