import React, { Dispatch, SetStateAction } from 'react';
import { Button } from './atoms/Button';
import { ResultType } from '../data';
import { IconButton } from '@material-ui/core';
import { default as BackIcon } from '@material-ui/icons/Replay';
import { motion } from 'framer-motion';

interface Props {
	result: ResultType;
	setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
	setFormData: Dispatch<SetStateAction<string[]>>;
}

export const Result = ({ result, setIsSubmitted, setFormData }: Props) => {
	const handleClick = () => {
		// 選択肢のリセット
		setFormData([]);
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
				{/* 時間空けてからやる */}
				<motion.a
					animate={{ rotate: [0, 5, -5, 0] }}
					transition={{ duration: 2 }}
					href={result.link}
				>
					<Button
						label={'会いに行く'}
						variant={'contained'}
						className="w-full"
					/>
				</motion.a>
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
