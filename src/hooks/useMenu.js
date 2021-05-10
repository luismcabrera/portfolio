import { useEffect, useRef, useState } from 'react';


export default function useMenu(initialValue) {
	const [isOpenMenu, setIsOpenMenu] = useState(initialValue || false);
	const openMenu = () => setIsOpenMenu(true);
	const closeMenu = () => setIsOpenMenu(false);
	const toggleMenu = () => setIsOpenMenu(!isOpenMenu);
	const navigationRef = useRef();

	useEffect(() => {
		const handleWindowClick = (e) => {
            // const navigationElement = document.querySelector('#navigation');
			const navigationElement = navigationRef.current;
			if (!navigationElement) return;
			const elementClicked = e.target;

			const clickedInsideNavigation =
				navigationElement === elementClicked || navigationElement.contains(elementClicked);
			if (!clickedInsideNavigation) {
				closeMenu();
				// console.log('Click afuera de la navegación');
			}
		};
		window.addEventListener('click', handleWindowClick);
		return () => window.removeEventListener('click', () => handleWindowClick);
	}, []);

	return {
		navigationRef,
		isOpenMenu,
		openMenu,
		closeMenu,
		toggleMenu,
	};
}
