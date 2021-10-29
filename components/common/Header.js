import styles from '../../styles/common/Header.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
    const router = useRouter();

    return (
        <header className={styles.container}>
            <div className={styles.logo}>Logo</div>
            <div className={styles.navigation}>
                <Link href={'/'}>
                    <a className={router.pathname === '/' ? styles.selected : '' }>Home</a>
                </Link>
                <Link href={'/about'}>
                    <a className={router.pathname === '/about' ? styles.selected : '' }>About</a>
                </Link>
                <Link href={'/contact'}>
                    <a className={router.pathname === '/contact' ? styles.selected : '' }>Contact</a>
                </Link>
                <div className={styles.search}>
                    <img src={'/images/search.png'} alt={'search'} />
                </div>
            </div>
        </header>
    );
}

export default Header;