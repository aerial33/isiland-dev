import { Content } from '@prismicio/client'
import {
	JSXMapSerializer,
	PrismicRichText,
	SliceComponentProps,
} from '@prismicio/react'

const components: JSXMapSerializer = {
	paragraph: ({ children }) => (
		<p className='text-base  text-gray-300 mt-2'>{children}</p>
	),
}

/**
 * Props for `SegmentPicker`.
 */
export type SegmentPickerProps = SliceComponentProps<Content.SegmentPickerSlice>

/**
 * Component for "SegmentPicker" Slices.
 */
const SegmentPicker = ({ slice }: SegmentPickerProps): JSX.Element => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<div className=' bg-secondary '>
				<div className='max-w-6xl mx-auto flex  flex-col sm:flex-row items-center gap-4 justify-between py-12'>
					{slice.items.map((item, index) => (
						<div
							key={index}
							className=' text-white flex flex-col w-full items-center'
						>
							<div className='text-4xl font-medium'>{item.chiffre_cle}</div>
							<PrismicRichText
								field={item.chiffre_text}
								components={components}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default SegmentPicker
