import styles from './Projects.module.scss';
// import cn from 'call-bind';
import SectionTitle from '../../generics/SectionTitle';
import Card from '../../generics/ProjectCard';
import Button from '../../generics/Button';
import texts from './data/texts';
import { useGlobalLang } from '../../../global/lang';
import projects from './data/projects';
import { truncate } from 'lodash';

export default function Projects() {
	const { lang } = useGlobalLang();
	return (
		<section className={styles.container} id="projects">
			<SectionTitle className={styles.title}>{texts.title[lang]}</SectionTitle>
			<p className={styles.paragraph}>{texts.sectionDescription[lang]}</p>
			<div className={styles.proectsGrid}>
				{projects.map((project, index) => (
					<Card key={index}>
						<Card.Img src={project.imgUrl} alt="project1" />
						<Card.Title>{project.title[lang]}</Card.Title>
						<Card.Description className={styles.card__description}>
							{truncate(project.description[lang], { length: 60 })}
						</Card.Description>
						<Card.ButtonList>
							<Button variant="link">{texts.cards.buttons.details[lang]}</Button>
							<Button variant="link-success">{texts.cards.buttons.livePreview[lang]}</Button>
						</Card.ButtonList>
					</Card>
				))}
			</div>
		</section>
	);
}
