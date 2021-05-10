import styles from './Navigation.module.scss';
import cn from 'classnames';
import useMenu from '../../../hooks/useMenu';
import { Icon } from '@iconify/react';
import MenuIcon from '@iconify/icons-simple-line-icons/menu';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import links from './data/links';
import { useGlobalLang } from '../../../global/lang';

export default function Navigation({ children, className, fixed, ...restProps }) {
	const { lang } = useGlobalLang();

	const { navigationRef, isOpenMenu, toggleMenu, closeMenu } = useMenu(false);
	const [scroll, setScroll] = useState({
		prev: undefined,
		current: undefined,
	});

	useEffect(() => {
		const handleScroll = (e) => {
			let scrollY = window.scrollY;

			setScroll(({ prev, current }) => ({
				prev: current,
				current: scrollY,
			}));
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const scrollDirection = useMemo(() => {
		if (scroll.prev === undefined || scroll.current === undefined) return null;
		return scroll.current > scroll.prev ? 'down' : 'up';
	}, [scroll]);

	const scrolled = useMemo(() => scroll.current > 400, [scroll.current]);

	const showNavigationFixed = useMemo(() => {
		return scrolled && scrollDirection === 'up';
	}, [scrolled, scrollDirection]);

	useEffect(() => {
		if (isOpenMenu) closeMenu();
	}, [scrollDirection]);

	return (
		<nav
			className={cn(styles.navigation, className, {
				[styles.navigationFixed]: scrolled,
				[styles.navigationFixedShow]: showNavigationFixed,
				// [styles.navigationWithTransition]: scrolled,
			})}
			// className={cn(styles.navigation, className, { [styles.navigationFixed]: scrolled })}
			ref={navigationRef}
			{...restProps}
		>
			<div className={styles.navigation__left}>
				<h2 className={styles.logo}>
					<span className={styles.logo__icon}>{`{ Dev }`}</span>
					Luis Cabrera
				</h2>
			</div>
			<div className={styles.navigation__right}>
				<div
					className={cn(styles.collapseMenu, {
						[styles.collapseMenuIsHide]: !isOpenMenu || (scrolled && scrollDirection !== 'up'),
					})}
				>
					{links.map((link, index) => (
						<Link href={link.url} key={index}>
							<a className={styles.collapseMenu__link} onClick={() => isOpenMenu && closeMenu()}>
								{link.name[lang]}
							</a>
						</Link>
					))}
				</div>
				<button
					className={cn('button', styles.buttonMenu, { [styles.buttonMenuActive]: isOpenMenu })}
					onClick={toggleMenu}
				>
					<Icon className={styles.buttonMenu__icon} icon={MenuIcon} />
				</button>
			</div>
		</nav>
	);
}
