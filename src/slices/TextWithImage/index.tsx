'use client'
import { Content } from '@prismicio/client'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { motion } from 'framer-motion'
import {
	JSXMapSerializer,
	PrismicRichText,
	SliceComponentProps,
} from '@prismicio/react'
import Heading from '@/components/Heading'
import { PrismicNextImage } from '@prismicio/next'
import clsx from 'clsx'
import { useState } from 'react'

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
	const [idx, setIdx] = useState(0)

	const images = slice.items.filter((item) => item.images)

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
					<div className='relative overflow-hidden'>
						<motion.div
							dragConstraints={{ left: 0, right: 0 }}
							animate={{ translateX: `-${idx * 100}%` }}
							className='flex cursor-grab items-center active:cursor-grab'
						>
							{slice.items.map((item, index) => (
								<PrismicNextImage
									field={item.images}
									key={index}
									className='w-full aspect-video object-cover bg-neutral-800 shrink-0'
								/>
							))}
						</motion.div>
						<div
							className={clsx(
								'absolute bottom-0 right-0',
								slice.variation === 'imageRight' && 'left-0'
							)}
						>
							<div className='flex'>
								<button
									onClick={() => {
										setIdx((pv) => (pv === 0 ? images.length - 1 : pv - 1))
									}}
									className='btn-primary'
								>
									<span className='font-extraboldbold  flex text-3xl'>
										<FiChevronLeft className='hover:-translate-x-1 transition' />
									</span>
								</button>
								<button
									onClick={() => {
										setIdx((pr) => (pr === images.length - 1 ? 0 : pr + 1))
									}}
									className='btn-primary'
								>
									<span className='font-extraboldbold  flex text-3xl'>
										<FiChevronRight className='hover:translate-x-1 transition' />
									</span>
								</button>
							</div>
						</div>
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
