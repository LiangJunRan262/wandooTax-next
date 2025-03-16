import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './index.module.css';

export default function SubmitMethod() {
    const t = useTranslations('submitMethod');
    return <div className={'container ' + styles.container}>
        <div className={'boxMain ' + styles.boxMain}>
            <h2 className={'Header2 ' + styles.Header2}>{t('title')}</h2>
            <div className={`flex ${styles.list}`}>
                <div className={`flex ${styles.item}`}>
                    <div className={styles.numberBg}>01</div>
                    <Image className={styles.icon} src="/icons/onlineIcon.svg" width={56} height={56} alt='industry'/>
                    <div className={styles.itemTitle}>{t.rich('online.title', {
                        value: '在线提交'
                    })}</div>
                    <div className={styles.itemTxt}>{t('online.description')}</div>
                    <div className={`flex ${styles.star}`}>
                        <span>强烈推荐</span>
                        <Image className={styles.starIcon} src="/icons/starIcon.svg" width={20} height={20} alt='starIcon'/>
                        <Image className={styles.starIcon} src="/icons/starIcon.svg" width={20} height={20} alt='starIcon'/>
                        <Image className={styles.starIcon} src="/icons/starIcon.svg" width={20} height={20} alt='starIcon'/>
                    </div>
                </div>
                <div className={`flex ${styles.item}`}>
                    <div className={styles.numberBg}>02</div>
                    <Image className={styles.icon} src="/icons/emailSubmitIcon.svg" width={56} height={56} alt='industry'/>
                    <div className={styles.itemTitle}>{t.rich('email.title', {
                        value: '在线提交'
                    })}</div>
                    <div className={styles.itemTxt}>{t('email.description')}</div>
                    <div className={`flex ${styles.star}`}>
                        <span>比较推荐</span>
                        <Image className={styles.starIcon} src="/icons/starIcon.svg" width={20} height={20} alt='starIcon'/>
                        <Image className={styles.starIcon} src="/icons/starIcon.svg" width={20} height={20} alt='starIcon'/>
                        <Image className={styles.starIcon} src="/icons/star2Icon.svg" width={20} height={20} alt='star2Icon'/>
                    </div>
                </div>
                <div className={`flex ${styles.item}`}>
                    <div className={styles.numberBg}>03</div>
                    <Image className={styles.icon} src="/icons/addressSubmitIcon.svg" width={56} height={56} alt='industry'/>
                    <div className={styles.itemTitle}>{t.rich('fastMail.title', {
                        value: '在线提交'
                    })}</div>
                    <div className={styles.itemTxt}>{t('fastMail.description')}</div>
                    <div className={`flex ${styles.star}`}>
                        <span>一般推荐</span>
                        <Image className={styles.starIcon} src="/icons/starIcon.svg" width={20} height={20} alt='starIcon'/>
                        <Image className={styles.starIcon} src="/icons/star2Icon.svg" width={20} height={20} alt='star2Icon'/>
                        <Image className={styles.starIcon} src="/icons/star2Icon.svg" width={20} height={20} alt='star2Icon'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}