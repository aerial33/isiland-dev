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
			size='xl'
			className='md:mb-8 mb-4 mt-2 first:mt-0 last:mb-0'
		>
			{children}
		</Heading>
	),
	paragraph: ({ children }) => (
		<p className='text-2xl text-body max-w-md'>{children}</p>
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
		<Bounded
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<div
				className={clsx(
					'grid gap-8 md:grid-cols-2 place-items-center',
					slice.variation === 'textCenter' && 'md:grid-cols-3'
				)}
			>
				<PrismicNextImage
					field={slice.primary.image}
					className={clsx(
						'rounded-none',
						slice.variation === 'imageRight' && 'md:order-2'
					)}
				/>
				<div
					className={clsx(
						'grid gap-4 self-start',
						slice.variation === 'textCenter' && 'self-center'
					)}
				>
					<PrismicRichText
						field={slice.primary.heading}
						components={components}
					/>

					<PrismicRichText field={slice.primary.body} components={components} />
				</div>
				{slice.variation === 'textCenter' && (
					<PrismicNextImage field={slice.primary.image_left} />
				)}
			</div>
		</Bounded>
	)
}

export default TextWithImage
