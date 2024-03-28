import Bounded from '@/components/Bounded'
import Button from '@/components/Button'
import { Content } from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import clsx from 'clsx'
import {
	PiOfficeChair,
	PiPaintBrush,
	PiPaintRollerDuotone,
	PiPerspective,
} from 'react-icons/pi'

const icons = {
	paint: <PiPaintBrush />,
	chair: <PiOfficeChair />,
	rollerPaint: <PiPaintRollerDuotone />,
	perspective: <PiPerspective />,
}

/**
 * Props for `Showcase`.
 */
export type ShowcaseProps = SliceComponentProps<Content.ShowcaseSlice>

/**
 * Component for "Showcase" Slices.
 */
const Showcase = ({ slice }: ShowcaseProps): JSX.Element => {
	return (
		<Bounded
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className='relative'
		>
			<PrismicRichText
				field={slice.primary.heading}
				components={{
					heading2: ({ children }) => (
						<h2 className='text-5xl text-balance text-center font-medium md:text-7xl text-secondary'>
							{children}
						</h2>
					),
				}}
			/>
			<div className='grid from-primary/15 mt-16 items-center rounded-xl border border-primary/30 bg-gradient-to-b to-primary/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:py-12'>
				<div>
					<div className='w-fit rounded-lg bg-accent-yellow/55 p-4 text-3xl text-obsidian'>
						<>{slice.primary.icon && icons[slice.primary.icon]}</>
					</div>

					<div className='mt-6 text-2xl font-normal text-obsidian'>
						<PrismicRichText field={slice.primary.subheading} />
					</div>

					<div className='mt-4 max-w-xl prose text-secondary'>
						<PrismicRichText field={slice.primary.body} />
					</div>

					<Button field={slice.primary.link} className='btn mt-8'>
						{slice.primary.button_text || 'Learn more'}
					</Button>
				</div>
				<PrismicNextImage
					field={slice.primary.image}
					className={clsx(
						'opacity-90 shadow-2xl lg:col-span-2 lg:pt-0',
						slice.variation === 'reverse'
							? 'lg:order-1 lg:translate-x-[15%]'
							: 'lg:-order-1 lg:translate-x-[-15%]'
					)}
				/>
			</div>
		</Bounded>
	)
}

export default Showcase
