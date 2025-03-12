import { useTranslations } from 'next-intl';
import styles from './index.module.css';
import Image from 'next/image';

export default function IndustryClass() {

    const t = useTranslations('industryClass');

    const industryList = [
        {
            title: t('student'),
            src: '/images/student.png',
        },
        {
            title: t('broker'), 
            src: '/images/student.png',
        },
        {
            title: t('catering'),
            src: '/images/student.png',
        },
        {
            title: t('engineer'),
            src: '/images/student.png',
        },
        {
            title: t('driver'),
            src: '/images/student.png',
        },
        {
            title: t('medical'),
            src: '/images/student.png',
        }
    ]
    
    return <div className={ 'container ' + styles.container}>
        <div className={ 'boxMain ' + styles.IndustryClass}>
            <h2 className={'Header2 ' + styles.Header2}>{t('industryTitle')}</h2>
            <div className={styles.list}>
                {
                    industryList.map((item, index) => (
                        <div className={styles.item} key={index}>
                            <Image className={styles.itemImage} src={item.src} alt='industry' width={160} height={210} />
                            <div className={styles.itemContent}>
                                {item.title} <Image className={styles.arrowRight} src={'/icons/arrowRight.svg'} alt='arrowRight' width={16} height={16} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
}
