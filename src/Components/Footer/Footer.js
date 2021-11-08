import React from 'react'
import styles from './Footer.module.css'
import email_icon from '../../images/email_icon.png'
import play_store from '../../images/play_store.png'
import app_store from '../../images/app_store.png'
export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.container}>
                <div className={styles.head_office_details}>
                    <h6> HEAD OFFICE </h6>
                    <p>
                        <span>#1, Oladele Olashore Street, Off Sanusi Fafunwa</span>
                         Street, Victoria Island, Lagos State, Nigeria
                    </p>
                    <p>
                        +234 908 733 1440 helpdesk@suntrustng.com
                    </p>
                    <p className={styles.head_office_text}>
                        <span>NEWSLETTER SUBSCRIPTION</span>
                        Enter your email address below and we'll keep you updated on new release and sales.
    
                    </p>
    
                </div>
                <div className={styles.footer_nav}>
                    
                    <nav className={styles.nav_padding}>
                        <p>OUR COMPANY</p>
                        <li>About SunTrust</li>
                        <li>Board of Directors</li>
                        <li>Management</li>
                        <li>Results</li>
                        <li>Career</li>
                    </nav>
    
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.social_media }>
                    <p>FOLLOW US</p>
                    <div className={styles.icons_wrapper}>
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-whatsapp"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-pinterest"></i>
                    </div>
                </div>
                <div className={styles.store_logo}>
                <ul className={styles.links_wrapper}>
                    <li className={styles.links_li_wrapper}>
                        <div className={styles.download}>
                        <i className="fa fa fa-android fa-3x"></i>
                        <span className={styles.df}>Download from</span>
                        <span className={styles.dfn}>Google Play</span>
                        </div>
                    </li>
                    <li className={styles.links_li_wrapper}>
                        <div className={styles.download}>
                        <i className="fa fa fa-apple fa-3x"></i>
                        <span className={styles.df}>Download from</span>
                        <span className={styles.dfn}>App Store</span>
                        </div>
                    </li>
                    <li className={styles.links_li_wrapper}>
                        <div className={styles.download}>
                        <i class="fa fa fa-windows fa-3x"></i>
                        <span className={styles.df}>Download from</span>
                        <span className={styles.dfn}>Windows Store</span>
                        </div>
                    </li>
                    </ul>
    
                </div>
            </div>
            <div className={styles.privacy_policy}>
                <div className={styles.container}>
                    <p>© 2021 SunTrust Bank | Privacy Policy | Cookie Policy | Terms of Use </p>
                </div>
    
            </div>
        </footer>
    )
}
