import React from 'react'
import styles from './NavBar.module.css'
import renter_logo from '../../images/renter_logo.png'
export default function NavBar() {
    const [click, setClick] = React.useState(false);

    const handleClick = () =>{
        setClick(!click);
    } 
    const Close = () =>{
        setClick(false);
    } 
    
    return (
      <div>
       <div className={click ? styles.main_container : ``} onClick={()=>Close()} />
        <nav className={styles.navbar} onClick={(e)=>e.stopPropagation()}>
          <div className={styles.nav_container}>
            <a  className={styles.nav_logo}>
            <img src={renter_logo} />
            </a>
  
            <ul className={click ? `${styles.nav_menu} ${styles.active}`  : styles.nav_menu} >
              <li className={styles.nav_item}>
                <a
                  exact
                  to="/"
                  activeClassName="active"
                  className={styles.nav_links}
                  onClick={click ? handleClick : null}
                >
                  Home
                </a>
              </li>
              <li className={styles.nav_item}>
                <a
                  exact
                  to="/about"
                  activeClassName="active"
                  className={styles.nav_links}
                  onClick={click ? handleClick : null}
                >
                  About
                </a>
              </li>
              <li className={styles.nav_item}>
                <a
                  exact
                  to="/blog"
                  activeClassName="active"
                  className={styles.nav_links}
                  onClick={click ? handleClick : null}
                >
                  How We Works
                </a>
              </li>
              <li className={styles.nav_item}>
                <a
                  exact
                  to="/contact"
                  activeClassName="active"
                  className={styles.nav_links}
                 onClick={click ? handleClick : null}
                >
                  Find Properties
                </a>
              </li>
              <li className={styles.nav_item}>
                <a
                  exact
                  to="/contact"
                  activeClassName="active"
                  className={styles.nav_links}
                 onClick={click ? handleClick : null}
                >
                  Add Properties
                </a>
              </li>
              <li className={styles.nav_item}>
                <a
                  exact
                  to="/contact"
                  activeClassName="active"
                  className={styles.nav_links}
                 onClick={click ? handleClick : null}
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className={styles.nav_icon} onClick={handleClick}>
              <i className={click ? `fa fa-times` : `fa fa-bars`}></i>
            </div>
          </div>
        </nav>
      </ div>
    );
}
