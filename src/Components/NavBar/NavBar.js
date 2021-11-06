import React from 'react'
import styles from './NavBar.module.css'
export default function NavBar() {
    return (
        <div className={styles.nav_wrapper}>
            <nav className={styles.nav_bar}>
                <ul>
                    <li><a href="#"><i className="fa fa-home"></i>Home</a></li>
                    <li><a href="#"><i className="fa fa-users"></i>About Us</a></li>
                    <li><a href="#"><i className="fa fa-users"></i>How We Works</a></li>
                    <li><a href="#"><i className="fa fa-search"></i>Find Properties</a></li>
                    <li><a href="#"><i className="fas fa-building"></i>Add Properties</a> </li>
                   
                </ul>
            </nav>
           </div>
    )
}
