'use client'

import { createClient } from '@/prismicio'

import Bounded from '@/components/Bounded'
import { FlyoutNav } from './NavBar'
import clsx from 'clsx'
import { use } from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {
	const path = usePathname()

	return (
		<header
			className={clsx(
				'py-4 z-10 text-white',
				path === '/' ? 'fixed top-0' : 'mb-10'
			)}
		>
			<FlyoutNav />
		</header>
	)
}
export default Header
