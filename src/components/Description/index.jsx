import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
export default function index() {

    const phrase = "At Kia Tourism & Hotels, we believe travel and hospitality should be seamless, memorable, and stress-free. With years of experience in tourism and event management, we specialize in bringing together everything you need under one roof—luxurious hotel stays, grand weddings, corporate events, and reliable transportation.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>Whether it’s a boardroom meeting, a destination wedding, or a leisure getaway, we go the extra mile to ensure every detail is handled with care, professionalism, and a touch of luxury.</motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p>About Us</p>
                    </Rounded>
                </div>
            </div>
        </div>
    )
}
