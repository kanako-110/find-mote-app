import React from 'react';
import { Button } from './atoms/Button';
import { resultType } from '../data';
import { IconButton } from '@material-ui/core';
import { default as BackIcon } from '@material-ui/icons/Replay';
interface Props {
	result: resultType;
}

export const Result = ({ result }: Props) => {
	return (
		<div style={{ width: 320 }}>
			<img
				className="mx-auto w-full h-auto"
				src={result.img}
				alt="あなたに合う国の男性写真サンプル"
			/>
			<h2 className="mt-6 text-4xl font-bold text-center">{result.country} </h2>
			<p className="mt-6">{result.description} </p>
			<div className="mt-6 text-center flex flex-col">
				<Button label={'会いに行く'} variant={'contained'} />
				<div className="mt-6">
					<IconButton
						aria-label="戻るボタン"
						color="primary"
						className="w-6 h-6"
					>
						<BackIcon />
					</IconButton>
				</div>
			</div>
		</div>
	);
};
