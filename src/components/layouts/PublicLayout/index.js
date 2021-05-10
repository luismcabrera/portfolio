import Navigation from '../../generics/Navigation';
import styles from './PublicLayout.module.scss';
import cn from 'classnames';

export default function PublicLayout({ children, className, ...restProps }) {
	return (
		<div className={cn(styles.container, className)} {...restProps}>
			<Navigation fixed/>
			{children}
		</div>
	);
}
