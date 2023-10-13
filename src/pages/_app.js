import i18n from '@/i18n';
import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Router } from 'next/router';
import { useEffect } from 'react';
import { Client, HydrationProvider } from 'react-hydration-provider';
import { I18nextProvider } from 'react-i18next';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });
export default function App({ Component, pageProps }) {
	useEffect(() => {
		const handleRouteStart = () => NProgress.start();
		const handleRouteDone = () => NProgress.done();

		Router.events.on('routeChangeStart', handleRouteStart);
		Router.events.on('routeChangeComplete', handleRouteDone);
		Router.events.on('routeChangeError', handleRouteDone);

		return () => {
			Router.events.off('routeChangeStart', handleRouteStart);
			Router.events.off('routeChangeComplete', handleRouteDone);
			Router.events.off('routeChangeError', handleRouteDone);
		};
	}, []);
	return (
		<HydrationProvider>
			<I18nextProvider i18n={i18n}>
				<ChakraProvider>
					<Client>
						<Component {...pageProps} />
					</Client>
				</ChakraProvider>
			</I18nextProvider>
		</HydrationProvider>
	);
}
