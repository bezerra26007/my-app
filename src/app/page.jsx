import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className='container'>
      <div className={styles.container_titulo}>
        <h1 className={styles.txt_titulo}>Aula Next</h1>
      </div>
    </div>


  );
}
