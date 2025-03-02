import { useTranslations } from 'next-intl';
import styles from './index.module.css';

export default function Price() {
    // const t = useTranslations('price');

    return <div className={'container ' + styles.container}>
        <div className={'boxMain ' + styles.priceMain}>
            <h2 className={'Header2 ' + styles.Header2}>我们的价格</h2>
            <div className={styles.priceCon}>
                <div className={styles.priceItem1}>
                    <div className={styles.priceItem1Title}>极致性价比</div>
                    <div className={styles.priceItem1Line}></div>

                </div>
            </div>
        </div>
    </div>
}
