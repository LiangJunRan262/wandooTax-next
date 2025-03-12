import styles from './index.module.css';
import Image from 'next/image';
export default function Footer() {

    return  <>
        <div className={styles.footerTop}>
            <Image src='/images/footerTopImg.png' alt='footerBg' width={1483} height={121}/>
        </div>
        <div className={'container ' + styles.container}>
        <div className={'boxMain flex ' + styles.footerMain}>
            <div className={styles.left}>
                <Image className={styles.logo} src='/images/logo.png' alt='logo' width={216} height={40}/>
                <div className={styles.contact}>
                    <Image
                        src="/icons/phoneIcon.svg"
                        alt="phone-icon"
                        width={14}
                        height={14}
                        priority // 关键资源预加载
                    /> 
                    <span>519-991-0925</span>
                </div>              
                <div className={styles.contact}>
                    <Image
                        src="/icons/emailIcon.svg"
                        alt="email-icon"
                        width={14}
                        height={14}
                        priority // 关键资源预加载
                    />
                    <span>info@wandootax.com</span>
                </div>
                <div className={styles.contact}>
                    <Image
                        src="/icons/locationIcon.svg"
                        alt="location-icon"
                        width={14}
                        height={14}
                        priority // 关键资源预加载
                    />  
                    <span>多伦多地址：14 caroline centre grv. on toronto</span>
                </div>
                <div className={styles.contact}>
                    <div style={{width: 14, height: 14}}></div>
                    <span>温莎地址：23 domi street. on toronto</span> 
                </div>
                <div className={styles.channel}>
                    <Image src='/icons/inFillIcon.svg' alt='inFill' width={24} height={24}/>
                    <Image src='/icons/wxFillIcon.svg' alt='wxFill' width={24} height={24}/>
                    <Image src='/icons/xhsFillIcon.svg' alt='xhsFill' width={24} height={24}/>
                </div>
            </div>
            <div className={`${styles.right} flex`}>
                <div className={styles.rightItem}>
                    <div className={styles.rightItemTitle}>首页导航</div>
                    <div className={styles.rightItemCon}>服务承诺</div>
                </div>
                <div className={styles.rightItem}>
                    <div className={styles.rightItemTitle}>首页导航</div>
                    <div className={styles.rightItemCon}>服务承诺</div>
                </div>
            </div>
        </div>
        <div className={styles.footerBottom}>
            版权所有 © 2025 WandooTax
        </div>
    </div>
    </>
    

}
