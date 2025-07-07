"use client";
import Image from "next/image";
import contentEl1 from "../../../public/images/home/el-1.png";
import contentEl2 from "../../../public/images/home/el-2.png";
import ButtonSite from "@/components/button/button";


export default function HomeContent() {
    
    
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
                            <Image className="anim-zoomin" src="/images/home/1.jpg" alt="" fill sizes="1200px"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="content __1 anim-fadein">
                            <h2>Crafting Comfort, One Piece at a Time</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Maecenas blandit adipiscing a morbi at senectus. Tristique mauris sed porttitor cras donec feugiat diam.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1"></div>

                    <div className="col-md-7">
                        <div className="home-content-img-2">
                            <Image className="anim-zoomin" src="/images/home/2.jpg" alt="" fill sizes="1200px"/>
                            
                        </div>
                    </div>
                    <div className="col-md-4 align-self-end">
                        <div className="content __2 anim-fadein">
                            <p>Lorem ipsum dolor sit amet consectetur. Maecenas blandit adipiscing a morbi at senectus. Tristique mauris sed porttitor cras donec feugiat diam. Morbi faucibus risus vel velit. Nisl donec a dictum consectetur. Quis mattis fringilla in cursus eget sapien egestas nec enim. Non lectus et nisl porttitor. <br/><br/>Phasellus pellentesque egestas ac egestas. Turpis dictum fusce urna posuere diam bibendum nisi vestibulum. Tincidunt aliquet non gravida id maecenas eu. A bibendum sit eget ac pellentesque. Dignissim nibh enim est tortor.</p>
                            <ButtonSite text="Find out more" href="#" styleButton="arTop" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}