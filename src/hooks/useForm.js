import { useCallback, useState } from 'react';

export default function useForm(initialFormValues, options) {
	const { validationFunction } = options;
	const initialFormErrors = {};
	for (const key in initialFormValues) {
		initialFormErrors[key] = null;
	}

	const [formValues, setFormValues] = useState(initialFormValues);
	const [formErrors, setFormErrors] = useState(initialFormErrors);

	const resetFormErrors = useCallback((newFormErrors = initialFormErrors) => {
		setFormErrors(newFormErrors);
	}, []);

	const resetFormValues = useCallback((newFormValues = initialFormValues) => {
		setFormValues(newFormValues);
	}, []);

	const comprobateErrors = (name, value) => {
		const errors = validationFunction({ ...formValues, [name]: value });
		setFormErrors({
			...formErrors,
			[name]: errors[name],
		});
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
		comprobateErrors(name, value);
	};

	const handleSubmit = (submitFn) => {
		return (e) => {
			e.preventDefault();
			if (validationFunction) {
				const errors = validationFunction(formValues);
				const hasErrors = Object.keys(errors).length > 0;
				setFormErrors(errors);
				if (hasErrors) return;
			}
			submitFn(formValues);
		};
	};

	const register = (param) => ({
		name: param,
		value: formValues[param],
		error: formErrors[param],
		onChange: handleInputChange,
	});

	return {
		formValues,
		formErrors,
		handleInputChange,
		handleSubmit,
		resetFormValues,
		resetFormErrors,
		register,
	};
}
