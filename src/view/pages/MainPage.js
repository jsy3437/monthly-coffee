import React from 'react';
import Footer from '../components/Main/Footer';
import IntroBanner from '../components/Main/IntroBanner';
import MainBanner from '../components/Main/MainBanner';
import Navbar from '../components/Main/Navbar';

const MainPage = () => {
	return (
		<div>
			<Navbar />
			<MainBanner />
			<IntroBanner />
			<MainBanner />
			<Footer />
		</div>
	);
};

export default MainPage;
