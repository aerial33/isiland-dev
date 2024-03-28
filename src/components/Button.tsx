import { PrismicNextLink, PrismicNextLinkProps } from '@prismicio/next'
import clsx from 'clsx'

const Button = ({ className, ...restProps }: PrismicNextLinkProps) => {
	return (
		<PrismicNextLink
			className={clsx('transition-colors', className)}
			{...restProps}
		/>
	)
}
export default Button
