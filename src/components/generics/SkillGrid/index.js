import styles from './SkillGrid.module.scss';
import cn from 'classnames';
import SkillCard from '../SkillCard';

export default function SkillGrid({ className, children, ...restProps }) {
	return <div className={cn(styles.container, className)} {...restProps}>{children}</div>;
}

SkillGrid.Card = ({ className, ...restProps }) => {
	return <SkillCard className={cn(styles.card, className)} {...restProps} />;
};
