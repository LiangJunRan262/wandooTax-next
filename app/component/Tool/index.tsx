'use client';

import Image from 'next/image';
import styles from './index.module.css';
import { useTranslations } from 'next-intl';
export default function Tool() {

    const t = useTranslations('tool');

    return <div className={'container ' + styles.container}>
        <div className={'boxMain ' + styles.boxMain}>
            <h2 className={'Header2 ' + styles.Header2}>{t('toolTitle')}</h2>
            <div className={styles.toolList}>
                <div className={styles.toolItem} onClick={() => {
                    window.open('○https://www.canada.ca/en/revenue-agency/services/child-family-benefits/child-family-benefits-calculator.html', '_blank');
                }}>
                    <div className={styles.left}>
                        <Image src={'/images/tool-childcare-img.png'} alt='childcare' width={180} height={226} />
                    </div>
                    <div className={styles.right}>
                        <h3 className={styles.toolItemTitle}>{t('childcare.title')}</h3>
                        <p className={styles.toolItemDescription}>{t('childcare.description')}</p>
                        <div className={styles.toolItemButton}>去看看 <Image src={'/icons/rightIcon.svg'} alt='arrow-right' width={12} height={9} /></div>
                    </div>
                </div>
                <div className={styles.toolItem} onClick={() => {
                    window.open('○https://www.rbcroyalbank.com/investments/rrsp/rrsp-calculator.html', '_blank');
                }}>
                    <div className={styles.left}>
                        <Image src={'/images/tool-RRSP-img.png'} alt='RRSP' width={180} height={226} />
                    </div>
                    <div className={styles.right}>
                        <h3 className={styles.toolItemTitle}>{t('RRSP.title')}</h3>
                        <p className={styles.toolItemDescription}>{t('RRSP.description')}</p>
                        <div className={styles.toolItemButton}>去看看 <Image src={'/icons/rightIcon.svg'} alt='arrow-right' width={12} height={9} /></div>
                    </div>
                </div>
                <div className={styles.toolItem} onClick={() => {
                    window.open('○https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/benefits-allowances/automobile/automobile-motor-vehicle-benefits/automobile.html', '_blank');
                }}>
                    <div className={styles.left}>
                        <Image src={'/images/tool-car-img.png'} alt='car' width={180} height={226} />
                    </div>
                    <div className={styles.right}>
                        <h3 className={styles.toolItemTitle}>{t('car.title')}</h3>
                        <p className={styles.toolItemDescription}>{t('car.description')}</p>
                        <div className={styles.toolItemButton}>去看看 <Image src={'/icons/rightIcon.svg'} alt='arrow-right' width={12} height={9} /></div>
                    </div>
                </div>
                <div className={styles.toolItem} onClick={() => {
                    window.open('https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/benefits-allowances/automobile/automobile-motor-vehicle-benefits/automobile.html', '_blank');
                }}>
                    <div className={styles.left}>
                        <Image src={'/images/tool-salary-img.png'} alt='salary' width={180} height={226} />
                    </div>
                    <div className={styles.right}>
                        <h3 className={styles.toolItemTitle}>{t('salary.title')}</h3>
                        <p className={styles.toolItemDescription}>{t('salary.description')}</p>
                        <div className={styles.toolItemButton}>去看看 <Image src={'/icons/rightIcon.svg'} alt='arrow-right' width={12} height={9} /></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
