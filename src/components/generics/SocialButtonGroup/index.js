import styles from './SocialButtonGroup.module.scss';
import cn from 'classnames';
import SocialButton from '../SocialButton';

export default function SocialButtonGroup({ children, className, ...restProps }) {
	return (
		<div className={cn(styles.socialButtonGroup, className)} {...restProps}>
			{children}
		</div>
	);
}

SocialButtonGroup.Button = ({ className, ...restProps }) => {
	return <SocialButton className={cn(styles.button, className)} {...restProps} />;
};
