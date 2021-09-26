import ErrorImg from '../images/404.avif';
import { ReturnButton } from './atoms/ReturnButton';

interface Props {
	onReturnButtonClick: () => void;
}

export const ErrorState = ({ onReturnButtonClick }: Props) => {
	return (
		<div style={{ width: 480 }}>
			<img
				src={ErrorImg}
				alt="エラー画像"
				className="h-auto w-full object-cover"
			/>
			<ReturnButton onClick={onReturnButtonClick} label={'ホームへ戻る'} />
		</div>
	);
};
