import { SingInButton } from '../SingInButton/index';
import Link from 'next/link';

import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';

export function Header() {

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news" />

                <nav>
                    <ActiveLink href="/" activeClassName={styles.active} prefetch>
                        <a>Home</a>
                    </ActiveLink>

                    <ActiveLink href="/posts" activeClassName={styles.active} prefetch>
                        <a>Posts</a>
                    </ActiveLink>
                </nav>

                <SingInButton />
            </div>
        </header>
    )
}