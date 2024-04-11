import { Content } from '@prismicio/client'
import {
	JSXMapSerializer,
	PrismicRichText,
	SliceComponentProps,
} from '@prismicio/react'
import Bounded from '@/components/Bounded'
import Heading from '@/components/Heading'
import { PrismicNextImage } from '@prismicio/next'
import clsx from 'clsx'

const components: JSXMapSerializer = {
	heading2: ({ children }) => (
		<Heading
			as='h2'
			size='lg'
			className='md:mb-8 mb-4 mt-4 lg:first:mt-0 last:mb-0 text-balance'
		>
			{children}
		</Heading>
	),
	paragraph: ({ children }) => (
		<p className='text-xl text-body max-w-lg text-balance'>{children}</p>
	),
}

/**
 * Props for `TextWithImage`.
 */
export type TextWithImageProps = SliceComponentProps<Content.TextWithImageSlice>

/**
 * Component for "TextWithImage" Slices.
 */
const TextWithImage = ({ slice }: TextWithImageProps): JSX.Element => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className='grid'
		>
			<div className='flex items-center flex-col lg:flex-row'>
				<div
					className={clsx(
						'relative w-full h-full lg:w-3/5',
						slice.variation === 'imageRight' && 'md:order-2'
					)}
				>
					<PrismicNextImage
						field={slice.primary.image}
						className='rounded-none h-full w-full bg-cover overflow-hidden'
					/>
					<div
						className={clsx(
							'btn-primary absolute bottom-0 right-0',
							slice.variation === 'imageRight' && 'left-0'
						)}
					>
						{slice.primary.button} <span className='ml-20'>&#8594;</span>
					</div>
				</div>
				<div className='w-full p-11 lg:w-2/5 '>
					<PrismicRichText
						field={slice.primary.heading}
						components={components}
					/>

					<PrismicRichText field={slice.primary.body} components={components} />
				</div>
			</div>
			{slice.variation === 'withTwoImages' && (
				<div className=' mt-8 lg:mt-0 flex flex-col lg:flex-row gap-8 justify-between w-full'>
					<PrismicNextImage field={slice.primary.leftimage} />
					<div className='self-center max-w-xl text-lg text-body'>
						<PrismicRichText field={slice.primary.textcenter} />
					</div>
					<PrismicNextImage field={slice.primary.rightimage} />
				</div>
			)}
		</section>
	)
}

export default TextWithImage
