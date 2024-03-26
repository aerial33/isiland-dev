import { Content } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
	return (
		<section
			className='px-4 py-10 md:px-6 lg:py-16'
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<div className='mx-auto w-full max-w-6xl'>
				<div className='grid grid-cols-1 place-items-center text-center'>
					<PrismicRichText
						field={slice.primary.info_text}
						components={{
							paragraph: ({ children }) => (
								<p className='text-sm md:text-xl text-gray-700 font-poppins'>
									{children}
								</p>
							),
						}}
					/>
					<PrismicRichText
						field={slice.primary.heading}
						components={{
							heading1: ({ children }) => (
								<h1 className='text-5xl md:text-7xl text-red-700 font-semibold font-poppins max-w-xl'>
									{children}
								</h1>
							),
						}}
					/>
					<PrismicRichText
						field={slice.primary.body}
						components={{
							paragraph: ({ children }) => (
								<p className='text-2xl text-gray-700 font-poppins max-w-md'>
									{children}
								</p>
							),
						}}
					/>
					<PrismicNextLink
						field={slice.primary.button_link}
						className='block w-fit bg-gray-500 hover:bg-gray-600 transition-color duration-200 ease-in-out text-white font-semibold font-poppins py-3 px-12 text-base tracking-wider my-8 mb:my-10'
					>
						{slice.primary.button_text}
					</PrismicNextLink>
					<PrismicNextImage
						field={slice.primary.image}
						className='drop-shadow-xl max-w-4xl w-full'
					/>
				</div>
			</div>
		</section>
	)
}

export default Hero
