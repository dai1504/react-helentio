'use client'
import Link from 'next/link'
import Image from 'next/image'
import NavMenu from './NavMenu';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import ButtonSite from '../button/button';
import { useCart } from '@/lib/cartContext';
import { useGsapFadeIn } from '../useGsapFadeIn';

export default function Header() {
    const [open, setOpen] = useState(false);
    const [navLit, setNavLit] = useState(false);
    const { state, toggleCart, closeCart, removeItem, getTotalItems, getTotalPrice } = useCart();
    
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
                        <div className="cart-btn" onClick={toggleCart}>
                            <i className="fal fa-cart-shopping"></i>
                            <span>Shopping Cart</span>
                            <span className="cart-number">{getTotalItems()}</span>
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

                <div className={clsx("cart-container", { 'open': state.isOpen })}>
                    <div className="cart-title">
                        <h3>Cart</h3>
                        <div className="cart-close" title="Close" onClick={closeCart}><i className="fas fa-times"></i></div>
                    </div>
                    <div className="cart-list">
                        {state.items.length === 0 ? (
                            <div className="empty-cart">
                                <p>Your cart is empty</p>
                            </div>
                        ) : (
                            <ul>
                                {state.items.map((item) => (
                                    <li key={item.id}>
                                        <div className="cart-item"> 
                                            <Link href={`/products/${item.id}`} className="cart-item-img"> 
                                                <Image src={item.image} alt={item.title} width={50} height={50} /> 
                                            </Link>
                                            <div className="cart-item-info">
                                                <div className="cart-item-cate"> <span>{item.category || 'Product'}</span> </div> 
                                                <Link href={`/products/${item.id}`} className="cart-item-title"> {item.title} </Link>
                                                <div className="cart-item-price"> <span>{item.price}</span> </div>
                                                {item.color && (
                                                    <div className="cart-item-color"> <span>Color: {item.color}</span> </div>
                                                )}
                                                <div className="cart-item-quantity"> <span>Qty: {item.quantity}</span> </div>
                                            </div>
                                            <div className="cart-remove"> 
                                                <div className='cursor-pointer' onClick={(e) => { e.preventDefault(); removeItem(item.id); }}> 
                                                    <i className="fal fa-trash-alt"></i> 
                                                </div> 
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    {state.items.length > 0 && (
                        <div className="cart-button">
                            <div className="text">
                                <h4>Subtotal:</h4> <span>${getTotalPrice().toFixed(2)}</span>
                            </div>
                            <div className="btn-group"> 
                                <button type="submit">Checkout</button> 
                                <a href="#" className="btn-site ar-top"> <span className="btn-t">View Cart</span> <span className="btn-ic"><i className="fal fa-arrow-right"></i></span></a>
                            </div>
                        </div>
                    )}
                </div>
                <div className={clsx("body-overlay", { 'opened': state.isOpen })} onClick={closeCart}></div>

        </>
    );
}
