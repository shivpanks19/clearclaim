import React, { useEffect, useState } from 'react';
import { useRouter, Router } from 'next/router';
import styles from '@/elements/pageLoader/PageLoader.module.scss';

const PageLoader: React.FC = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const start = (url: string): void  => {
			if (router.asPath !== url) {
				setLoading(true);
			}
		};
		const end = (): void => {
			setLoading(false);
		};

		Router.events.on('routeChangeStart', start);
		Router.events.on('routeChangeComplete', end);
		Router.events.on('routeChangeError', end);
		return () => {
			Router.events.off('routeChangeStart', start);
			Router.events.off('routeChangeComplete', end);
			Router.events.off('routeChangeError', end);
		};
	}, [router.asPath]);

	if (loading) {
		return (
			<div className={styles.loading}>
				Loading...
			</div>
		);
	}
	return null;
};

export default PageLoader;
