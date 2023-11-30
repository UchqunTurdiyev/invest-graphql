import Image from 'next/image';
import { Inter } from 'next/font/google';
import {
	getAbout,
	getContainer,
	getCourse,
	getEducation,
	getHero,
	getHeroCarousel,
	getPost,
	getPosts,
	getUpcomingMeetings,
} from '@/services';
import { Footer, Header, Main } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ posts, hero, carousel, upcoming, container, course }) {
	return (
		<>
			<Header />
			<Main hero={hero} carousel={carousel} upcoming={upcoming} container={container} course={course} />
			<Footer />
		</>
	);
}

export async function getStaticProps() {
	// const posts = (await getPosts()) || [];
	const hero = (await getHero()) || [];
	const carousel = (await getHeroCarousel()) || [];
	const education = (await getEducation()) || [];
	const upcoming = (await getUpcomingMeetings()) || [];
	const container = (await getContainer()) || [];
	const course = (await getCourse()) || [];

	return {
		props: { hero, carousel, education, upcoming, container, course },
	};
}
