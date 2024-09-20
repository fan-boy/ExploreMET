import { ComponentProps } from 'react';

type ButtonOrLinkProps = ComponentProps<'button'> & ComponentProps<'a'>;

export interface Props extends ButtonOrLinkProps {}

 export function ButtonOrLink({ href, ...props }: Props) {
	const isLink = typeof href !== 'undefined';
  
	// If `href` is provided, render as an anchor tag (<a>), otherwise render as a button (<button>)
	if (isLink) {
	  return <a href={href} {...props} />;
	}
  
	return <button {...props} />;
  }