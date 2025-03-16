'use client';
import Image from 'next/image';
import styles from './index.module.css';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

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

    // const router = useRouter();
    const pathname = usePathname();

    console.log(pathname);
    const handleLanguageChange = (locale: string) => {
        // 修改为使用 locale 参数来设置新的语言环境
        // router.replace({ pathname, locale });
    };
    return <nav className={`container ${styles.container}  ${isScrolled ? styles.isScrolled : ''}`}>
        <div className={'boxMain flex ' + styles.navMain}>
            <Image className={styles.logo} src={isScrolled ? "/images/logo-black.png" : "/images/logo.png"} alt="logo" width={152} height={30}/>

            <div className={`flex ${styles.navList}`}>
                <div className={`flex ${styles.navItem} ${['/', '/zh'].includes(pathname) ? styles.active : ''}`}>
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
                                <div className={styles.navPopupListTxt}>个人或家庭报税</div>
                                <div className={styles.navPopupListTxt}>企业报税</div>
                                <div className={styles.navPopupListTxt}>自愿披露</div>
                                <div className={styles.navPopupListTxt}>HST退税</div>
                            </div>
                            <div className={styles.navPopupList}>
                                <div className={styles.navPopupListTit}>行业分类</div>
                                <div className={styles.navPopupListTxt}>学生</div>
                                <div className={styles.navPopupListTxt}>经纪人</div>
                                <div className={styles.navPopupListTxt}>餐饮</div>
                                <div className={styles.navPopupListTxt}>工程师</div>
                                <div className={styles.navPopupListTxt}>驾驶员</div>
                                <div className={styles.navPopupListTxt}>医护</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={`flex ${styles.navItem}`}>
                    <div className={`flex ${styles.navItemCon}`}>
                        <div className={`flex ${styles.navItemTxt}`}>
                            {t('aboutUs')}
                        </div>
                    </div>
                </div>

                <div className={`flex ${styles.navItem}`}>
                    <div className={`flex ${styles.navItemCon}`}>
                        <div className={`flex ${styles.navItemTxt}`}>
                            {t('taxResources')}
                        </div>
                    </div>
                </div>

                <div className={`flex ${styles.navItem}`}>
                    <div className={`flex ${styles.navItemCon}`}>
                        <div className={`flex ${styles.navItemTxt}`}>
                            {t('contactUs')}
                        </div>
                    </div>
                </div>

            </div>

            <div className={`flex ${styles.language} ${styles.navItem}`}>
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
            </div>
        </div>
    </nav>
}
