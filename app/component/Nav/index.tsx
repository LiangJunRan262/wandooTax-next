'use client';
import Image from 'next/image';
import styles from './index.module.css';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@aws-amplify/ui-react';

// 服务分类url
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

export default function Nav() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > (document?.getElementById('anchor')?.offsetTop || 0)  - 99);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

    const t = useTranslations('nav');

    return <nav className={`container ${styles.container}  ${isScrolled ? styles.isScrolled : ''}`}>
        <div className={'boxMain flex ' + styles.navMain}>
            <Image className={styles.logo} src={isScrolled ? "/images/logo-black.png" : "/images/logo.png"} alt="logo" width={152} height={30}/>

            <div className={`flex ${styles.navList}`}>
                <div className={`flex ${styles.navItem} ${styles.active}`}>
                    <div className={`flex ${styles.navItemCon}`}>
                        <div className={`flex ${styles.navItemTxt}`}>
                            {t('home')}
                            <div className={styles.activeLine}></div>
                        </div>
                    </div>
                </div>

                <div className={`flex ${styles.navItem}`}>
                    <div className={`flex ${styles.navItemCon}`}>
                        <div className={`flex ${styles.navItemTxt}`}>
                            {t('service')}
                            <div className={styles.activeLine}></div>
                        </div>
                        <div className={styles.triangle}></div>
                    </div>

                    <div className={styles.navPopup}>
                        <div className={`${styles.topTriangle} ${styles.navPopupTopTriangle}`} style={{left: '10%'}}></div>
                        <div className={`${styles.navPopupCon} flex`}>
                            <div className={styles.navPopupList}>
                                <div className={styles.navPopupListTit}>服务分类</div>
                                {
                                    servicesUrl.map((item, index) => {
                                        return <Link
                                            key={index}
                                            className={`${styles.navPopupListTxt}`}
                                            href={item.url}
                                            color={'#000'}
                                        >
                                            {item.title}
                                        </Link>
                                    })
                                }
                            </div>
                            <div style={{height: '250px', width: '1px', backgroundColor: '#eee'}}></div>
                            <div className={styles.navPopupList}>
                                <div className={styles.navPopupListTit}>行业分类</div>
                                {
                                    industriesUrl.map((item, index) => {
                                        return <Link
                                            key={index}
                                            className={`${styles.navPopupListTxt}`}
                                            href={item.url}
                                            color={'#000'}
                                        >
                                            {item.title}
                                        </Link>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`flex ${styles.navItem}`}>
                    <div className={`flex ${styles.navItemCon}`}>
                        <div className={`flex ${styles.navItemTxt}`}>
                            {t('aboutUs')}
                        </div>
                        <div className={styles.triangle}></div>
                    </div>

                    <div className={`${styles.navPopup}`} style={{transform: 'translateX(-26px)'}}>
                        <div className={`${styles.topTriangle} ${styles.navPopupTopTriangle}`} style={{left: '40%'}}></div>
                        <div className={`${styles.navPopupCon} flex flex-col`}>
                            <div className={styles.navPopupList} style={{width: 'auto'}}>
                                {aboutUsUrl.map((item, index) => {
                                    return <Link
                                        key={index}
                                        className={`${styles.navPopupListTxt}`}
                                        href={item.url}
                                        color={'#000'}
                                    >
                                        {item.title}
                                    </Link>
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`flex ${styles.navItem}`}>
                    <div className={`flex ${styles.navItemCon}`}>
                        <div className={`flex ${styles.navItemTxt}`}>
                            {t('taxResources')}
                        </div>
                        <div className={styles.triangle}></div>
                    </div>

                    <div className={`${styles.navPopup}`} style={{transform: 'translateX(-33px)'}}>
                        <div className={`${styles.topTriangle} ${styles.navPopupTopTriangle}`} style={{left: '34%'}}></div>
                        <div className={`${styles.navPopupCon} flex flex-col`}>
                            <div className={styles.navPopupList} style={{width: 'max-content'}}>
                                <Link
                                    className={`${styles.navPopupListTxt}`}
                                    href={'/resources/tools'}
                                    color={'#000'}
                                >
                                    计算器
                                </Link>
                                <Link
                                    className={`${styles.navPopupListTxt}`}
                                    href={'/resources/tips'}
                                    color={'#000'}
                                >
                                    税务知识
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`flex ${styles.navItem}`}>
                    <div className={`flex ${styles.navItemCon}`}>
                        <Link
                            className={`${styles.navItemTxt}`}
                            href={'/contact'}
                            color={isScrolled ? '#000' : '#fff'}
                        >
                            {t('contactUs')}
                        </Link>
                    </div>
                </div>
            </div>

            {/* <div className={`flex ${styles.language} ${styles.navItem}`}>
                <div className={`flex ${styles.languageChange}`}>
                    <Image src={isScrolled ? '/icons/earth-full-blackIcon.svg' : '/icons/earth-fullIcon.svg'} alt='flag' width={18} height={18} />
                    <span>简体中文</span>
                    <div className={styles.triangle} />
                </div>
                <div className={styles.navPopup}>
                    <div className={`${styles.topTriangle} ${styles.navPopupTopTriangle}`} style={{left: '40%'}}></div>
                    <div className={`${styles.navPopupCon}`}>
                        <div className={styles.navPopupList}>
                            <div className={styles.navPopupListTxt} onClick={() => handleLanguageChange('zh')}>简体中文</div>
                            <div className={styles.navPopupListTxt} onClick={() => handleLanguageChange('en')}>English</div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </nav>
}
