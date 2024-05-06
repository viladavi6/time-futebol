import Image from "next/image";
import styles from "../style/About.module.css"

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o Projeto</h1>
            <p>Projeto feito no Curso no módulo: Desenvolvimento Web</p>
            <Image src="/img/logo.png" width={300} height={300} alt={"Futebol"} />
        </div>
    );
}