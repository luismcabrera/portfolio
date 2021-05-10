import styles from './Card.module.scss';
import cn from 'classnames';

export default function Card({ children, className, ...restProps }) {
	return (
		<div className={cn(styles.container, className)} {...restProps}>
			{children}
		</div>
	);
}
