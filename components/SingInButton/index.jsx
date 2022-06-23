import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';

export function SingInButton() {

    const isUserLoggerIn = true;

    return isUserLoggerIn ? (
        <button
            type="button"
            className={styles.singInButton}
        >
            <FaGithub color="#04d361" />
            Anderson Aslap
            <FiX color="#737300" className={styles.closeIcon} />
        </button >
    ) : (
        <button
            type="button"
            className={styles.singInButton}
        >
            <FaGithub color="#eba417" />
            Sing in with Github
        </button >
    )

}