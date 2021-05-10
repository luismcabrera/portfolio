import styles from './Skills.module.scss';
import cn from 'classnames';
import SectionTitle from '../../generics/SectionTitle';
import SkillGrid from '../../generics/SkillGrid';
import skills from './data/skills';
import Cobot from '../../Cobot';
import { useState } from 'react';
import { useGlobalLang } from '../../../global/lang';
import texts from './data/texts';
import { sample } from 'lodash';
import robotMessages from './robotMessages';

const animationBackground = '/img/tree3.svg';

export default function Skills() {
	const { lang } = useGlobalLang();
	
	const [showMessage, setShowMessage] = useState(false);
	const [message, setMessage] = useState('');
	const [block, setBlock] = useState(false);

	const handleRobotClick = () => {
		if (block) return;
		if (showMessage) {
			setShowMessage(false);
			setBlock(true);
			setTimeout(() => {
				const newMessage = sample(robotMessages[lang].filter((arrayMessage) => arrayMessage !== message));
				setMessage(newMessage);
				setShowMessage(true);
			}, 350);
		} else {
			setBlock(true);
			setShowMessage(true);
			setMessage(sample(robotMessages[lang]));
			setTimeout(() => {
				setBlock(false);
			}, 350);
		}
		setTimeout(() => {
			setBlock(false);
		}, 710);
	};

	return (
		<section className={styles.container} id="skills">
			<SectionTitle className={styles.title}>{texts.title[lang]}</SectionTitle>
			<div className={styles.content}>
				<SkillGrid className={styles.grid}>
					{skills.map(({ title, content, Icon }, index) => (
						<SkillGrid.Card key={index} title={title[lang]} content={content[lang]} Icon={Icon} />
					))}
				</SkillGrid>
				<div className={styles.animation} style={{ backgroundImage: `url(${animationBackground})` }}>
					<div className={styles.messages}>
						<p
							className={cn(
								styles.message,
								{ [styles.messageHide]: !showMessage },
								{ [styles.messageTextLite]: message.length > 40 }
							)}
						>
							{message}
						</p>
					</div>
					<div className={styles.animationRobot}>
						<div className={styles.animationRotate}>
							<Cobot onClick={handleRobotClick} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
