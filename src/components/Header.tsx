import { createClient } from '@/prismicio'

import Bounded from '@/components/Bounded'
import NavBar from '@/components/NavBar'

const Header = async () => {
	const client = createClient()

	const settings = await client.getSingle('settings')

	return (
		<Bounded
			as='header'
			className='py-8 mb-8 absolute top-0 z-10 w-full text-white'
		>
			<NavBar settings={settings} />
		</Bounded>
	)
}
export default Header
