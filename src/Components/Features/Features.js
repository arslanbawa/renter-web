import React from 'react'
import styles from './Features.module.css'
import current_account from '../../images/current_account.png'

export default function Features() {
    return (
        <section className={styles.acconts_details}>
        <div className={styles.container}>
            
                    <div className={styles.acconts_inner_wrapper }>
                        <img src={current_account} alt="" />
                        <div className={styles.content_wrapper}>
                            <p className={styles.headings}>
                                Create An Account
                            </p>
                            <p className={styles.details}>
                                Open our charge-free Owner/Renter account. 
                            </p>
                        </div>

                    </div>
                    <div className={styles.acconts_inner_wrapper }>
                        <img src={current_account} alt="" />
                        <div className={styles.content_wrapper}>
                            <p className={styles.headings}>
                                Rent Out Property
                            </p>
                            <p className={styles.details}>
                                We offers you fantastic services.
                            </p>
                        </div>

                    </div>
                    <div className={styles.acconts_inner_wrapper }>
                        <img src={current_account} alt="" />
                        <div className={styles.content_wrapper}>
                            <p className={styles.headings}>
                                One On One Meeting
                            </p>
                            <p className={styles.details}>
                                Join our ethical banking offerings..
                            </p>
                        </div>

                    </div>
                    <div className={styles.acconts_inner_wrapper} >
                        <img src={current_account} alt="" />
                        <div className={styles.content_wrapper}>
                            <p className={styles.headings}>
                               Pay Your Rent
                            </p>
                            <p className={styles.details}>
                                Join our ethical banking offerings.  
                            </p>
                        </div>

                    </div>
                    <div className={styles.acconts_inner_wrapper} >
                        <img src={current_account} alt="" />
                        <div className={styles.content_wrapper}>
                            <p className={styles.headings}>
                                Pay your Bills
                            </p>
                            <p className={styles.details}>
                                Account is to help customers in AgriBuinseses. 
                            </p>
                        </div>

                    </div>
                    <div className={styles.acconts_inner_wrapper }>
                        <img src={current_account} alt="" />
                        <div className={styles.content_wrapper}>
                            <p className={styles.headings}>
                                Create Reviews
                            </p>
                            <p className={styles.details}>
                                Made for the upwardly mobile youths.
                            </p>
                        </div>

                    </div>
          
        </div>

    </section>
    )
}
