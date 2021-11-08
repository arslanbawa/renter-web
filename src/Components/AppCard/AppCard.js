import React from 'react'
import styles from './AppCard.module.css'

export default function AppCard() {
    return (
     <>
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
    </ul></>
    )
}
