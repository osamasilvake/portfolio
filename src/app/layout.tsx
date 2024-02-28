import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'application',
	description: 'Generated by create next app'
};

interface RootValue {
	children: React.ReactNode;
}

const RootLayout = ({ children }: RootValue) => {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body className={inter.className} suppressHydrationWarning={true}>
				<div>{children}</div>
			</body>
		</html>
	);
};

export default RootLayout;
