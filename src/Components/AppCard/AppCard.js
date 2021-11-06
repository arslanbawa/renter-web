import React from 'react'
import styles from './AppCard.module.css'
import android_app from '../../images/android_app.png'
import ios_app from '../../images/ios_app.png'

export default function AppCard() {
    return (
        <div className={styles.card_wrapper}>
                <div className={styles.Card1} >
                    {/* <div className={styles.photo}></div> */}
                    <div className={styles.details}>
                      <h4>Download Renter app</h4>
                        <div className={styles.card_icons_wrapper} >
                            <div><a><img src={android_app} /></a></div>
                        <div><a><img src={ios_app} /></a></div>
                        </div>
                    </div>
                    <div className={styles.description}>
                      <div className={styles.line}>
                        <h1 className={styles.product_name}>Mobile and on your laptop</h1>
                      </div>
                      <h2>With Renter</h2>
                      <p className={styles.summary}>
                        As an owner you receive the profiles digitally, so that decisions can be made in all objectivity. Moreover, you can easily integrate with your website.</p>
                      <a href="//s.codepen.io/ImagineAlex">Read More</a>
                    </div>
                  </div>
            </div>
    )
}
