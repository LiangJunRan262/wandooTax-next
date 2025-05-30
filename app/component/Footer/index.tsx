import Link from 'next/link';
import styles from './index.module.css';
import Image from 'next/image';

const servicesUrl = [
    {title: '个人/家庭(T1)', url: '/services/personal-family'},
    {title: '企业报税(T2)', url: '/services/corporate'},
    {title: '自愿披露', url: '/services/disclosure'},
    {title: 'GST/HST退税', url: '/services/gst-hst'},
]

const industriesUrl = [
    {title: '学生', url: '/industries/student'},
    {title: '职员', url: '/industries/broker'},
    {title: '经纪人', url: '/industries/restaurant'},	
    {title: '餐饮', url: '/industries/restaurant'},	
    {title: '工程师', url: '/industries/restaurant'},	
    {title: '驾驶员', url: '/industries/restaurant'},	
    {title: '其他', url: '/industries/restaurant'},
]

const aboutUsUrl = [
    {title: '客户案例', url: '/about/case'},
    {title: '收费标准', url: '/about/fee'},
    {title: '团队介绍', url: '/about/team'},
]

export default function Footer() {
    return <>
        <div className={styles.footerTop}>
            <Image src='/images/footerTopImg.png' alt='footerBg' width={1483} height={121} />
        </div>
        <div className={'container ' + styles.container}>
            <div className={'boxMain flex ' + styles.footerMain}>
                <div className={styles.left}>
                    <Image className={styles.logo} src='/images/logo.png' alt='logo' width={216} height={40} />
                    <div className={styles.contact}>
                        <Image
                            src="/icons/phoneIcon.svg"
                            alt="phone-icon"
                            width={14}
                            height={14}
                            priority
                        />
                        <span>519-991-0925</span>
                    </div>
                    <div className={styles.contact}>
                        <Image
                            src="/icons/emailIcon.svg"
                            alt="email-icon"
                            width={14}
                            height={14}
                            priority
                        />
                        <span>info@wandootax.com</span>
                    </div>
                    <div className={styles.contact}>
                        <Image
                            src="/icons/locationIcon.svg"
                            alt="location-icon"
                            width={14}
                            height={14}
                            priority
                        />
                        <span>多伦多地址：14 caroline centre grv. on toronto</span>
                    </div>
                    <div className={styles.contact}>
                        <div style={{ width: 14, height: 14 }}></div>
                        <span>温莎地址：23 domi street. on toronto</span>
                    </div>
                    <div className={styles.channel}>
                        <Image src='/icons/inFillIcon.svg' alt='inFill' width={24} height={24} />
                        <Image src='/icons/wxFillIcon.svg' alt='wxFill' width={24} height={24} />
                        <Image src='/icons/xhsFillIcon.svg' alt='xhsFill' width={24} height={24} />
                    </div>
                </div>
                <div className={`${styles.right} flex`}>
                    {/* <div className={styles.rightItem}>
                        <div className={styles.rightItemTitle}>首页导航</div>
                        <div className={styles.rightItemCon}>服务承诺</div>
                    </div> */}
                    <div className={styles.rightItem}>
                        <div className={styles.rightItemTitle}>服务分类</div>
                        {servicesUrl.map((item, index) => {
                            return <Link
                                key={index}
                                className={`${styles.rightItemCon}`}
                                href={item.url}
                                color={'#000'}
                            >
                                {item.title}
                            </Link>
                        })}
                    </div>
                    <div className={styles.rightItem}>
                        <div className={styles.rightItemTitle}>行业分类</div>
                        {industriesUrl.map((item, index) => {
                            return <Link
                                key={index}
                                className={`${styles.rightItemCon}`}
                                href={item.url}
                                color={'#000'}
                            >
                                {item.title}
                            </Link>
                        })}
                    </div>
                    <div className={styles.rightItem}>
                        <div className={styles.rightItemTitle}>关于我们</div>
                        {aboutUsUrl.map((item, index) => {
                            return <Link
                                key={index}
                                className={`${styles.rightItemCon}`}
                                href={item.url}
                                color={'#000'}
                            >
                                {item.title}
                            </Link>
                        })}
                    </div>
                    <div className={styles.rightItem}>
                        <div className={styles.rightItemTitle}>资源</div>
                        <Link
                            className={`${styles.rightItemCon}`}
                            href={'/resources/tools'}
                            color={'#000'}
                        >
                            计算器
                        </Link>
                        <Link
                            className={`${styles.rightItemCon}`}
                            href={'/resources/tips'}
                            color={'#000'}
                        >
                            税务知识
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                版权所有 © 2025 WandooTax
            </div>
        </div>
    </>
}
