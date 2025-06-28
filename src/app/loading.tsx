'use client'

import { useEffect } from 'react';
import $ from 'jquery';
import imagesLoaded from 'imagesloaded';
import gsap from "gsap";
import Image from "next/image";
export default function Loading() {
    useEffect(() => {
        function PageLoad() {
            function initOnFirstLoad() {
                imagesLoaded('body', function() {
                    gsap.set($("#main"), {opacity: 0});
                    gsap.to("#preload .logo",0.25, {
                        delay: 0.5,
                        opacity: 0,
                        onComplete: function() {
                            gsap.to("#preload .logo", {
                                zIndex: -1,
                            })
                        }
                    
                    });
                    gsap.to("#preload .counter",0.25, {
                        delay: 0.5,
                        opacity: 0,
                        onComplete: function() {
                            gsap.to("#preload .counter", {
                                zIndex: -1,
                            })
                        }
                    
                    });
                    gsap.to(".bar", 1.5,{
                        delay: 0.5,
                        height: 0,
                        stagger :{
                            amount: 0.5,
                        },
                        ease: "power4.inOut",
                        onComplete: function() {
                            
                            $('body').addClass("header-visible");
                            
                        }
                    });
                    gsap.to(".overlay", 1.5,{
                        delay: 1,
                        zIndex: -1,
                    });	
                    gsap.to("#preload", 1.6,{
                        delay: 1.5,
                        zIndex: -1,
                    });	  
             
                    
                });
            }   
            
        
            if (!$('body').hasClass("no-loading")) {
                
                var height = 0,
                    perfData = window.performance.timing, 
                    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
                    time = ((EstimatedTime/100)%500) * 10
                    
                // Loadbar Animation
                $(".loadbar").animate({
                    height: height + "%"
                }, time  );	
                
                // // Percentage Increment Animation
                var PercentageID = $("#precent"),
                        start = 0,
                        end = 100,
                        durataion = time + 0;
                        animateValue(PercentageID, start, end, durataion);
                        
                function animateValue(id, start, end, duration) {
                  
                    var range = end - start,
                      current = start,
                      increment = end > start? 1 : -1,
                      stepTime = Math.abs(Math.floor(duration / range)),
                      obj = $(id);
                    
                    var timer = setInterval(function() {
                        current += increment;
                        $(obj).text(current);
                      //obj.innerHTML = current;
                        if (current == end) {
                            clearInterval(timer);
                        }
                    }, stepTime);
                }
                
                // Fading Out Loadbar on Finised
                setTimeout(function(){				
                    initOnFirstLoad();						  
                }, time);
            
            } else {			
                initOnFirstLoad();
            }
        }
        $(document).ready(function() {
            PageLoad();
        })
    }, [])
    
    return (
        <div id="preload">
            <div className="logo">
                <div className="loadbar"></div>
                <Image src="/images/logo/logo-w.svg" alt="Logo" fill />
            </div>
            <h6 className="counter" id="precent">0</h6>
            
            <div className="overlay">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
      </div>
    );
}