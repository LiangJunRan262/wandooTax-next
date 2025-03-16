'use client';
import Image from 'next/image';
import styles from './index.module.css';

export default function Header() {
	return <header className={'container ' + styles.container}>
		<div className={'boxMain ' + styles.headerMain}>
			<div className={'flex ' + styles.phone}>
				<Image
					src="/icons/phoneIcon.svg"
					alt="phone-icon"
					width={14}
					height={14}
					priority
				/>
				<span>519-991-0925</span>
			</div>
			<div className={'flex ' + styles.email}>
				<Image
					src="/icons/emailIcon.svg"
					alt="email-icon"
					width={14}
					height={14}
					priority
				/>
				<span>info@wandootax.com</span>
			</div>

			<div className={styles.line}></div>

			<div className={'flex ' + styles.channel}>
				{/* <div className={styles.channelItem}>
					<Image
						src="/icons/inIcon.svg"
						alt="in-icon"
						width={14}
						height={14}
					/>
				</div>
				<div className={styles.channelItem}>
					<Image
						src="/icons/facebookIcon.svg"
						alt="facebook-icon"
						width={14}
						height={14}
					/>
				</div> */}
				{/* <div className={styles.channelItem}>
					<Image
						src="/icons/wxIcon.svg"
						alt="wx-icon"
						width={14}
						height={14}
					/>
				</div> */}
				<div className={`flex ${styles.channelItem}`} onClick={() => {
					window.open('https://www.xiaohongshu.com/user/profile/67714c240000000015007ec1', '_blank')
				}}>
					<Image
						src="/icons/xhsIcon.svg"
						alt="xhs-icon"
						width={25}
						height={14}
					/>
					<div className={styles.channelPopup}>
						<div className={styles.triangle} style={{position:"relative", left: '12%'}}></div>
						<div className={styles.channelPopupCon}>
							小红书账号：WandooTax
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>;
}