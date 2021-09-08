import React from 'react';
import { Button } from './atoms/Button';
import { resultType } from '../data';
import { IconButton } from '@material-ui/core';
import { default as BackIcon } from '@material-ui/icons/Replay';

interface Props {
	result: resultType;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Result = ({ result, setIsOpen }: Props) => {
	return (
		<div style={{ width: 320 }}>
			<img
				className="mx-auto w-full object-cover"
				style={{ height: 320 }}
				src={result.img}
				alt="あなたに合う国の男性写真サンプル"
			/>
			<h2 className="mt-6 text-4xl font-bold text-center text-red-600">
				{result.country}{' '}
			</h2>
			<p className="mt-6">{result.description} </p>
			<div className="mt-6 text-center flex flex-col">
				<a href={result.link}>
					<Button
						label={'会いに行く'}
						variant={'contained'}
						className="w-full"
					/>
				</a>
				<div className="mt-6">
					<IconButton
						onClick={() => setIsOpen(false)}
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
