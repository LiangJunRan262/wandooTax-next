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
					priority // 关键资源预加载
				/>
				<span>519-991-0925</span>
			</div>
			<div className={'flex ' + styles.email}>
				<Image
					src="/icons/emailIcon.svg"
					alt="email-icon"
					width={14}
					height={14}
					priority // 关键资源预加载
				/>
				<span>info@wandootax.com</span>
			</div>

			<div className={styles.line}></div>

			<div className={'flex ' + styles.channel}>
				<div className={styles.channelItem}>
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
				</div>
				<div className={styles.channelItem}>
					<Image
						src="/icons/wxIcon.svg"
						alt="wx-icon"
						width={14}
						height={14}
					/>
				</div>
				<div className={styles.channelItem}>
					<Image
						src="/icons/xhsIcon.svg"
						alt="xhs-icon"
						width={25}
						height={14}
					/>
				</div>
			</div>
		</div>
	</header>;
}