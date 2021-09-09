// TODO: 命名

import { Button } from './atoms/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import {
	Radio,
	FormControlLabel,
	RadioGroup,
	FormHelperText,
} from '@material-ui/core';
import { Selection } from './Selection';

const selections = [
	{
		formLabel: '１番近い体格を選んでください',
		options: [
			{ label: '細め', value: '1' },
			{ label: 'ぽっちゃり', value: '2' },
			{ label: 'グラマラス', value: '3' },
		],
	},
	{
		formLabel: '１番近い性格を選んでください',
		options: [
			{ label: '知的', value: '10' },
			{ label: '陽気', value: '20' },
			{ label: '家庭的', value: '30' },
		],
	},
];
interface Props {
	onClick: () => void;
	setFirstNumber: React.Dispatch<React.SetStateAction<string>>;
	setSecondNumber: React.Dispatch<React.SetStateAction<string>>;
	error: boolean;
}

export const FirstView = ({
	onClick,
	setFirstNumber,
	setSecondNumber,
	error,
}: Props) => {
	return (
		// TODO:  mapにして、上から情報わたすだけにする。
		//  それを２つ置くだけ。
		<div>
			<div className="w-auto h-auto p-4 bg-gray-800">
				{/* TODO: text-color */}
				<h1 className="font-pacifico text-3xl uppercase text-red-600 stroke-2 text-shadow-md sm:text-4xl ">
					Lets find your MOTE-country
				</h1>
			</div>
			<p className="mt-6">
				モテない
				<br />
				なんてことは絶対ありません。質問に２つ答えるだけであなたのモテ期を始めましょう。
			</p>

			<form>
				<FormControl component="fieldset" error={error}>
					<div className="my-8">
						<Selection onChange={setFirstNumber} data={selections[0]} />
						<Selection onChange={setSecondNumber} data={selections[1]} />
						{error && (
							<FormHelperText>
								必ず体格と性格を１つずつ選択してください
							</FormHelperText>
						)}
					</div>
					<Button
						onClick={onClick}
						label={'モテにいく'}
						variant={'contained'}
					/>
				</FormControl>
			</form>
		</div>
	);
};
