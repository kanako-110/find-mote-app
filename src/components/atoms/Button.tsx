import React from 'react';
import { Button as MuiButton } from '@material-ui/core';

interface Props {
	onClick?: () => void;
	label: string;
	variant: 'contained' | 'text' | 'outlined';
	className?: string;
	disabled?: boolean;
}
export const Button = ({ onClick, label, className, ...props }: Props) => {
	return (
		<MuiButton
			onClick={onClick}
			color="primary"
			className={className}
			{...props}
		>
			{label}
		</MuiButton>
	);
};
