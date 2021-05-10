import cn from 'classnames';
import styles from './Avatar.module.scss';
import Image from 'next/image';

export default function Avatar({ src, alt, className, imgClassName, ...restProps }) {
	return (
		<div className={cn(className, styles.container)} {...restProps}>
			<Image
				src={src}
				alt={alt || 'avatar'}
				className={cn(styles.img, imgClassName)}
				draggable={false}
				width={200}
				height={200}
				layout="responsive"
			/>
		</div>
	);
}
