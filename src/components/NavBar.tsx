'use client'

import Logo from '@/components/Logo'
import { Content, asLink } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { MdClose, MdMenu } from 'react-icons/md'

type NavbarProps = {
	settings: Content.SettingsDocument
}

const NavBar = ({ settings }: NavbarProps) => {
	const [open, setOpen] = useState(false)
	const pathname = usePathname()
	return (
		<nav aria-label='Main'>
			<div className='mx-auto flex max-6xl flex-col justify-between py-2 text-white md:flex-row md:items-center'>
				<div className='flex items-center justify-between '>
					<Link href='/' className='z-50' onClick={() => setOpen(false)}>
						<Logo />
						<span className='sr-only'>Isiland</span>
					</Link>
					<button
						type='button'
						className='block p-2 text-4xl text-white md:hidden'
						aria-expanded={open}
						onClick={() => setOpen(true)}
					>
						<MdMenu />
						<span className='sr-only'>Open menu</span>
					</button>
				</div>
				{/* Mobile Nav */}
				<div
					className={clsx(
						'fixed bottom-0 right-0 left-0 top-0 z-40 flex flex-col items-end ga-4 bg-secondary/90 pr-4 pt14 transition-transform duration-300 ease-in-out motion-reduce:transition-none md:hidden',
						open ? 'translate-x-0' : 'translate-x-[100%]'
					)}
				>
					<button
						type='button'
						className='block p-2 text-4xl text-white md:hidden fixed right-4 top-10'
						aria-expanded={open}
						onClick={() => setOpen(false)}
					>
						<MdClose />
						<span className='sr-only'>Close menu</span>
					</button>

					<div className='grid justify-items-end gap-8 mt-24'>
						{settings.data.navigation.map((item) => (
							<PrismicNextLink
								key={item.label}
								className='block px-3 text-3xl first:mt-8'
								field={item.link}
								onClick={() => setOpen(false)}
								aria-current={
									pathname.includes(asLink(item.link) as string)
										? 'page'
										: undefined
								}
							>
								{item.label}
							</PrismicNextLink>
						))}
						<div className='flex flex-col mt-12 text-2xl'>
							<p className=' font-semibold'>Devis Gratuit</p>
							<a href=''>05 57 93 22 00</a>
						</div>
					</div>
				</div>

				{/* Desktop Nav */}
				<ul className='gap-4 hidden md:flex'>
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

				<div className='flex flex-col items-end '>
					<p className='text-lg font-semibold'>Devis Gratuit</p>
					<a href=''>05 57 93 22 00</a>
				</div>
			</div>
		</nav>
	)
}
export default NavBar
