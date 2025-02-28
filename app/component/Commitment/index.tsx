import styles from './index.module.css';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Commitment() {
    const t = useTranslations('commitment');

    return <div className={'container ' + styles.container}>
        <div className={'boxMain ' + styles.commitmentMain}>
            <h2 className={'Header2 ' + styles.Header2}>{t('commitmentTitle')}</h2>
            <div className={styles.list}>

            </div>
        </div>
    </div>
}
