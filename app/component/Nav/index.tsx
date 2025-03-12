import Image from 'next/image';
import styles from './index.module.css';

export default function Nav() {
    return <nav className={'container ' + styles.container}>
        <div className={'boxMain ' + styles.navMain}>
            <div className={styles.logo}>
                <Image src="/images/logo.png" alt="logo" width={152} height={30} />
            </div>



        </div>
    </nav>
}
