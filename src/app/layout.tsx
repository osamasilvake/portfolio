import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'application',
	description: 'Generated by create next app'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body className={inter.className} suppressHydrationWarning={true}>
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
