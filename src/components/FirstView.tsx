import FormControl from '@material-ui/core/FormControl';
import { Selection } from './Selection';
import { SelectionType } from '../data';
import { Button } from './atoms/Button';

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
			<div className="w-auto h-auto p-4 bg-gray-800">
				<h1 className="font-pacifico text-3xl uppercase text-pink-600 stroke-2 text-shadow-md sm:text-4xl ">
					Lets find your MOTE-country
				</h1>
			</div>
			<p className="mt-6">
				モテない
				<br />
				なんてことは絶対ありません。質問に2つ答えてあなたのモテる国を見つけましょう。
			</p>

			<form>
				<FormControl component="fieldset">
					<div className="my-4">
						{selections.map((selection, index) => (
							<Selection
								key={selection.id}
								onChange={updateSelections}
								data={selection}
								index={index}
							/>
						))}
					</div>
					<Button label={'モテにいく'} disabled={disabled} onClick={onClick} />
				</FormControl>
			</form>
		</div>
	);
};
