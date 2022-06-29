import styles from './Contact.module.css';
function Contact() {
  let date =  new Date().getFullYear();
  return (
    <div id="contact" className={styles.contact}>
      <h1>Contact</h1>
      <p>
        Telephone Number: <a href="tel:7157623200">(715) 762-3200</a><br/>
        Fax Number: <a href="tel:7157623200">(715) 762-3359</a><br/>
        <br />Email Address: 
        <a href="mailto:suphome@pctcnet.net?subject=Customer Service / Buisness Inquiry">suphome@pctcnet.net</a><br />
        <br />Address:<br />
        <a href="https://goo.gl/maps/4WBeZHg8tRTXejUJ6">
        1181 North 4th Ave.<br />
        P.O. Box 450<br />
        Park Falls, WI 54552<br />
        </a>
        
        </p>

        <span><b>Copyright © {date} Supportive Home Services</b></span>
        </div>
    );
}
export default Contact;
