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
                <div >
                    <div className={styles.app_icons}>
                        <div className={styles.icon}><a><img src={play_store} /></a></div>
                    <div className={styles.icon}><a><img src={app_store} /></a></div>
                    </div>
                    <div className={styles.app_icons}>
                        <div className={styles.icon}><a><img src={qr_code} /></a></div>
                    </div>
                </div>
                </div>
    )
}
