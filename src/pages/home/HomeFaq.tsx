"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FadeInSection } from "@/components/scrollEffects";
import ZoomInSection from "@/components/zoomInEffect";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

gsap.registerPlugin(ScrollTrigger);

export default function FaqSection({ onLoaded }: { onLoaded: () => void }) {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/json/faq.json")
      .then((res) => res.json())
      .then((data) => {
        setFaqs(data.faqs);
        setIsLoading(false);
        onLoaded();
      });
  }, [onLoaded]);


  return (
    <section className="home-faq-section section-line">
      <div className="row">
          <div className="col-12">
              <FadeInSection className="content-big anim-fadein">
                  <h3>FAQ</h3>
                  <h2>ANSWERS</h2>
              </FadeInSection>
          </div>
      </div>
      <div className="faq-wrapper">
          <div className="row gx-0">
              <div className="col-md-6 d-flex">
                  <div className="faq-accordition">
                      <div className="accordion" id="accordionFaq">
                        {!isLoading && faqs.map((faq, index) => (
                          <FadeInSection className="accordion-item anim-fadein" key={faq.id}>
                            <h2 className="accordion-header" id={`heading-${faq.id}`}>
                              <button
                                className={`accordion-button ${
                                  index !== 0 ? "collapsed" : ""
                                }`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse-${faq.id}`}
                                aria-expanded={index === 0 ? "true" : "false"}
                                aria-controls={`collapse-${faq.id}`}
                              >
                                {faq.question}
                                <span>
                                  <i className="fal fa-arrow-right"></i>
                                </span>
                              </button>
                            </h2>
                            <div
                              id={`collapse-${faq.id}`}
                              className={`accordion-collapse collapse ${
                                index === 0 ? "show" : ""
                              }`}
                              aria-labelledby={`heading-${faq.id}`}
                              data-bs-parent="#accordionFaq"
                            >
                              <div className="accordion-body">{faq.answer}</div>
                            </div>
                          </FadeInSection>
                        ))}
                      </div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="faq-img">
                      <ZoomInSection>
                          <Image className="anim-zoomin" src="/images/home/6.jpg" alt="" fill sizes="1200px"/>
                      </ZoomInSection>
                  </div>
              </div>
          </div>
      </div>
  </section>
  );
}
