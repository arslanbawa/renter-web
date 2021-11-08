import React from 'react'
import styles from './Features.module.css'
import current_account from '../../images/current_account.png'

export default function Features() {
    return (
        <section className={styles.card_area}>
            
        {/* Card: City */}
         <section className={styles.card_section}>
             <div className={styles.card}>
                 <div className={styles.flip_card}>
                     <div className={styles.flip_card__container}>
                         <div className={styles.card_front}>
                             <div className={`${styles.card_front__tp} ${styles.card_front__tp_city}` }>
                                

                            <h2 className={styles.card_front__heading}>
                             City break
                         </h2>
                         <p className={styles.card_front__text_price}>
                             From £29
                         </p>
                             </div>

                             <div className={styles.card_front__bt}>
                                 <p className={styles.card_front__text_view, styles.card_front__text_view_city}>
                                     View me
                                 </p>
                             </div>
                         </div>
                         <div className={styles.card_back}>
                             <p>dddd</p>
                         </div>
                     </div>
                 </div>

                 <div className={styles.inside_page}>
                     <div className={styles.inside_page__container}>
                         <h3 className={styles.inside_page__heading, styles.inside_page__heading_city }>
                             For urban lovers
                         </h3>
                         <p className={styles.inside_page__text}>
                            As cities never sleep, there are always something going on, no matter what time!
                         </p>
                         <a href="#" className={styles.inside_page__btn, styles.inside_page__btn_city }>View deals</a>
                     </div>
                 </div>
             </div>
         </section>

         {/* Card: Ski */}
         <section className={styles.card_section}>
             <div className={styles.card}>
                 <div className={styles.flip_card}>
                     <div className={styles.flip_card__container}>
                         <div className={styles.card_front}>
                             <div className={`${styles.card_front__tp} ${styles.card_front__tp_ski}` }>
                                 
                                            <h2 className={styles.card_front__heading}>
                                                Ski trip
                                            </h2>
                                            <p className={styles.card_front__text_price}>
                                                From £199
                                            </p>
                             </div>

                             <div className={styles.card_front__bt}>
                                 <p className={styles.card_front__text_view, styles.card_front__text_view_ski }>
                                     View me
                                 </p>
                             </div>
                         </div>

                         <div className={styles.card_back}>
                             <p>12121</p>
                         </div>
                     </div>
                 </div>

                 <div className={styles.inside_page}>
                     <div className={styles.inside_page__container}>
                         <h3 className={styles.inside_page__heading, styles.inside_page__heading_ski }>
                             For snow lovers
                         </h3>
                         <p className={styles.inside_page__text}>
                            Love snow? Why not take up exciting ski-in sessions and hit the slope? 
                         </p>
                         <a href="#" className={styles.inside_page__btn, styles.inside_page__btn_ski }>View deals</a>
                     </div>
                 </div>
             </div>
         </section>

         {/* Card: Beach */}
         <section className={styles.card_section}>
             <div className={styles.card}>
                 <div className={styles.flip_card}>
                     <div className={styles.flip_card__container}>
                         <div className={styles.card_front}>
                             <div className={`${styles.card_front__tp} ${styles.card_front__tp_beach}` }>
                               
                            
                                            <h2 className={styles.card_front__heading}>
                                                Beach time
                                            </h2>
                                            <p className={styles.card_front__text_price}>
                                                From £229
                                            </p>
                             </div>

                             <div className={styles.card_front__bt}>
                                 <p className={styles.card_front__text_view , styles.card_front__text_view_beach }>
                                     View me
                                 </p>
                             </div>
                         </div>
                         <div className={styles.card_back}>
                             <p>541541</p>
                         </div>
                     </div>
                 </div>

                 <div className={styles.inside_page}>
                     <div className={styles.inside_page__container}>
                         <h3 className={styles.inside_page__heading, styles.inside_page__heading_beach }>
                             For sun lovers
                         </h3>
                         <p className={styles.inside_page__text}>
                            Relax and get sun-kissed tan in the sea or take up surfting for an adventure!
                         </p>
                         <a href="#" className={styles.inside_page__btn, styles.inside_page__btn_beach }>View deals</a>
                     </div>
                 </div>
             </div>
         </section>

         {/* Card: Camping */}
         <section className={styles.card_section}>
             <div className={styles.card}>
                 <div className={styles.flip_card}>
                     <div className={styles.flip_card__container}>
                         <div className={styles.card_front}>
                             <div className={`${styles.card_front__tp} ${styles.card_front__tp_camping}` }>
                            
                                            <h2 className={styles.card_front__heading}>
                                                Camping trek
                                            </h2>
                                            <p className={styles.card_front__text_price}>
                                                From £129
                                            </p>
                             </div>

                             <div className={styles.card_front__bt}>
                                 <p className={styles.card_front__text_view , styles.card_front__text_view_camping}>
                                     View me
                                 </p>
                             </div>
                         </div>
                         <div className={styles.card_back}>
                             <p>458</p>
                         </div>
                     </div>
                 </div>

                 <div className={styles.inside_page}>
                     <div className={styles.inside_page__container}>
                         <h3 className={styles.inside_page__heading , styles.inside_page__heading_camping}>
                             For nature lovers
                         </h3>
                         <p className={styles.inside_page__text}>
                            Get your boots on for some hiking and explore all the beautiful scenery of nature!
                         </p>
                         <a href="#" className={styles.inside_page__btn, styles.inside_page__btn_camping }>View deals</a>
                     </div>
                 </div>
             </div>
         </section>
         <section className={styles.card_section}>
             <div className={styles.card}>
                 <div className={styles.flip_card}>
                     <div className={styles.flip_card__container}>
                         <div className={styles.card_front}>
                             <div className={`${styles.card_front__tp} ${styles.card_front__tp_camping}` }>
                            
                                            <h2 className={styles.card_front__heading}>
                                                Camping trek
                                            </h2>
                                            <p className={styles.card_front__text_price}>
                                                From £129
                                            </p>
                             </div>

                             <div className={styles.card_front__bt}>
                                 <p className={styles.card_front__text_view , styles.card_front__text_view_camping}>
                                     View me
                                 </p>
                             </div>
                         </div>
                         <div className={styles.card_back}>
                             <p>125</p>
                         </div>
                     </div>
                 </div>

                 <div className={styles.inside_page}>
                     <div className={styles.inside_page__container}>
                         <h3 className={styles.inside_page__heading , styles.inside_page__heading_camping}>
                             For nature lovers
                         </h3>
                         <p className={styles.inside_page__text}>
                            Get your boots on for some hiking and explore all the beautiful scenery of nature!
                         </p>
                         <a href="#" className={styles.inside_page__btn, styles.inside_page__btn_camping }>View deals</a>
                     </div>
                 </div>
             </div>
         </section>
         <section className={styles.card_section}>
             <div className={styles.card}>
                 <div className={styles.flip_card}>
                     <div className={styles.flip_card__container}>
                         <div className={styles.card_front}>
                             <div className={`${styles.card_front__tp} ${styles.card_front__tp_camping}` }>
                            
                                            <h2 className={styles.card_front__heading}>
                                                Camping trek
                                            </h2>
                                            <p className={styles.card_front__text_price}>
                                                From £129
                                            </p>
                             </div>

                             <div className={styles.card_front__bt}>
                                 <p className={styles.card_front__text_view , styles.card_front__text_view_camping}>
                                     View me
                                 </p>
                             </div>
                         </div>
                         <div className={styles.card_back}>
                             <p>1818</p>
                         </div>
                     </div>
                 </div>

                 <div className={styles.inside_page}>
                     <div className={styles.inside_page__container}>
                         <h3 className={styles.inside_page__heading , styles.inside_page__heading_camping}>
                             For nature lovers
                         </h3>
                         <p className={styles.inside_page__text}>
                            Get your boots on for some hiking and explore all the beautiful scenery of nature!
                         </p>
                         <a href="#" className={styles.inside_page__btn,styles.inside_page__btn_camping }>View deals</a>
                     </div>
                 </div>
             </div>
         </section>  
     </section>
    )
}
