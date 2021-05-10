import styles from './SkillCard.module.scss';
import cn from 'classnames';
import { Icon } from '@iconify/react';

const iconColor = '#007bff';

export default function SkillCard({ className, title, content, Icon: IconProp, ...restProps }) {
	return (
		<div className={cn(styles.SkillCard, className)} {...restProps}>
			<div className={styles.iconContainer}>
				{IconProp && <Icon className={styles.icon} icon={IconProp} color={iconColor} />}
			</div>
			<div className={styles.content}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.body}>{content}</p>
			</div>
		</div>
	);
}
