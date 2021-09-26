import React from 'react';
import { ResultType } from '../types';
import { ResultDescription } from './ResultDescription';
import { ResultBottom } from './ResultBottom';
import { ErrorState } from './ErrorState';

interface Props {
	result: ResultType;
	onReturnButtonClick: () => void;
}

export const ResultTemplate = ({ result, onReturnButtonClick }: Props) => {
	if (!result) return <ErrorState onReturnButtonClick={onReturnButtonClick} />;

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
