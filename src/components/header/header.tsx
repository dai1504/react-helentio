'use client'
import Link from 'next/link'
import Image from 'next/image'
import NavMenu from './NavMenu';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import ButtonSite from '../button/button';

export default function Header() {
    const [open, setOpen] = useState(false);
    const [navLit, setNavLit] = useState(false);

    const toggleMenu = () => {
        setOpen((prev) => !prev);
        setNavLit((prev) => !prev);
    };

    return (
        <>
            <header className={clsx("site-header", { 'navlit': navLit })}>
                <div className="site-header-wrapper">
                    <div className="logo-header">
                        <div className="site-header-logo">
                            <Link href="/">
                                <Image src="/images/logo/logo-w.svg" alt="Logo" width={200} height={50} />
                            </Link>
                        </div>
                    </div>
                    <div className="page-title-menu"></div>
                    <div className="site-header-btn-right">
                        <div className="cart-btn">
                            <i className="fal fa-cart-shopping"></i>
                            <span>Shopping Cart</span>
                            <span className="cart-number">2</span>
                        </div>
                        <div className={clsx("navbar_hamburger", { 'open': open })} onClick={toggleMenu}>
                            <div className="navbar_hamburger-inner">
                                <div className="navbar_line is-1">
                                    <div className="navbar_line-fill is-1"></div>
                                </div>
                                <div className="navbar_line is-2">
                                    <div className="navbar_line-fill is-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className={clsx("menu-header-container", { 'open': open })} data-lenis-prevent>
                <div className="header-container">
                    <div className="container-custom">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="menu-links">
                                    <NavMenu />
                                </div>
                            </div>
                            <div className="col-lg-4 d-flex align-items-end">
                                <div className="cont-info full-width">
                                    <div className="item">
                                        <h5 className="mb-15">Get In Touch</h5>
                                        <p className="mb-1"><i className="fal fa-map-marker-alt"></i>New York, NY </p>
                                        <p className="mt-1 mb-1"><i className="fal fa-phone-alt"></i> <a href="tel:+1 (234) 528-9288">+1 (234) 528-9288</a></p>
                                        <p><i className="fal fa-envelope"></i> <a href="mailto:info@helentio.com">info@helentio.com</a></p>
                                    </div>
                                    <div className="search-form">
                                        <p>Enter your name and email address below.</p>
                                        <div className="form-group">
                                            <div className="ip-box">
                                                <input type="tel" name="phone" placeholder="Your Phone" />
                                            </div>
                                            <div className="ip-box">
                                                <input type="email" name="search" placeholder="Your Email" />
                                            </div> 
                                        </div>
                                        <ButtonSite text={'Submit'} styleButton='arTop' />
                                       
                                    </div>
                                    <ul className="social-text">
                                        <li>
                                            <a href="#" className="hover-this">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="hover-this">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <div className="cart-container">
                    <div className="cart-title">
                        <h3>Cart</h3>
                        <div className="cart-close" title="Close"><i className="fas fa-times"></i></div>
                    </div>
                    <div className="cart-list">
                        <ul>
                            <li>
                                <div className="cart-item"> 
                                    <a href="#" className="cart-item-img"> 
                                        <Image src="/images/product/1.png" alt="" layout="intrinsic" width={50} height={50} /> 
                                    </a>
                                    <div className="cart-item-info">
                                        <div className="cart-item-cate"> <span>Wine</span> </div> 
                                        <a href="#" className="cart-item-title"> LUCTUSON CHARDONNAY </a>
                                        <div className="cart-item-price"> <span>$99.00</span> </div>
                                    </div>
                                    <div className="cart-remove"> <a href="#"> <i className="fal fa-trash-alt"></i> </a> </div>
                                </div>
                            </li>
                            <li>
                                <div className="cart-item"> 
                                    <a href="#" className="cart-item-img"> 
                                        <Image src="/images/product/2.png" alt="" layout="intrinsic" width={50} height={50} /> 
                                    </a>
                                    <div className="cart-item-info">
                                        <div className="cart-item-cate"> <span>Wine</span> </div> 
                                        <a href="#" className="cart-item-title"> NEW CABERNET SAUVIGNON </a>
                                        <div className="cart-item-price"> <span>$99.00</span> </div>
                                    </div>
                                    <div className="cart-remove"> <a href="#"> <i className="fal fa-trash-alt"></i> </a> </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="cart-button">
                        <div className="text">
                            <h4>Subtotal:</h4> <span>$40.00</span>
                        </div>
                        <div className="btn-group"> 
                            <button type="submit">Checkout</button> 
                            <a href="#" className="btn-site ar-top"> <span className="btn-t">View Cart</span> <span className="btn-ic"><i className="fal fa-arrow-right"></i></span></a>
                        </div>
                    </div>
                </div>
            

        </>
    );
}
