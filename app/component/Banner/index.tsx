'use client'
import styles from './index.module.css';

export default function Banner() {
    return <div className={`container ${styles.container}`}  style={{
        backgroundImage: 'url(/images/banner-bg.png)',
    }}>
        <div className={`boxMain ${styles.bannerMain}`} >
            <div className={styles.bannerCon}>
                <div className={styles.bannerTxt}>价格低于市场均价 但质量优于<span>80%</span></div>
                <div className={`flex ${styles.btnList}`}>
                    <div className={`${styles.btnItem} ${styles.btnItem1}`}>个人或家庭</div>
                    <div className={styles.btnItem}>公司纳税</div>
                </div>
            </div>
        </div>
    </div>
}