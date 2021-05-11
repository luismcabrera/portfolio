import styles from './Contact.module.scss';
import cn from 'classnames';
import Form from '../../generics/Form';
import Button from '../../generics/Button';
import SectionTitle from '../../generics/SectionTitle';
import SocialButtonGroup from '../../generics/SocialButtonGroup';

import { useInView } from 'react-intersection-observer';
import { useCallback, useEffect, useRef, useState } from 'react';
import useForm from '../../../hooks/useForm';
import texts from './data/texts';
import { useGlobalLang } from '../../../global/lang';
import socialLinks from './data/socialLinks';
// import Robotic from '../../Robotic';
import emailjs from 'emailjs-com';
emailjs.init('user_2U9y2ZqcRIdQsQvjmb6Hv');
// import roboticImg from '../../svg/robotic.svg';

const treeImg = '/img/tree1.svg';
const roboticImg = '/img/Robotic.svg';

const initialFormValues = {
	email: '',
	message: '',
};

export default function Contact({ children, className, style, ...restProps }) {
	const { lang } = useGlobalLang();

	// Focus in Intersect
	const emailInputRef = useRef();
	const { ref: inViewRef, inView } = useInView({ threshold: 0 });
	const formRef = useRef();
	const setRefs = useCallback(
		(node) => {
			emailInputRef.current = node;
			inViewRef(node);
		},
		[inViewRef]
	);
	useEffect(() => {
		if (inView) {
			setTimeout(() => {
				const anotherInputIsSelected = formRef.current.contains(document.activeElement);
				if (inView && !anotherInputIsSelected) {
					emailInputRef.current.focus();
				}
			}, 500);
		}
	}, [inView]);

	// Message

	const [showMessage, setShowMessage] = useState(true);
	const [message, setMessage] = useState('Envía un mensaje');
	const [typeMessage, setTypeMessage] = useState('success');
	const [block, setBlock] = useState(false);

	const handleChangeMessage = (newMessage, type) => {
		if (block) return;
		if (showMessage) {
			setShowMessage(false);
			setBlock(true);
			setTimeout(() => {
				if (typeMessage !== type) {
					setTypeMessage(type);
				}
				setMessage(newMessage);
				setShowMessage(true);
			}, 350);
		} else {
			setBlock(true);
			setShowMessage(true);
			setMessage(newMessage);
			setTimeout(() => {
				setBlock(false);
			}, 350);
		}
		setTimeout(() => {
			setBlock(false);
		}, 710);
	};

	// Form
	const { handleSubmit, register, resetFormValues } = useForm(initialFormValues, { validationFunction });
	function onSubmit(formValues) {
		const serviceID = 'default_service';
		const templateID = 'contact_form';

		setIsLoading(true);
		setIsSended(false);

		emailjs
			.send(serviceID, templateID, {
				message: formValues.message,
				from_email: formValues.email,
			})
			.then(() => {
				resetFormValues();
				handleChangeMessage('¡Mensaje enviado!', 'success');
				setIsSended(true);
			})
			.catch((err) => {
				// alert(JSON.stringify(err));
				handleChangeMessage('No se pudo enviar :(', 'error');
			})
			.finally(() => {
				setIsLoading(false);
			});
	}

	const [isLoading, setIsLoading] = useState(false);
	const [isSended, setIsSended] = useState(false);

	return (
		<div
			className={cn(styles.container, className)}
			{...restProps}
			style={{ backgroundImage: `url(${treeImg})`, ...style }}
			id="contact"
		>
			<SectionTitle className={styles.title}>{texts.title[lang]}</SectionTitle>
			<div className={styles.content}>
				<div className={styles.animation}>
					<p
						className={cn(
							styles.message,
							{ [styles.messageHide]: !showMessage },
							{ [styles.messageError]: typeMessage === 'error' }
						)}
					>
						{message}
					</p>
					<img className={styles.avatarRobotic} src={roboticImg} alt="robotic" draggable={false} />
					{/* <Robotic className={styles.avatarRobotic} src="/img/robotic.svg" alt="robotic" draggable={false} /> */}
				</div>
				<div className={styles.info}>
					<Form className={styles.form} ref={formRef} onSubmit={handleSubmit(onSubmit)}>
						{/* <Form.Control placeholder="Email" ref={inViewRef} /> */}
						<Form.Control
							placeholder={texts.inputs.email.defaultPlaceholder[lang]}
							ref={setRefs}
							{...register('email')}
						/>
						<Form.TextArea
							rows={6}
							placeholder={texts.inputs.message.defaultPlaceholder[lang]}
							{...register('message')}
						/>
						<Button
							variant="primary"
							className={styles.submitButton}
							loading={isLoading}
							check={isSended}
							disabled={isLoading}
							large
						>
							Enviar
						</Button>
					</Form>

					<SocialButtonGroup className={styles.buttonGroup}>
						{socialLinks.map(({ Icon, url }, index) => (
							<SocialButtonGroup.Button
								as="a"
								Icon={Icon}
								href={url}
								key={index}
								target="_blank"
								rel="noopener"
								rel="noreferrer"
							/>
						))}
					</SocialButtonGroup>
				</div>
			</div>
		</div>
	);
}

function validationFunction(formValues) {
	const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	const errors = {};
	if (formValues.email.trim() === '') errors.email = 'Debe ingresar un email válido';
	else if (!emailRegex.test(formValues.email)) errors.email = 'Debe ingresar un email válido.';
	if (formValues.message.trim() === '') errors.message = 'Debe ingresar un mensaje.';
	return errors;
}
