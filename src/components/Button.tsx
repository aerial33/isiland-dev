import { PrismicNextLink, PrismicNextLinkProps } from '@prismicio/next'
import clsx from 'clsx'

const Button = ({ className, ...restProps }: PrismicNextLinkProps) => {
	return (
		<PrismicNextLink
			className={clsx(
				'block w-fit bg-primary border hover:bg-primary/70 transition-color duration-200 ease-in-out text-white font-semibold font-poppins py-3 px-12 text-lg capitalize tracking-wider',
				className
			)}
			{...restProps}
		/>
	)
}
export default Button
