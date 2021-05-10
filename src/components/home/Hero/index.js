import styles from './Hero.module.scss';
import cn from 'classnames';
import Avatar from '../../generics/Avatar';
import texts from './data/texts';
import Button from '../../generics/Button';
import Link from 'next/link';
import { useGlobalLang } from '../../../global/lang';

const treeImg = '/img/tree2.svg';

export default function Hero() {
	const { lang } = useGlobalLang();

	const downloadLinkCv = 'https://drive.google.com/uc?export=download&id=1Mb4hwdSAI8yZUYA5GdynGv3ZSdj25jAp';

	return (
		<section className={styles.container} style={{ backgroundImage: `url(${treeImg})` }} id="home">
			<Avatar src={'/img/profile.jpg'} className={styles.avatar} />
			<div className={cn(styles.profileCard)}>
				<p className={styles.profession}>{texts.profileCard.profession[lang]}</p>
				<h1 className="mb-1">{texts.profileName}</h1>
				<p className={styles.paragraph}>{texts.profileCard.paragraph[lang]}</p>
				<div className={styles.buttonList}>
					<Button variant="primary" as="a" href={downloadLinkCv}>{texts.profileCard.buttons.downloadCv[lang]}</Button>
					<Link href="#contact">
						<a>
							<Button>{texts.profileCard.buttons.contact[lang]}</Button>
						</a>
					</Link>
				</div>
			</div>
		</section>
	);
}
