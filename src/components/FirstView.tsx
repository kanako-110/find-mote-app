// TODO: 命名

import { Button } from './atmos/Button';
import { Description } from './Description';

interface Props {
	onClick: () => void;
}

export const FirstView = ({ onClick }: Props) => {
	return (
		<div>
      {/* 湧けなくてもいいかも */}
			<Description /> 
			<Button onClick={onClick} />
		</div>
	);
};
