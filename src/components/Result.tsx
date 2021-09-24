import React from 'react';
import { Button } from './atoms/Button';
import { ResultType } from '../data';
import { IconButton } from '@material-ui/core';
import { default as BackIcon } from '@material-ui/icons/Replay';
import { motion } from 'framer-motion';
import { ResultDescription } from './ResultDescription';

interface Props {
	result: ResultType;
	onReturnButtonClick: () => void;
}

export const Result = ({ result, onReturnButtonClick }: Props) => {
	return (
		<div style={{ width: 320 }}>
			<ResultDescription result={result} />
			<div className="mt-6 text-center flex flex-col">
				<a href={result.link}>
					<Button
						label={'会いに行く'}
						animate={{
							scale: [1, 1.1, 1],
							transition: {
								delay: 4,
								repeat: 1,
								repeatDelay: 2,
							},
						}}
					/>
				</a>
				<motion.div
					className="mt-6"
					whileHover={{
						rotate: -30,
					}}
				>
					<IconButton
						onClick={onReturnButtonClick}
						aria-label="戻るボタン"
						color="primary"
						className="w-6 h-6"
					>
						<BackIcon />
					</IconButton>
				</motion.div>
			</div>
		</div>
	);
};
