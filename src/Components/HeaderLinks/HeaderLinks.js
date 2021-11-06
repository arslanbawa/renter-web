import React from 'react'
import styles from './HeaderLinks.module.css'
import 'font-awesome/css/font-awesome.min.css';

export default function HeaderLinks() {
    return (
            <div className={styles.social_media_icons}>
                <div className={styles.text_wrapper}>
                    <h2>Welcome to <span>RENTER</span> </h2>
                </div>
                <div className={styles.icons_wrapper}>
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-whatsapp"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-pinterest"></i>
                </div>
            </div>
    )
}
