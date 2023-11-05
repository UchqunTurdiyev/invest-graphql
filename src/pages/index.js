import Image from 'next/image';
import { Inter } from 'next/font/google';
import { getEducation, getHero, getHeroCarousel, getPost, getPosts, getUpcomingMeetings } from '@/services';
import { Footer, Header, Main } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ posts, hero, carousel, education, upcoming }) {
	console.log('Upcoming  ' + upcoming);
	return (
		<>
			<Header />
			<Main hero={hero} carousel={carousel} upcoming={upcoming} />
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

	return {
		props: { hero, carousel, education, upcoming },
	};
}
