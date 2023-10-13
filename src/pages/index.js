import Image from 'next/image';
import { Inter } from 'next/font/google';
import { getPost, getPosts } from '@/services';
import { Footer, Header, Main } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ posts }) {
	return (
		<>
			<Header />
			<Main posts={posts} />
			<Footer />
		</>
	);
}

export async function getStaticProps() {
	const posts = (await getPosts()) || [];

	return {
		props: { posts },
	};
}
