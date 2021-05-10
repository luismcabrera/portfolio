import { createContext, useContext, useMemo, useState } from 'react';

export const LangContext = createContext();

const langs = {
	en: 'en',
	es: 'es',
};

const initialLang = langs.es;

export const LangProvider = ({ children }) => {
	const [lang, setLang] = useState(initialLang);

	const value = useMemo(
		() => ({
			lang,
			langs,
		}),
		[lang]
	);

	return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export const useGlobalLang = () => {
	return useContext(LangContext);
};
