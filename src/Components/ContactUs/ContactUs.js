import React from 'react'
import styles from './ContactUs.module.css'
export default function ContactUs() {
    return (
        <div className={styles.Contact_us_wrapper}>
        
        <div className={styles.wrapper}>
            <div className={styles.company_info}>
    
                <ul className={styles.ul_wrapper}>
                <li><i class="fa fa-road"></i> 112 Main Street</li>
                    <li><i class="fa fa-phone"></i> +92 3051316618..</li>
                    <li><i class="fa fa-envelope"></i> bawa@gmail.com..</li>
                </ul>
            </div>
        <div className={styles.contact}>
        <h3>E-mail Us</h3>

        <form id="contact-form">

            <p>
                <label>First Name</label>
                <input type="text" name="name" id="name" required />
            </p>

            <p>
                <label>Last Name</label>
                <input type="text" name="company" id="company" />
            </p>

            <p>
                <label>E-mail Address</label>
                <input type="email" name="email" id="email" required />
            </p>

            <p>
                <label>Phone Number</label>
                <input type="text" name="phone" id="phone" />
            </p>

            <p className={styles.full}>
                <label>Message</label>
                <textarea name="message" rows="5" id="message"></textarea>
            </p>

            <p className={styles.full}>
                <button type="submit">Submit</button>
            </p>

        </form>
    </div>
</div>
</div>
    )
}