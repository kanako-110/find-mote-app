import { Button } from './atoms/Button';
import { ResultType } from '../types';
import { ReturnButton } from './atoms/ReturnButton';

interface Props {
	result: ResultType;
	onReturnButtonClick: () => void;
}

export const ResultBottom = ({ result, onReturnButtonClick }: Props) => {
	return (
		<div>
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
			<ReturnButton onClick={onReturnButtonClick} />
		</div>
	);
};
