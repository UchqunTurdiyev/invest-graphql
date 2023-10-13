import { Footer, Header } from '@/components';
import { Box } from '@chakra-ui/react';
import React, { Component } from 'react';

export default function Layout({ children }) {
	return (
		<Box>
			<Header />
			<Box>{children}</Box>
			<Footer />
		</Box>
	);
}

// hay oredr component

export const withLayout = Component => {
	return function withLayoutComponent(props) {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};
