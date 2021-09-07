import React from 'react';
import { Button as MuiButton } from '@material-ui/core';

interface Props {
	onClick?: () => void; //todo optionalはずす
	label?: string;
}
export const Button = ({ onClick, label }: Props) => {
	return (
		<MuiButton onClick={onClick} variant="contained" color="primary">
			{label}
		</MuiButton>
	);
};
