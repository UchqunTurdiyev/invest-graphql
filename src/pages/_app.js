import i18n from '@/i18n';
import '@/styles/globals.css';
// import 'styles/nprogress';
import { ChakraProvider } from '@chakra-ui/react';
import { Router, useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Client, HydrationProvider } from 'react-hydration-provider';
import { I18nextProvider } from 'react-i18next';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });
export default function App({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		const startLoading = () => NProgress.start();
		const endLoading = () => NProgress.done();

		router.events.on('routeChangeStart', startLoading);
		router.events.on('routeChangeComplete', endLoading);
		router.events.on('routeChangeError', endLoading);
		return () => {
			router.events.off('routeChangeStart', startLoading);
			router.events.off('routeChangeComplete', endLoading);
			router.events.off('routeChangeError', endLoading);
		};
	}, [router]);

	const [showChild, setShowChild] = useState(false);
	useEffect(() => {
		setShowChild(true);
	}, []);

	if (!showChild) {
		return null;
	}

	if (typeof window === 'undefined') {
		return <></>;
	} else {
		return (
			<>
				<I18nextProvider i18n={i18n}>
					<ChakraProvider>
						<Component {...pageProps} />
					</ChakraProvider>
				</I18nextProvider>
			</>
		);
	}
}
