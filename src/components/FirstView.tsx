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
						<FormLabel component="legend" className="mt-2">
							１番近い体格を選んでください
						</FormLabel>
						<RadioGroup onChange={(e) => setFirstNumber(e.target.value)}>
							{/* ハートもできる */}
							<FormControlLabel
								control={<Radio />}
								label="細め"
								name="slender"
								value="1"
							/>
							<FormControlLabel
								control={<Radio />}
								label="ぽっちゃり"
								name="chubby"
								value="2"
							/>
							<FormControlLabel
								control={<Radio />}
								label="グラマラス"
								name="glamorous"
								value="3"
							/>
						</RadioGroup>
						<FormLabel component="legend" className="mt-4">
							１番近い性格を選んでください
						</FormLabel>
						<RadioGroup
							onChange={(e) => setSecondNumber(e.target.value)}
							className="mt-2"
						>
							<FormControlLabel
								control={<Radio />}
								label="知的"
								name="smart"
								value="10"
							/>
							<FormControlLabel control={<Radio />} label="陽気" value="20" />
							<FormControlLabel control={<Radio />} label="家庭的" value="30" />
							{error && (
								<FormHelperText>
									必ず体格と性格を１つずつ選択してください
								</FormHelperText>
							)}
						</RadioGroup>
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
