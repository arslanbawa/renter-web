import React from 'react'
import styles from './Logo.module.css'
import renter_logo from '../../images/renter_logo.png'

export default function Logo() {
    return (
            <div className={styles.logo_wrapper}>
                <div className={styles.contact_us_links}>
                    <i className="fa fa-phone"><a>+92 3051316618..</a></i> 
                    <i className="fa fa-envelope"><a>bawa@gmail.com..</a></i> 
                </div>
                <div className={styles.logo}>
                    <img src={renter_logo} />
                </div>
                <div className={styles.contact_us}>
                    <i className="fa fa-map"></i> Contct Us
                </div>
            </div>
    )
}
