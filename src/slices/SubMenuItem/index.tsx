import { Content } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import clsx from 'clsx'
import { FaArrowRight } from 'react-icons/fa6'

const icons = {
	arrow: <FaArrowRight />,
}

/**
 * Props for `SubMenuItem`.
 */
export type SubMenuItemProps = SliceComponentProps<Content.SubMenuItemSlice>

/**
 * Component for "SubMenuItem" Slices.
 */
const SubMenuItem = ({ slice }: SubMenuItemProps): JSX.Element => (
	<section
		data-slice-type={slice.slice_type}
		data-slice-variation={slice.variation}
	>
		{slice.variation === 'withIcon' ? (
			<div>
				<PrismicNextLink field={slice.primary.link} className='flex space-x-2'>
					<PrismicNextImage
						field={slice.primary.image}
						className='flex-shrink-0  shadow-2xl bg-cover bg-center'
					/>
					<div>
						<h4 className='text-xl font-semibold mb-1 text-black'>
							{slice.primary.label}
						</h4>
						<PrismicRichText field={slice.primary.description} />
					</div>
				</PrismicNextLink>
			</div>
		) : (
			<div
				className={clsx(
					slice.variation === 'default'
						? 'font-semibold px-6 py-4 mx-6 lg:mx-0 space-y-1'
						: 'font-semibold px-6 py-4 mx-6 lg:mx-0 border space-y-1 transition-colors border-[#EEEEEE]  hover:bg-secondary hover:border-gray-15 hover:text-white cursor-pointer'
				)}
			>
				{slice.variation === 'box' ? (
					<PrismicNextLink
						field={slice.primary.link}
						className='flex flex-col items-start group gap-4 mb-4'
					>
						<h4 className='text-xl text-obsidian group-hover:text-white font-semibold md-1'>
							{slice.primary.label}
						</h4>
						<p className='text-body text-sm max-w-[10rem] group-hover:text-white'>
							{slice.primary.description}{' '}
						</p>
					</PrismicNextLink>
				) : (
					<PrismicNextLink
						field={slice.primary.link}
						className='font-semibold flex justify-between group leading-6'
					>
						<span className='capitalize'>{slice.primary.label}</span>
						<FaArrowRight className='transition-opacity opacity-30 group-hover:opacity-100 w-6 h-6' />
					</PrismicNextLink>
				)}
			</div>
		)}
	</section>
)

export default SubMenuItem
