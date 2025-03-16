
'use client';
import styles from './index.module.css';
import { Avatar } from '@aws-amplify/ui-react';

export default function CaseList() {
    return <div className={'container ' + styles.container}>
        <div className={'boxMain ' + styles.boxMain}>
            <h2 className={'Header2 '+ styles.Header2}>
                客户案例
                <div className={styles.btn}>
                    <div className={styles.left}></div>
                    <div className={styles.right}></div>
                </div>
            </h2>
            <div>
                <div className={`flex ${styles.item}`}>
                    <div className={styles.con}>
                        {/* <div className={styles.img}></div> */}
                        <Avatar className={styles.img} style={{
                            width: '48px',
                            height: '48px',
                        }}/>
                        <div className={styles.name}>friend cook.IncDminic.</div>
                        <div className={`flex ${styles.taxList}`}>
                            <div>小企业报税</div>
                            <div className={styles.line}></div>
                            <div>12人</div>
                            <div className={styles.line}></div>
                            <div>23-24税年</div>
                        </div>
                        <div className={styles.userInfo}>
                            <div>基本情况</div>
                            员工12人，年经营收入300,000刀，净利润183,200刀
                        </div>
                    </div>
                    <div className={styles.itemBottom}>
                        <div className={styles.listItem}>
                            HST退税：<span>合计退税3400刀合计退税3400刀</span>
                        </div>
                        <div className={styles.listItem}>
                            报税用时：<span>半天</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}