import { Content } from '@prismicio/client'
import {
	JSXMapSerializer,
	PrismicRichText,
	SliceComponentProps,
} from '@prismicio/react'
import Bounded from '@/components/Bounded'
import Heading from '@/components/Heading'
import { FaHandSparkles, FaClipboardList } from 'react-icons/fa'
import { TbTools } from 'react-icons/tb'
import Image from 'next/image'

const components: JSXMapSerializer = {
	heading2: ({ children }) => (
		<Heading as='h2' size='lg' className=' text-obsidian font-semibold mt-16'>
			{children}
		</Heading>
	),
	heading3: ({ children }) => (
		<Heading
			as='h3'
			size='sm'
			className='mb-4 text-left text-obsidian font-medium'
		>
			{children}
		</Heading>
	),
	paragraph: ({ children }) => (
		<p className='text-base  text-secondary text-left'>{children}</p>
	),
}

const icons = {
	quality: <FaHandSparkles fontSize={72} />,
	production: <TbTools fontSize={72} />,
	expertise: <FaClipboardList fontSize={72} />,
}
/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
	return (
		<Bounded
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className='relative'
		>
			<div>
				<Image
					src={'/assets/images/switch-container.png'}
					alt='design'
					width={400}
					height={450}
					className='absolute -top-10 right-5 -z-10'
				/>
			</div>
			<PrismicRichText components={components} field={slice.primary.heading} />
			<div className='mb-12 max-w-lg text-balance mt-4'>
				<PrismicRichText
					components={components}
					field={slice.primary.introduction}
				/>
			</div>

			<div className='grid sm:grid-cols-2 lg:grid-cols-3  gap-x-12 gap-y-12 mx-auto sm:place-items-start place-items-center'>
				{slice.items.map((item, index) => (
					<div
						key={index}
						className='max-w-xs grid sm:place-items-start place-items-center'
					>
						{item.icon && (
							<div className='mb-5 text-primary'>{icons[item.icon]}</div>
						)}

						<PrismicRichText components={components} field={item.title} />
						<PrismicRichText components={components} field={item.description} />
					</div>
				))}
			</div>
		</Bounded>
	)
}

export default Features
