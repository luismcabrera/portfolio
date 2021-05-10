import styles from './SectionTitle.module.scss';
import cn from 'classnames';

export default function SectionTitle({ children, className, ...restProps}) {
    return (
        <h2 className={cn(styles.sectionTitle, className)} {...restProps}>
           {children} 
        </h2>
    )
}
