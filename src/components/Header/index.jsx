'use client';
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import Button from './Button';
import styles from './style.module.scss';
import Nav from './Nav';
import Link from 'next/link';

export default function Header() {
    const [isActive, setIsActive] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const width = window.innerWidth;
            if (width <= 480) {
                setIsMobile('small');
            } else if (width <= 768) {
                setIsMobile('medium');
            } else {
                setIsMobile(false);
            }
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const getMenuDimensions = () => {
        if (isMobile === 'small') {
            return { width: "90vw", height: "450px" };
        } else if (isMobile === 'medium') {
            return { width: "85vw", height: "520px" };
        }
        return { width: "480px", height: "650px" };
    };

    const menuDimensions = getMenuDimensions();

    const menu = {
        open: {
            width: menuDimensions.width,
            height: menuDimensions.height,
            top: "-25px",
            right: "-25px",
            transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]}
        },
        closed: {
            width: "100px",
            height: "40px",
            top: "0px",
            right: "0px",
            transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}
        }
    };

    return (<>
      <Link href="/" className='block'>  <div  className={styles.logo}><img src="/images/kia_logo.png" alt="kia logo" /></div></Link>

        <div className={styles.header}>
            
            <motion.div 
                className={styles.menu}
                variants={menu}
                animate={isActive ? "open" : "closed"}
                initial="closed"
            >
                <AnimatePresence>
                    {isActive && <Nav setIsActive={setIsActive} />}
                </AnimatePresence>
            </motion.div>
            <Button isActive={isActive} toggleMenu={() => {setIsActive(!isActive)}}/>
        </div>
        </>
    )
}
