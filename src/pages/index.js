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
import SEO from '@/layout/seo';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ posts, hero, carousel, upcoming, container, course }) {
	return (
		<SEO
			metaTitle='Invest school'
			metaDescription={'Invest school xususiy maktbai'}
			author={'Uchqun Turdiev'}
			metaKeywords={'school, uchqun'}
			ogImage={'https://6459153c9655650068ca2cb3--invest-in-school.netlify.app/light_logo.png'}
		>
			<Header />
			<Main hero={hero} carousel={carousel} upcoming={upcoming} container={container} course={course} />
			<Footer />
		</SEO>
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
