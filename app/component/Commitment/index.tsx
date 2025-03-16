import styles from './index.module.css';
import { useTranslations, useLocale } from 'next-intl';
export default function Commitment() {
    const t = useTranslations('commitment');
    const locale = useLocale();
    return <div className={'container ' + styles.container}>
        <div className={styles.containerBg}></div>
        <div className={'boxMain ' + styles.commitmentMain}>
            <h2 className={'Header2 ' + styles.Header2}>{t('commitmentTitle')}</h2>
            <div className={`${styles.list} ${locale === 'en' ? styles.en : styles.zh}`} style={{
                backgroundImage: `url('/images/commitment-bg.png')`,
            }}>
                <div className={`${styles.item} ${styles.item1}`}>
                    <div className={styles.itemTitle}>{t('list.major.title')}</div>
                    <div className={styles.itemDescription}>{t('list.major.description')}</div>
                </div>
                <div className={`${styles.item} ${styles.item2} ${styles.item2}${locale}`}>
                    <div className={styles.itemTitle}>{t('list.convenient.title')}</div>
                    <div className={styles.itemDescription}>{t('list.convenient.description')}</div>
                </div>
                <div className={`${styles.item} ${styles.item3} ${styles.item3}${locale}`}>
                    <div className={styles.itemTitle}>{t('list.transparent.title')}</div>
                    <div className={styles.itemDescription}>{t('list.transparent.description')}</div>
                </div>
                <div className={`${styles.item} ${styles.item4} ${styles.item4}${locale}`}>
                    <div className={styles.itemTitle}>{t('list.maximize.title')}</div>
                    <div className={styles.itemDescription}>{t('list.maximize.description')}</div>
                </div>
                <div className={`${styles.item} ${styles.item5} ${styles.item5}${locale}`}>
                    <div className={styles.itemTitle}>{t('list.reasonable.title')}</div>
                    <div className={styles.itemDescription}>{t('list.reasonable.description')}</div>
                </div>
                <div className={`${styles.item} ${styles.item6} ${styles.item6}${locale}`}>
                    <div className={styles.itemTitle}>{t('list.lasting.title')}</div>
                    <div className={styles.itemDescription}>{t('list.lasting.description')}</div>
                </div>
            </div>
        </div>
    </div>
}
