import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import clsx from 'clsx'
import './globals.css'
import { createClient, repositoryName } from '@/prismicio'
import { PrismicPreview } from '@prismicio/next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const poppins = Poppins({
	subsets: ['latin'],
	variable: '--font-poppins',
	display: 'swap',
	weight: ['100', '200', '400', '500', '600', '700'],
})

export async function generateMetadata(): Promise<Metadata> {
	const client = createClient()

	const settings = await client.getSingle('settings')

	return {
		title: settings.data.site_title || 'Isiland next',
		description:
			settings.data.meta_description || "Isiland créateur d'espace d'interieur",
		openGraph: {
			images: [settings.data.og_image.url || ''],
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
				{/* <Header /> */}
				{children}
				<Footer />
				<PrismicPreview repositoryName={repositoryName} />
			</body>
		</html>
	)
}
