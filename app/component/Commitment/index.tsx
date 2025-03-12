import styles from './index.module.css';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Commitment() {
    const t = useTranslations('commitment');

    return <div className={'container ' + styles.container}>
        <div className={'boxMain ' + styles.commitmentMain}>
            <h2 className={'Header2 ' + styles.Header2}>{t('commitmentTitle')}</h2>
            <div className={styles.list}>
                <div className={styles.item}>
                    <div className={styles.itemTitle}>{t('list.major.title')}</div>
                    <div className={styles.itemDescription}>{t('list.major.description')}</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemTitle}>{t('list.convenient.title')}</div>
                    <div className={styles.itemDescription}>{t('list.convenient.description')}</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemTitle}>{t('list.transparent.title')}</div>
                    <div className={styles.itemDescription}>{t('list.transparent.description')}</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemTitle}>{t('list.maximize.title')}</div>
                    <div className={styles.itemDescription}>{t('list.maximize.description')}</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemTitle}>{t('list.reasonable.title')}</div>
                    <div className={styles.itemDescription}>{t('list.reasonable.description')}</div>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemTitle}>{t('list.lasting.title')}</div>
                    <div className={styles.itemDescription}>{t('list.lasting.description')}</div>
                </div>
            </div>
        </div>
    </div>
}
