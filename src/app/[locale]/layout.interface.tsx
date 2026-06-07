export interface LocalProps {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}
