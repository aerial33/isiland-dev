import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import Heading from '@/components/Heading'

/**
 * Props for `Heading`.
 */
export type HeadingProps = SliceComponentProps<Content.HeadingSlice>

/**
 * Component for "Heading" Slices.
 */
const HeadingSubmenu = ({ slice }: HeadingProps): JSX.Element => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<h3 className='md:mb-8 mb-4 mt-2 first:mt-0 last:mb-0 text-xl font-bold capitalize'>
				{slice.primary.label}
			</h3>
		</section>
	)
}

export default HeadingSubmenu
