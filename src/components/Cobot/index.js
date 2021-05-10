import Head from './Head';
import Amazed from './gestures/Amazed';
import Angry from './gestures/Angry';
import Death from './gestures/Death';
import Excited from './gestures/Excited';
import Happy from './gestures/Happy';
import Idea from './gestures/Idea';
import Love from './gestures/Love';
import Message from './gestures/Message';
import styles from './Cobot.module.scss';
import { useMemo } from 'react';

const gestures = {
	amazed: Amazed,
	angry: Angry,
	death: Death,
	excited: Excited,
	happy: Happy,
	idea: Idea,
	love: Love,
	message: Message,
};

export default function Cobot({ type = 'happy', ...restProps }) {
	const Gesture = useMemo(() => gestures[type], [type]);

	return (
		<div className={styles.container} {...restProps}>
			<Head />
			<div className={styles.gestureContainer}>
				<Gesture />
			</div>
		</div>
	);
}
