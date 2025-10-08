'use client'
import styles from './style.module.scss'
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp } from './animation';
import { motion } from 'framer-motion';
import GlobeScene from '../GlobeScene';

export default function Home() {

  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(slider.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  const cities = "Udaipur - Ahmedabad - Jaipur - Delhi - Mumbai - Surat - Vadodara - Jodhpur";

  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
      <div className={styles.contentWrapper}>
        <div data-scroll data-scroll-speed={0.1} className={styles.description}>
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
          </svg>
          <h2>Kia Tourism and Hotels</h2>

          <h1>Plan. Book. Celebrate. </h1>
          <h3>Travel with Ease with our curated Travel Packages</h3>

          <ul>
            <li>Events & Weddings</li>
            <li>FIT / JIT Bookings</li>
            <li>Transportation</li>
            <li>Destinations / Experiences</li>
          </ul>
          
          <div className={styles.btnDiv}>
            <button className={styles.button}><a href="">Contact US</a></button>
            <button className={styles.button}><a href="">About US</a></button>
          </div>
        </div>

        <div className={styles.globeContainer}>
          <GlobeScene />
        </div>

        <div className={styles.sliderContainer}>
          <div ref={slider} className={styles.slider}>
            <p>{cities} - </p>
            <p>{cities} - </p>
            <p>{cities} - </p>
          </div>
        </div>
      </div>
    </motion.main>
  )
}
