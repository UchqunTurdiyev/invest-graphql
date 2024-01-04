import Image from 'next/image';
import { Inter } from 'next/font/google';
import {
	getAbout,
	getAboutBottom,
	getAboutHero,
	getAboutLeft,
	getAmount,
	getContainer,
	getCourse,
	getCoursePage,
	getEducation,
	getHero,
	getHeroCarousel,
	getStatistik,
	getUpcomingMeetings,
} from '@/services';
import { Footer, Header, Main } from '@/components';
import Seo from '@/layout/seo';

const inter = Inter({ subsets: ['latin'] });

export default function Home({
	statistic,
	hero,
	carousel,
	upcoming,
	container,
	course,
	aboutHero,
	aboutBottom,
	aboutLeft,
	coursePage,
}) {
	return (
		<Seo metaTitle='Invest school' metaDescription={'Invest school xususiy maktbai'}>
			<Header />
			<Main
				hero={hero}
				carousel={carousel}
				upcoming={upcoming}
				container={container}
				course={course}
				aboutHero={aboutHero}
				aboutBottom={aboutBottom}
				aboutLeft={aboutLeft}
				statistic={statistic}
				coursePage={coursePage}
			/>
			<Footer />
		</Seo>
	);
}

export async function getStaticProps() {
	const hero = (await getHero()) || [];
	const carousel = (await getHeroCarousel()) || [];
	const education = (await getEducation()) || [];
	const upcoming = (await getUpcomingMeetings()) || [];
	const container = (await getContainer()) || [];
	const course = (await getCourse()) || [];
	const aboutHero = (await getAboutHero()) || [];
	const aboutBottom = (await getAboutBottom()) || [];
	const aboutLeft = (await getAboutLeft()) || [];
	const coursePage = (await getCoursePage()) || [];
	const statistic = (await getStatistik()) || [];

	return {
		props: {
			hero,
			carousel,
			education,
			upcoming,
			container,
			course,
			aboutHero,
			aboutBottom,
			aboutLeft,
			coursePage,
			statistic,
		},
	};
}
