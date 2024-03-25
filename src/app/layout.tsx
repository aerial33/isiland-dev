import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import clsx from 'clsx'
import './globals.css'
import { createClient } from '@/prismicio'

const poppins = Poppins({
	subsets: ['latin'],
	variable: '--font-poppins',
	display: 'swap',
	weight: ['100', '200', '400', '500', '600', '700'],
})

export async function generateMetadata(): Promise<Metadata> {
	const client = createClient()

	const page = await client.getSingle('settings')

	return {
		title: page.data.site_title || 'Isiland next',
		description:
			page.data.meta_description || "Isiland créateur d'espace d'interieur",
		openGraph: {
			images: [page.data.og_image.url || ''],
		},
	}
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='fr' className={clsx(poppins.variable)}>
			<body>
				<header>Header !</header>
				{children}
				<footer>Footer !</footer>
			</body>
		</html>
	)
}
