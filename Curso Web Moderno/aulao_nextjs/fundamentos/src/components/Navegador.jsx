import Link from "next/link";
import styles from '../styles/Navigator.module.css'

export default function Navigator(props) {
    return (
        <Link href={props.destiny} passHref>
            <div className={styles.navigator} style={{ backgroundColor: props.cor ?? 'dodgerblue' }}>
            {props.text}

            </div>
        </Link>
    )
}