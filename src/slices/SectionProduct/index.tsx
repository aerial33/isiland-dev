import Button from '@/components/Button'
import Heading from '@/components/Heading'
import { Content } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import {
	JSXMapSerializer,
	PrismicRichText,
	SliceComponentProps,
} from '@prismicio/react'
import clsx from 'clsx'

const components: JSXMapSerializer = {
	heading2: ({ children }) => (
		<Heading
			as='h2'
			size='lg'
			className=' mb-4 mt-2 first:mt-0 last:mb-0 font-semibold'
		>
			{children}
		</Heading>
	),
	paragraph: ({ children }) => (
		<p className='text-base text-secondary max-w-lg prose'>{children}</p>
	),
}

/**
 * Props for `SectionProduct`.
 */
export type SectionProductProps =
	SliceComponentProps<Content.SectionProductSlice>

/**
 * Component for "SectionProduct" Slices.
 */
const SectionProduct = ({ slice }: SectionProductProps): JSX.Element => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<div className='px-4 xl:px-0 py-10 lg:pb-16 mt-8 md:mt-12'>
				<div className='mx-auto w-full max-w-6xl flex flex-col gap-8 justify-between items-start md:items-center  md:flex-row'>
					<div>
						<PrismicRichText
							field={slice.primary.heading}
							components={components}
						/>
						<PrismicRichText
							field={slice.primary.subheading}
							components={components}
						/>
					</div>
					<PrismicRichText
						field={slice.primary.description}
						components={components}
					/>
				</div>
			</div>
			<div className=' grid md:auto-rows-auto grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto'>
				{slice.items.map((item, index) => (
					<div
						key={index}
						className={clsx(
							'relative row-span-1 ',
							index === 3 || index === 6 ? 'md:col-span-3' : ''
						)}
					>
						<PrismicNextImage field={item.image} className='object-cover' />

						<Button
							field={item.label}
							className='btn-primary border border-red absolute bottom-0 right-0'
						>
							{item.button} <span className='ml-20'>&#8594;</span>
						</Button>
					</div>
				))}
			</div>
		</section>
	)
}

export default SectionProduct
