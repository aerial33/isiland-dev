'use client'

import { Content } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import {
	PrismicRichText,
	PrismicText,
	SliceComponentProps,
} from '@prismicio/react'
import { useState } from 'react'

/**
 * Props for `NavigationItem`.
 */
export type NavigationItemProps =
	SliceComponentProps<Content.NavigationItemSlice>

/**
 * Component for "NavigationItem" Slices.
 */
const NavigationItem = ({ slice }: NavigationItemProps): JSX.Element => {
	const [active, setActive] = useState<string | null>(null)
	return (
		<nav
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			{/* <Menu setActive={setActive}>
				{slice.variation === 'default' ? (
					<PrismicNextLink field={slice.primary.linkto}>
						<>{slice.primary.label}</>
					</PrismicNextLink>
				) : (
					<MenuItem
						setActive={setActive}
						active={active}
						item={slice.primary.label}
					>
						<PrismicNextLink field={slice.primary.sub_menu}>
							<HoveredLink href={slice.primary.sub_menu}>
								{slice.primary.label}
							</HoveredLink>
						</PrismicNextLink>
					</MenuItem>
				)}
			</Menu> */}
			Navbar
		</nav>
	)
}

export default NavigationItem
