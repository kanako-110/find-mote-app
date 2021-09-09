import React from 'react';
import { Button as MuiButton } from '@material-ui/core';

interface Props {
	onClick?: () => void;
	label: string;
	variant: 'contained' | 'text' | 'outlined';
	className?: string;
}
export const Button = ({ onClick, label, variant, className }: Props) => {
	return (
		<MuiButton
			onClick={onClick}
			variant={variant}
			color="primary"
			className={className}
		>
			{label}
		</MuiButton>
	);
};
