import React from 'react';
import { Button as MuiButton } from '@material-ui/core';

interface Props {
	onClick?: () => void; //todo optionalはずす
	label: string;
	variant?: 'contained' | 'text' | 'outlined';
}
export const Button = ({ onClick, label, variant }: Props) => {
	return (
		<MuiButton onClick={onClick} variant={variant} color="primary">
			{label}
		</MuiButton>
	);
};
