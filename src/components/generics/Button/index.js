import styles from './Button.module.scss';
import cn from 'classnames';
import { forwardRef } from 'react';
import Loader from '../Loader';
import { Icon } from '@iconify/react';
import NoteIcon from '@iconify/icons-simple-line-icons/check';

function ButtonContainer(props, ref) {
	const { className, children, variant, as: Tag = 'button', loading, check, ...restProps } = props;
	const classes = cn(
		'button',
		styles.button,
		{ [styles['button-primary']]: variant === 'primary' },
		{ [styles.buttonLink]: variant === 'link' },
		{ [styles.buttonLinkPrimary]: variant === 'link-primary' },
		{ [styles.buttonLinkSuccess]: variant === 'link-success' },
		className
	);

	return (
		<Tag className={classes} {...restProps} ref={ref}>
			{children}
			{loading && (
				<div className={styles.icon}>
					<Loader />
				</div>
			)}
			{check && (
				<div className={styles.icon}>
					<Icon icon={NoteIcon} />
				</div>
			)}
		</Tag>
	);
}

export default forwardRef(ButtonContainer);
