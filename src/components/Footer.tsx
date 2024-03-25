import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next'
import Link from 'next/link'

const Footer = async () => {
	const client = createClient()

	const settings = await client.getSingle('settings')

	return (
		<footer>
			<Link href='/'>{settings.data.site_title}</Link>
			<p>©{new Date().getFullYear()} Isiland</p>
			<ul>
				{settings.data.navigation.map(({ label, link }) => (
					<li key={label}>
						<PrismicNextLink field={link}>{label}</PrismicNextLink>
					</li>
				))}
			</ul>
		</footer>
	)
}
export default Footer
