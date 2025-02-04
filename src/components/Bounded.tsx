import clsx from 'clsx'

type BoundedProps = {
	as?: React.ElementType
	className?: string
	children: React.ReactNode
}

const Bounded = ({
	as: Comp = 'section',
	className,
	children,
	...restProps
}: BoundedProps) => {
	return (
		<Comp
			className={clsx('px-4 xl:px-0 py-10  lg:pb-16', className)}
			{...restProps}
		>
			<div className='mx-auto w-full max-w-6xl'>{children}</div>
		</Comp>
	)
}
export default Bounded
