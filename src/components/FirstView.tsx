import FormControl from '@material-ui/core/FormControl';
import { Selection } from './Selection';
import { SelectionType } from '../data';
import { Button } from './atoms/Button';
import { Title } from './Title';
interface Props {
	onClick: () => void;
	disabled: boolean;
	selections: SelectionType[];
	setFormData: React.Dispatch<React.SetStateAction<string[]>>;
	updateSelections: (index: number, value: string) => void;
}

export const FirstView = ({
	onClick,
	selections,
	disabled,
	updateSelections,
}: Props) => {
	return (
		<div>
			<Title />
			<form className="mt-4">
				<FormControl component="fieldset">
					{selections.map((selection, index) => (
						<div className="mt-4">
							<Selection
								key={selection.id}
								onChange={updateSelections}
								data={selection}
								index={index}
							/>
						</div>
					))}
					<div className="mt-8">
						<Button
							label={'モテにいく'}
							disabled={disabled}
							onClick={onClick}
						/>
					</div>
				</FormControl>
			</form>
		</div>
	);
};
