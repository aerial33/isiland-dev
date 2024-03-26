import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next'
import Link from 'next/link'
import Bounded from '@/components/Bounded'
import Logo from '@/components/Logo'

const Header = async () => {
	const client = createClient()

	const settings = await client.getSingle('settings')

	return (
		<Bounded as='header' className='py-4 mb-8'>
			<div className='flex gap-4 items-center justify-between sm:flex-row flex-col'>
				<Link href='/'>
					<Logo />
				</Link>
				<nav>
					<ul className='flex md:flex-row flex-col gap-4 md:gap-0'>
						{settings.data.navigation.map(({ label, link }) => (
							<li key={label}>
								<PrismicNextLink
									field={link}
									className='p-3 text-lg font-semibold'
								>
									{label}
								</PrismicNextLink>
							</li>
						))}
					</ul>
				</nav>
				<div className='flex flex-col items-start'>
					<p className='text-lg font-semibold'>Devis Gratuit</p>
					<a href=''>05 57 93 22 00</a>
				</div>
			</div>
		</Bounded>
	)
}
export default Header
