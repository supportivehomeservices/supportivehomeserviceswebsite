
import { mergeProps, Show } from 'solid-js';
import App from './App';
import styles from './Popup.module.css';

function Area(){
  
  return (
    
    <div id="Popup" className={styles.Popup}>
    
      <div className={styles.box}>
        <button className={styles.closeButton} >
            Close
        </button>
        <h1>Mission Statement</h1>
        <p>
        WE believe in the genuine concern of one<br/>
person for another and to this end assist<br/>
each other in achieving quality of life.<br/>
<br/>
WE are committed to meeting the diversified<br/>
needs of others, recognizing and respecting<br/>
the individual's right to choose and live<br/>
with dignity.<br/>
<br/>
WE are dedicated to developing innovative<br/>
alternatives that enable individuals to<br/>
control their lives.<br/>
<br/>
These values serve to lead us in all our efforts.<br/>
        </p>
        </div>
    </div>
    ) ;
}

export default Area;