import styles from './SocialButton.module.scss';
import cn from 'classnames';
import Button from '../Button';
import { Icon } from '@iconify/react';
const iconColor = '#f5f5f5';

export default function SocialButton({ className, Icon: IconProp, ...restProps }) {
	return (
		<Button className={cn(styles.socialButton, className)} {...restProps}>
			{IconProp && <Icon className={styles.icon} icon={IconProp} color={iconColor} />}
		</Button>
	);
}
