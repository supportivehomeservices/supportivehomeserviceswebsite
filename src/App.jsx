
import styles from './App.module.css';
import logo from './assets/images/suphome.png';
import headerImg from './assets/images/header4.jpg';
import pic1 from './assets/images/pic1.jpg';
import pic5 from './assets/images/pic5.jpg';
import hands from './assets/images/pic8.jpg';
import Popup from './Popup'
import { createSignal } from 'solid-js';


function App() {
  const [loggedIn, setLoggedIn] = createSignal(false);
  const toggle = () => setLoggedIn(!loggedIn())
  return (
    <div className={styles.App}>
      <Show when={loggedIn()}>
        <Popup/>
      </Show>
      <div id="wrapper" className={styles.wrapper}>
      <nav className={styles.nav}>
        <div className={styles.spacer}></div>
        <img src={logo} className={styles.logo} alt="logo" />
        
        
        <ul className={styles.navList}>
        <li className={styles.navItem}>
            <a href="#wrapper" className={styles.navLink} onClick={toggle}>
              Mission
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#wrapper" className={styles.navLink}>
              Home
            </a>
          </li>
          
          
          <li className={styles.navItem}>
            <a href="#services" className={styles.navLink}>
              Services
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#area" className={styles.navLink}>
              Area
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#contact" className={styles.navLink}>
              Contact
            </a>
          </li>
        </ul>
        <div className={styles.spacer}></div>
      </nav>
      <div class="small-wrapper">
        <div className={styles.imse}>
        <img src={pic1} className={styles.headerImg} alt="pic1" />
        <img src={pic5} className={styles.headerImg} alt="pic5" />
        <img src={hands} className={styles.headerImg} alt="hands" />
        </div>
              <div id="content" className={styles.content}>
      <article className={styles.article}>
        <div className={styles.spacer}></div>
        <div className={styles.articleContent}>
          <h1 className={styles.articleTitle}>
          Quality Choices in Life
          </h1>
          <p className={styles.articleText}>
          Supportive Home Services is a State licensed, Medicare and Medicaid certified home health agency that serves 8 counties in the northern part of Wisconsin. Professional and supportive care services are available to meet each individual's needs in the comfort of their homes.
          </p>
          <p className={styles.articleText}>
          Since 1988, Supportive Home Services has been providing the highest quality and most compassionate home care services available. Recently, Supportive Home Services was recognized by the Center for Medicare Services as being in the top 10% of agencies in the nation due to quality outcome measures.
          </p>
          <img src={headerImg} className={styles.headerImg} alt="articleImg" />
          <p>
          Supportive Home Services offers skilled nursing, physical, speech and occupational therapies, home health aides and medical social work services.
          </p>
          <p>
          In addition to the skilled professional home care services, Supportive Home Services also offers a variety of supportive services such as light housekeeping, companion care, meal preparation, respite care and more.
          </p>
          <p>
          Supportive Home Services staff members are highly trained, professional caregivers that provide exceptional compassionate care. Our staff has been carefully screened and supervised and are extremely dedicated to serving our clients to the best of their ability.
          </p>
          <h1>Mission Statement</h1> 
          <p>
          WE believe in the genuine concern of one
person for another and to this end assist
each other in achieving quality of life.

WE are committed to meeting the diversified
needs of others, recognizing and respecting
the individual's right to choose and live
with dignity.

WE are dedicated to developing innovative
alternatives that enable individuals to
control their lives.

These values serve to lead us in all our efforts.
          </p>
          </div>
        <div className={styles.spacer}></div>
      </article>
     
    </div>
    </div>
    </div>
    </div>
    


  );
}

export default App;
