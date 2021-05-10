import styles from './ProjectCard.module.scss';
import cn from 'classnames';
import Card from '../Card';
import Image from 'next/image';

export default function ProjectCard({ children, className, ...restProps }) {
	return (
		<Card className={cn(styles.container, className)} {...restProps}>
			{children}
		</Card>
	);
}

ProjectCard.Img = ({ className, imgClassName, ...restProps }) => {
	return (
		<div className={cn(styles.imgWrapper, className)}>
			<Image className={cn(styles.img, imgClassName)} width={200} height={100} {...restProps} />
		</div>
	);
};

ProjectCard.Title = ({ children, className, ...restProps }) => {
	return (
		<h4 className={cn(styles.title, className)} {...restProps}>
			{children}
		</h4>
	);
};

ProjectCard.Description = ({ children, className, ...restProps }) => {
	return (
		<p className={cn(styles.description, className)} {...restProps}>
			{children}
		</p>
	);
};

ProjectCard.ButtonList = ({ children, className, ...restProps }) => {
	return (
		<div className={cn(styles.buttonList, className)} {...restProps}>
			{children}
		</div>
	);
};
