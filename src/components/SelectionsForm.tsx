import FormControl from '@material-ui/core/FormControl';
import { SelectionType } from '../types';
import { Button } from './atoms/Button';
import { Selection } from './Selection';

interface Props {
	onSubmit: () => void;
	disabled: boolean;
	selections: SelectionType[];
	onRadioButtonChange: (index: number, value: string) => void;
}

export const SelectionsForm = ({
	selections,
	onRadioButtonChange,
	disabled,
	onSubmit,
}: Props) => {
	return (
		<form className="mt-4">
			<FormControl component="fieldset">
				{selections.map((selection, index) => (
					<div className="mt-4">
						<Selection
							key={selection.id}
							onChange={onRadioButtonChange}
							data={selection}
							index={index}
						/>
					</div>
				))}
				<div className="mt-8">
					<Button label={'モテにいく'} disabled={disabled} onClick={onSubmit} />
				</div>
			</FormControl>
		</form>
	);
};
