import { cva, VariantProps } from 'class-variance-authority';
import { ButtonOrLink, Props as ButtonOrLinkProps } from './LinkOrButton';

const buttonStyles = cva(
	'flex items-center justify-center  py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-white dark:focus:ring-offset-black focus:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none ',
	{
		variants: {
			intent: {
                navbar:'',
				primary: 'font-medium p-4 rounded-full border border-2 ',
				secondary:
					'bg-gray-200 font-medium px-4 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 focus:ring-gray-500',
				danger: 'bg-red-500 px-4 font-medium text-white focus:ring-red-500',
				link: 'underline'
			},
			fullWidth: {
				true: 'w-full',
			},
			theme:{
				light:'border-backgroundDark hover:bg-backgroundDark hover:text-fontDark focus:ring-gray-500',
				dark:'border-backgroundLight hover:bg-backgroundLight hover:text-fontLight focus:ring-gray-500',
				none:''
			}
		},
		defaultVariants: {
			intent: 'primary',
			theme:'none'
		},
	},
);

export interface Props
	extends ButtonOrLinkProps,
		VariantProps<typeof buttonStyles> {}

export function Button({ intent,theme, fullWidth, ...props }: Props) {
	return (
		<ButtonOrLink className={buttonStyles({ intent,theme, fullWidth })} {...props} />
	);
}