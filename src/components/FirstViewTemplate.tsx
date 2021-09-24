import { SelectionType } from '../data';
import { Title } from './Title';
import { SelectionsForm } from './SelectionsForm';
interface Props {
	onSubmit: () => void;
	disabled: boolean;
	selections: SelectionType[];
	onRadioButtonChange: (index: number, value: string) => void;
}

export const FirstViewTemplate = ({
	onSubmit,
	selections,
	disabled,
	onRadioButtonChange,
}: Props) => {
	return (
		<div>
			<Title />
			<SelectionsForm
				onSubmit={onSubmit}
				disabled={disabled}
				selections={selections}
				onRadioButtonChange={onRadioButtonChange}
			/>
		</div>
	);
};
