
import styles from './Services.module.css';
import logo from './assets/images/suphome.png';
import headerImg from './assets/images/header4.jpg';


function Services() {
  return (
   
    <div id="services" className={styles.Services} >
      <div className={styles.spacer}></div>
      <p className={styles.servicesTitle}>
        Services
      </p>
      <div className={styles.spacer}></div>
      <ul className={styles.serviceList}>
        <li className={styles.serviceItem}>
          <h1> Skilled Nurses </h1>
          <p>
          Our Professional Nursing services provide care to persons of all ages. Services include: Medication management, wound care treatment, heart care, diabetic care, pain management, health care assessment, IV therapy, safety assessment and planning, and much more.
          </p>
        </li>
        <li className={styles.serviceItem}>
          <h1> Physical Therapy </h1>
          <p>
          Licensed Physical Therapists provide evaluation and treatment of the patient's condition. Patients regain the ability to walk, improve strength and obtain the necessary skills to live safely in the home.
          </p>
        </li>
        <li className={styles.serviceItem}>
          <h1> Occupational Therapy </h1>
          <p>
          Licensed Occupational Therapists help patients achieve independence in self care skills as well as home management.
          </p>
        </li>
        <li className={styles.serviceItem}>
          <h1> Speech Therapy </h1>
          <p>
          Assists patients in all areas of communication, improves swallowing problems and memory issues.
          </p>
        </li>
        <li className={styles.serviceItem}>
          <h1> Medical Social Worker Services </h1>
          <p>
          Assists patients and families with long-range planning, provides coordinations with community services to enable patients to safely live at home, provide counseling services if needed, and assists with financial concerns.
          </p>
        </li>
        <li className={styles.serviceItem}>
          <h1> Home Health Aide Services </h1>
          <p>
          Certified Home Health Aides assist patients with bathing, grooming, walking exercises, housekeeping, meal preparations and other duties as assigned by the nurse.
          </p>

        </li>
        <li className={styles.serviceItem}>
          <h1> Payment for Services </h1>
          <p>
          Supportive Home Services care is covered by many sources including Medicare, Medical Assistance, Private Insurance, Private Pay, InClusa, Veterans Administration, and other sources.
          </p>

        </li>
        
      </ul>
    </div>
    


  );
}

export default Services;
