import { Content } from '@prismicio/client'
import {
	JSXMapSerializer,
	PrismicRichText,
	SliceComponentProps,
} from '@prismicio/react'
import Bounded from '@/components/Bounded'
import Button from '@/components/Button'
import Heading from '@/components/Heading'

const components: JSXMapSerializer = {
	heading1: ({ children }) => (
		<Heading
			as='h1'
			size='xl'
			className='md:mb-8 mb-4 mt-2 first:mt-0 last:mb-0 text-balance glass-container'
		>
			{children}
		</Heading>
	),
	paragraph: ({ children }) => (
		<p className='text-2xl font-poppins max-w-md'>{children}</p>
	),
}

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
	return (
		<Bounded
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className='min-h-screen bg-hero-background bg-cover bg-no-repeat bg-bottom relative text-white'
		>
			<div className='h-screen grid'>
				<div className='flex flex-col text-white justify-center gap-4'>
					<PrismicRichText
						field={slice.primary.info_text}
						components={{
							paragraph: ({ children }) => (
								<p className='text-sm md:text-xl'>{children}</p>
							),
						}}
					/>
					<PrismicRichText
						field={slice.primary.heading}
						components={components}
					/>
					<PrismicRichText field={slice.primary.body} components={components} />
					<Button field={slice.primary.button_link} className=' my-8 mb:my-10'>
						{slice.primary.button_text}
					</Button>
				</div>
			</div>
		</Bounded>
	)
}

export default Hero
