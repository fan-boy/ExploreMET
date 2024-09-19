import { cva, VariantProps } from 'class-variance-authority';
import { ButtonOrLink, Props as ButtonOrLinkProps } from './LinkOrButton';

const buttonStyles = cva(
	'flex items-center justify-center font-sans px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-white dark:focus:ring-offset-black focus:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none hover:bg-opacity-80',
	{
		variants: {
			intent: {
                default:'font-thin text-fontDark',
				selected: ' bg-fontDark text-fontLight ',
			},
			
		},
		defaultVariants: {
			intent: 'default',
		},
	},
);

export interface Props
	extends ButtonOrLinkProps,
		VariantProps<typeof buttonStyles> {}

export function NavbarButton({ intent,href,  ...props }: Props) {
	return (
		<ButtonOrLink href={href} className={buttonStyles({ intent })} {...props} />
	);
}