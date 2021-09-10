import { Button } from './atoms/Button';
import FormControl from '@material-ui/core/FormControl';
import { Selection } from './Selection';
import { motion } from 'framer-motion';
import { SelectionType } from '../data';

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
			<motion.div className="w-auto h-auto p-4 bg-gray-800">
				<h1 className="font-pacifico text-3xl uppercase text-red-600 stroke-2 text-shadow-md sm:text-4xl ">
					Lets find your MOTE-country
				</h1>
			</motion.div>
			<p className="mt-6">
				モテない
				<br />
				なんてことは絶対ありません。質問に２つ答えるだけであなたのモテ期を始めましょう。
			</p>

			<form>
				<FormControl component="fieldset">
					<div className="my-4">
						{selections.map((selection, index) => (
							<Selection
								onChange={updateSelections}
								data={selection}
								index={index}
							/>
						))}
					</div>
					<Button
						onClick={onClick}
						label={'モテにいく'}
						variant={'contained'}
						disabled={disabled}
					/>
				</FormControl>
			</form>
		</div>
	);
};
