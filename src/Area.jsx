import styles from './Area.module.css';
function Area() {
  return (
    <div id="area" className={styles.Area}>
      
      <iframe className={styles.area_map} src="https://www.google.com/maps/d/u/3/embed?mid=101Qw9NZvpH2R8mqekzUOLmvLKDoMhIM&ehbc=2E312F" >

      </iframe>
    </div>
    );
}

export default Area;