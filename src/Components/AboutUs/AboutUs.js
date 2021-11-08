import React from 'react'
import styles from './AboutUs.module.css'
export default function AboutUs() {
    return (
        <div className={styles.about}>
            <div className={styles.container}>
                <h6>About Renter</h6>
                <p>At Renter, we do have a good time, doing what we love, and we do love what we do</p>
                <span>
                    To serve as a trusted partner to our clients. A mission of growth and progress..
                </span>
                <button>Know More </button>
            </div>
        </div>
    )
}