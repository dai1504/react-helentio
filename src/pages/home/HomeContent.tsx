"use client";
import Image from "next/image";
import contentEl1 from "../../../public/images/home/el-1.png";
import contentEl2 from "../../../public/images/home/el-2.png";
import ButtonSite from "@/components/button/button";
import { FadeInSection } from "@/components/scrollEffects";
import ZoomInSection from "@/components/zoomInEffect";
import { useEffect, useState } from "react";


export default function HomeContent({ onLoaded }: { onLoaded: () => void }) {
    const [content, setContentData] = useState<any | null>(null);
            
    useEffect(() => {
        fetch("/json/contentHome.json")
            .then((res) => res.json())
            .then((data) => {
                setContentData(data.homecontent);
                onLoaded();
            });
    }, [onLoaded]);

    if (!content) {
        return <p>Loading...</p>;
    }
    return (
        <section className="home-content-section section-line">
            <div className="el-1">
                <Image src={contentEl1} alt=""/>
            </div>
            <div className="el-2">
                <Image src={contentEl2} alt=""/>
            </div>
            <div className="container-custom">
                <div className="row gx-5">
                    <div className="col-md-4">
                        <div className="home-content-img">
                            <ZoomInSection>
                                <Image className="anim-zoomin" src={content.image1} alt="" fill sizes="1200px"/>
                            </ZoomInSection>
                            
                        </div>
                    </div>
                    <div className="col-md-4">
                        <FadeInSection className="anim-fadein">
                            <div className="content __1">
                                <h2>{content.title}</h2>
                                <p>{content.desc1}</p>
                            </div>
                        </FadeInSection>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1"></div>

                    <div className="col-md-7">
                        <div className="home-content-img-2">
                            <ZoomInSection>
                                <Image className="anim-zoomin" src={content.image2} alt="" fill sizes="1200px"/>
                            </ZoomInSection>
                            
                            
                        </div>
                    </div>
                    <div className="col-md-4 align-self-end">
                        <FadeInSection className="anim-fadein">
                            <div className="content __2">
                                <p dangerouslySetInnerHTML={{ __html: content.desc2 }}></p>
                                <ButtonSite text={content.btnText} href={content.btnLink} styleButton="arTop" />
                            </div>
                        </FadeInSection>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}