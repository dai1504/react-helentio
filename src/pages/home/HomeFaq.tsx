"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  useEffect(() => {
    fetch("/json/faq.json")
      .then((res) => res.json())
      .then((data) => setFaqs(data.faqs));
  }, []);

  return (
    <section className="home-faq-section section-line">
      <div className="row">
          <div className="col-12">
              <div className="content-big anim-fadein">
                  <h3>FAQ</h3>
                  <h2>ANSWERS</h2>
              </div>
          </div>
      </div>
      <div className="faq-wrapper">
          <div className="row gx-0">
              <div className="col-md-6 d-flex">
                  <div className="faq-accordition">
                      <div className="accordion" id="accordionFaq">
                        {faqs.map((faq, index) => (
                          <div className="accordion-item anim-fadein" key={faq.id}>
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
                          </div>
                        ))}
                      </div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="faq-img">
                      <Image className="anim-zoomin" src="/images/home/6.jpg" alt="" fill sizes="1200px"/>
                  </div>
              </div>
          </div>
      </div>
  </section>
  );
}
