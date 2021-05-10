import styles from './Form.module.scss';
import cn from 'classnames';
import { forwardRef } from 'react';

const Form = forwardRef(({ children, className, ...restProps }, ref) => {
	return (
		<form className={cn(styles.form, className)} {...restProps} ref={ref}>
			{children}
		</form>
	);
});

export default Form;

Form.Control = forwardRef((props, ref) => {
	const { type, className, error, ...restProps } = props;
	return (
		<input className={cn(styles.control, className, { [styles.controlError]: error })} {...restProps} ref={ref} />
	);
});

Form.TextArea = ({ children, className, error, ...restProps }) => {
	return (
		<textarea className={cn(styles.control, className, { [styles.controlError]: error })} {...restProps}>
			{children}
		</textarea>
	);
};
