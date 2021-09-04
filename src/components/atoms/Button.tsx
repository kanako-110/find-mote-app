import React from 'react';
import { Button as MuiButton } from '@material-ui/core';

interface Props {
	onClick?: () => void; //todo optionalはずす
}
export const Button = ({ onClick }: Props) => {
	return (
		<MuiButton onClick={onClick} variant="contained" color="primary">
			buttonですう
		</MuiButton>
	);
};
