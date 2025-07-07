'use client'
import Link from 'next/link'
import Image from 'next/image'
import FooterLogo from "../../../public/images/logo-footer.svg";
import PaymenLg1 from "../../../public//images/p-1.svg";
import { useEffect, useState } from 'react';
interface Payment {
    id: string;
    src: string;
    alt: string;
}
  
export default function Footer() {
    const [payments, setPayments] = useState<Payment[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("/json/paymentMethods.json")
        .then((res) => res.json())
        .then((data) => {
            setPayments(data.payments);
            setIsLoading(false);
        });
    }, []);

    return (
        <footer className="site-footer">
            <div className="site-footer-line">
                <div className="site-footer-top">
                    <div className="row gx-0">
                        <div className="col-md-6 d-flex">
                            <div className="site-footer-box">
                                <div className="site-footer-title">
                                    <h3>Contact</h3>
                                </div>
                                <div className="site-footer-info">
                                    <div className="sfi-item"><a href="mailto:info@helentio.com">info@helentio.com</a></div>
                                    <div className="sfi-item"><a href="tel:+93 (21) 2883 2938">+93 (21) 2883 2938</a></div>
                                    <div className="sfi-item"><p>828 Timbercrest Road, Healy City, AK 99743</p></div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-md-6 d-flex">
                            <div className="site-footer-box">
                                <div className="site-footer-title">
                                    <h3>Social Media</h3>
                                </div>
                                <div className="site-footer-link-social">
                                    <a href="mailto:info@helentio.com">
                                        <i className="fab fa-facebook-f"></i>
                                        <span>Facebook</span>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-x-twitter"></i>
                                        <span>Twitter</span>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-instagram"></i>
                                        <span>Instagram</span>
                                    </a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="site-footer-mid">
                    <div className="row gx-0">
                        <div className="col-md-6 d-flex">
                            <div className="site-footer-box no-bf">
                                <div className="site-footer-title">
                                    <h3>About Us</h3>
                                </div>
                                <div className="site-footer-link">
                                    <a href="#">Our Story</a>
                                    <a href="#">Job Opportunities</a>
                                    <a href="#">Store Locator</a>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-md-6 d-flex">
                            <div className="site-footer-box no-bf">
                                <div className="site-footer-title">
                                    <h3>Helps</h3>
                                </div>
                                <div className="site-footer-link">
                                    <a href="#">FAQs</a>
                                    <a href="#">Payment Plans</a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="site-footer-bottom">
                <div className="site-footer-bottom-wrapper">
                    <div className="container-footer-logo">
                        <div className="logo-big">
                            <Image src={FooterLogo} alt="" />
                        </div>
                    </div>
                    
                    <div className="copy-right-wrapper">
                        <div className="container-footer">
                            <div className="ct-right">
                                Copyright Dotcreativemarket, All Rights Reserved
                            </div>
                            <div className="payment-list">
                                {!isLoading && payments.map((payment) => (
                                    <Image
                                    key={payment.id}
                                    src={payment.src}
                                    alt={payment.alt}
                                    width={41} // Adjust size as needed
                                    height={30}
                                    style={{ objectFit: "contain" }}
                                    />
                                ))}
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </footer>
    );
}