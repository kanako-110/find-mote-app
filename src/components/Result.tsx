import React from 'react';
import { Button } from './atoms/Button';
import { resultType } from '../data';
import { IconButton } from '@material-ui/core';
import { default as BackIcon } from '@material-ui/icons/Replay';

interface Props {
	result: resultType;
	setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
	setFirstNumber: React.Dispatch<React.SetStateAction<string>>;
	setSecondNumber: React.Dispatch<React.SetStateAction<string>>;
}

export const Result = ({
	result,
	setIsSubmitted,
	setFirstNumber,
	setSecondNumber,
}: Props) => {
	const handleClick = () => {
		// 選択肢のリセット
		setFirstNumber('');
		setSecondNumber('');

		setIsSubmitted(false);
	};

	return (
		<div style={{ width: 320 }}>
			<img
				className="mx-auto w-full object-cover"
				style={{ height: 320 }}
				src={result.img}
				alt="あなたに合う国の男性写真サンプル"
			/>
			<h2 className="mt-6 text-4xl font-bold text-center text-red-600">
				{result.country}
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
						onClick={handleClick}
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
