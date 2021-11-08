import React from 'react'
import styles from './Banner.module.css'
import play_store from '../../images/play_store.png'
import app_store from '../../images/app_store.png'
import qr_code from '../../images/qr_code.png'

export default function Banner() {
    return (
        <div className={styles.banner_background_image}>
                <div className={styles.banner_text_wrapper}>
                    <h2>Smart renting out with Renter.</h2>
                <p>At Renter you will find everything to rent or rent without worries!</p>
                 </div>
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
    )
}
