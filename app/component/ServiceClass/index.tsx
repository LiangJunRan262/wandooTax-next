import { useTranslations, useLocale } from 'next-intl';
import styles from './index.module.css';
import Image from 'next/image';
export default function ServiceClass() {
    const t = useTranslations('serviceClass');
    const locale = useLocale();
    return <div className={'container ' + styles.container}>
        <div className={'boxMain ' + styles.serviceClassMain}>
            <h2 className={'Header2 ' + styles.Header2}>{t('serviceClassTitle')}</h2>
            <div className={'flex ' + styles.serviceClass}>
                <div className={styles.item}>
                    <Image src={'/icons/personalIcon.svg'} alt='personal' width={54} height={54} />
                    <div className={styles.itemTitle}>{t('personalTitle')}</div>
                    <div className={styles.line}></div>
                    <div className={`${styles.itemDescription} ${locale === 'en' ? styles.textLeft : ''}`}>{t('personalDescription')}</div>
                </div>
                <div className={styles.item}>
                    <Image src={'/icons/businessIcon.svg'} alt='business' width={54} height={54} />
                    <div className={styles.itemTitle}>{t('businessTitle')}</div>
                    <div className={styles.line}></div>
                    <div className={`${styles.itemDescription} ${locale === 'en' ? styles.textLeft : ''}`}>{t('businessDescription')}</div>
                </div>
                <div className={styles.item}>
                    <Image src={'/icons/voluntaryIcon.svg'} alt='voluntaryIcon' width={54} height={54} />
                    <div className={styles.itemTitle}>{t('voluntaryDisclosureTitle')}</div>
                    <div className={styles.line}></div>
                    <div className={`${styles.itemDescription} ${locale === 'en' ? styles.textLeft : ''}`}>{t('voluntaryDisclosureDescription')}</div>
                </div>
                <div className={styles.item}>
                    <Image src={'/icons/gstHstIcon.svg'} alt='gstHst' width={54} height={54} />
                    <div className={styles.itemTitle}>{t('gstHstTitle')}</div>
                    <div className={styles.line}></div>
                    <div className={`${styles.itemDescription} ${locale === 'en' ? styles.textLeft : ''}`}>{t('gstHstDescription')}</div>
                </div>
            </div>
        </div>
    </div>
}