import { useTranslations } from 'next-intl';
import style from './index.module.css';
import Image from 'next/image';
export default function Process() {
    const t = useTranslations('process');
    return <div className={`container ${style.container}`}>
        <div className={`boxMain ${style.boxMain}`}>
            <h2 className={`Header2 ${style.Header2}`}>{t('title')}</h2>
            <div className={`flex ${style.list}`}>
                <div className={style.item}>
                    <div className={style.itemIndex}>01</div>
                    <Image className={style.itemImage} src={'/icons/roundIcon.svg'} alt='process1' width={24} height={24} />
                    <div className={style.itemCon}>
                        {t('step1')}
                    </div>
                </div>

                <div className={style.item}>
                    <div className={style.itemIndex}>02</div>
                    <Image className={style.itemImage} src={'/icons/roundIcon.svg'} alt='process1' width={24} height={24} />
                    <div className={style.itemCon}>
                        {t('step2')}
                    </div>
                </div>

                <div className={style.item}>
                    <div className={style.itemIndex}>03</div>
                    <Image className={style.itemImage} src={'/icons/roundIcon.svg'} alt='process1' width={24} height={24} />
                    <div className={style.itemCon}>
                        {t('step3')}
                    </div>
                </div>

                <div className={style.item}>
                    <div className={style.itemIndex}>04</div>
                    <Image className={style.itemImage} src={'/icons/roundIcon.svg'} alt='process1' width={24} height={24} />
                    <div className={style.itemCon}>
                        {t('step4')}
                    </div>
                </div>
                <div className={style.line}></div>
            </div>
        </div>
    </div>
}