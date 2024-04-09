import { createClient } from '@/prismicio'

import Bounded from '@/components/Bounded'
import { FlyoutNav } from './NavBar'

const Header = async () => {
	const client = createClient()

	const settings = await client.getSingle('settings')

	return (
		<header className='py-4 mb-8 md:mb-44 fixed top-0 z-10'>
			<FlyoutNav />
		</header>
	)
}
export default Header
