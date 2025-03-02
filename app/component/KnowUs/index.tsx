import styles from './index.module.css';
import { useTranslations } from 'next-intl';

export default function KnowUs() {
    const t = useTranslations('knowUs');
    return <div className={'container ' + styles.container}>
        <div className={'boxMain ' + styles.boxMain}>
            <h2 className={'Header2 ' + styles.Header2}>{t('knowUsTitle')}</h2>
            <div className='flex'>
                <div className={styles.left}>
                    <div className={`flex ${styles.leftItem}`}>
                        {/* <div className={styles.staffImg}></div> */}
                        <div className={styles.staffInfo}>
                            <div className={styles.staffName}>{t('GraceHao.name')}</div>
                            <div className={styles.staffJob}>{t('GraceHao.position')}</div>
                            <div className={styles.description}>{t('GraceHao.description')}</div>
                        </div>
                    </div>
                    <div className={`flex ${styles.leftItem}`}>
                        {/* <div className={styles.staffImg}></div> */}
                        <div className={styles.staffInfo}>
                            <div className={styles.staffName}>{t('KnightWang.name')}</div>
                            <div className={styles.staffJob}>{t('KnightWang.position')}</div>
                            <div className={styles.description}>{t('KnightWang.description')}</div>
                        </div>
                    </div>
                    <div className={`flex ${styles.leftItem}`}>
                        {/* <div className={styles.staffImg}></div> */}
                        <div className={styles.staffInfo}>
                            <div className={styles.staffName}>{t('MichaelChen.name')}</div>
                            <div className={styles.staffJob}>{t('MichaelChen.position')}</div>
                            <div className={styles.description}>{t('MichaelChen.description')}</div>
                        </div>
                    </div>
                    <div className={`flex ${styles.leftItem}`}>
                        {/* <div className={styles.staffImg}></div> */}
                        <div className={styles.staffInfo}>
                            <div className={styles.staffName}>{t('DominicWang.name')}</div>
                            <div className={styles.staffJob}>{t('DominicWang.position')}</div>
                            <div className={styles.description}>{t('DominicWang.description')}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.rightItem} style={{marginBottom: '40px'}}>
                        <div className={styles.rightTitle}>
                            <span>多伦多办公点</span>
                            <div className={styles.rightTitleBg} />
                        </div>
                        <div className=''>累计服务超3,000人次，保持0错误率</div>
                        <div className=''>服务覆盖大多伦多地区的全行业企业，帮助家庭及学生报税</div>
                    </div>
                    <div className={styles.rightItem}>
                        <div className={styles.rightTitle}>
                            <span>温莎办公点</span>
                            <div className={styles.rightTitleBg} />
                        </div>
                        <div className=''>累计服务超3,000人次，保持0错误率</div>
                        <div className=''>服务覆盖大多伦多地区的全行业企业，帮助家庭及学生报税</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
