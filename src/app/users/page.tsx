// app/users/page.tsx
import { prisma } from '@/lib/prisma'; // Adjust this path if your lib folder is located elsewhere

// Force dynamic rendering - don't pre-render at build time
export const dynamic = 'force-dynamic';

// Next.js 15 will run this entirely on the server
export default async function usersPage() {
	// 1. Fetch data directly from PostgreSQL via Prisma
	const users = await prisma.user.findMany();

	return (
		<div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
			<h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>User Directory</h1>

			{users.length === 0 ? (
				<p>No users found. Try adding some to your PostgreSQL database!</p>
			) : (
				<ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
					{users.map((user) => (
						<li
							key={user.id}
							style={{ border: '1px solid #ccc', padding: '0.75rem', borderRadius: '4px', listStyle: 'none' }}>
							<strong>{user.name || 'Anonymous'}</strong> — {user.email}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
