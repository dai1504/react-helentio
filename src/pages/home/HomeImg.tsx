
import Image from "next/image";
export default function HomeImg () {
    return (
        <section className="home-img-section section-line">
            <div className="container-custom">
                <div className="row">
                    <div className="col-md-auto align-self-center">
                        <div className="content-big text-end anim-fadein">
                            <h3>STYLE</h3>
                            <h2>MEETS COMFORT</h2>
                        </div>
                    </div>
                    <div className="col">
                        <div className="home-img-title">
                            <Image className="anim-zoomin" src="/images/home/3.jpg" alt="" fill sizes="1200px" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="home-img-big">
                            <Image className="anim-zoomin" src="/images/home/4.jpg" alt="" fill sizes="1200px" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}