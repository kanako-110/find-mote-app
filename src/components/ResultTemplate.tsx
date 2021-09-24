import React from 'react';
import { ResultType } from '../data';
import { ResultDescription } from './ResultDescription';
import { ResultBottom } from './ResultBottom';

interface Props {
	result: ResultType;
	onReturnButtonClick: () => void;
}

export const ResultTemplate = ({ result, onReturnButtonClick }: Props) => {
	return (
		<div style={{ width: 320 }}>
			<ResultDescription result={result} />
			<div className="mt-6 text-center flex flex-col">
				<ResultBottom
					result={result}
					onReturnButtonClick={onReturnButtonClick}
				/>
			</div>
		</div>
	);
};
