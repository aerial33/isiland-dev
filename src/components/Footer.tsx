import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next'
import Link from 'next/link'
import Logo from '@/components/Logo'
import Bounded from '@/components/Bounded'

const Footer = async () => {
	const client = createClient()

	const settings = await client.getSingle('settings')

	return (
		<Bounded as='footer'>
			<div className='flex flex-col items-center justify-between gap-6 sm:flex-row'>
				<Link href='/'>
					<Logo color='text-secondary' />
				</Link>
				<p className='text-xs'>©{new Date().getFullYear()} Isiland</p>
				<ul className='flex'>
					{settings.data.navigation.map(({ label, link }) => (
						<li key={label}>
							<PrismicNextLink field={link} className='p-3'>
								{label}
							</PrismicNextLink>
						</li>
					))}
				</ul>
			</div>
		</Bounded>
	)
}
export default Footer
