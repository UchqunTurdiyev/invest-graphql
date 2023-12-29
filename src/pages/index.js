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
	getUpcomingMeetings,
} from '@/services';
import { Footer, Header, Main } from '@/components';
import SEO from '@/layout/seo';

const inter = Inter({ subsets: ['latin'] });

export default function Home({
	amount,
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
		<SEO
			metaTitle='Invest school'
			metaDescription={'Invest school xususiy maktbai'}
			author={'Uchqun Turdiev'}
			metaKeywords={'Talim'}
			ogImage={'https://6459153c9655650068ca2cb3--invest-in-school.netlify.app/light_logo.png'}
		>
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
				amount={amount}
				coursePage={coursePage}
			/>
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
	const aboutHero = (await getAboutHero()) || [];
	const aboutBottom = (await getAboutBottom()) || [];
	const aboutLeft = (await getAboutLeft()) || [];
	const amount = (await getAmount()) || [];
	const coursePage = (await getCoursePage()) || [];

	return {
		props: { hero, carousel, education, upcoming, container, course, aboutHero, aboutBottom, aboutLeft, amount, coursePage },
	};
}
