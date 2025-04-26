'use client';
import styles from './index.module.css';
import { Avatar, Flex, ScrollView } from '@aws-amplify/ui-react';
import { caseList } from './contest';
import { useRef } from 'react';

export default function CaseList() {
    const scrollViewRef = useRef<HTMLDivElement | null>(null);

    const scrollLeft = () => {
        if (scrollViewRef.current) {
            const { scrollLeft } = scrollViewRef.current;
            if (scrollLeft > 0) {
                scrollViewRef.current.scrollBy({ left: -288, behavior: 'smooth' });
            }
        }
    };

    const scrollRight = () => {
        if (scrollViewRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollViewRef.current;
            if (scrollLeft < scrollWidth - clientWidth) {
                scrollViewRef.current.scrollBy({ left: 288, behavior: 'smooth' });
            }
        }
    };

    return <div className={'container ' + styles.container}>
        <div className={'boxMain ' + styles.boxMain}>
            <h2 className={'Header2 '+ styles.Header2}>
                客户案例
                <div className={styles.btn}>
                    <div className={styles.left} onClick={scrollLeft}>
                        <span className="icon iconfont icon-wandootaxzuojiantou" style={{
                            fontSize: '22px',
                        }}></span>
                    </div>
                    <div className={styles.right} onClick={scrollRight}>
                        <span className="icon iconfont icon-wandootaxzuojiantou" style={{
                            fontSize: '22px',
                        }}></span>
                    </div>
                </div>
            </h2>
            <ScrollView ref={scrollViewRef} className='hideScrollIndicator'>
                <Flex direction="row" wrap="nowrap"> 
                    {caseList.map((item) => {
                        return <div className={`flex ${styles.item}`} key={item.id}>
                            <div className={styles.con}>
                                <Avatar className={styles.img} style={{
                                    width: '48px',
                                    height: '48px',
                                }}/>
                                <div className={styles.name}>{item.name}</div>
                                <div className={`flex ${styles.taxList}`}>
                                    <div>{item.identity}</div>
                                    <div className={styles.line}></div>
                                    <div>{item.num}人</div>
                                    <div className={styles.line}></div>
                                    <div>{item.date}税年</div>
                                </div>
                                <div className={styles.userInfo}>
                                    <div>基本情况</div>
                                    {item.taxDesc}
                                </div>
                            </div>
                            {
                                item.deduction && item.refundAmount > 0 && <div className={styles.itemBottom}>
                                    <div className={styles.listItem}>
                                        HST退税：<span>{item.deduction}</span>
                                    </div>
                                    <div className={styles.listItem}>
                                        退税金额：<span>{item.refundAmount}</span>
                                    </div>
                                </div>
                            }
                        </div>
                    })}
                </Flex>
            </ScrollView>
        </div>
    </div>
}