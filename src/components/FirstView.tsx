// TODO: 命名

import { Button } from './atoms/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import { Checkbox, FormControlLabel, FormHelperText } from '@material-ui/core';
import { useState } from 'react';

interface Props {
	onClick: () => void;
}

export const FirstView = ({ onClick }: Props) => {
	const choices: string[] = [];
	const [firstChoice, setFirstChoice] = useState({
		slender: false,
		chubby: false,
		glamorous: false,
	});

	const { slender, chubby, glamorous } = firstChoice;
	const error = [slender, chubby, glamorous].filter((v) => v).length !== 1;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFirstChoice({
			...firstChoice,
			[event.target.name]: event.target.checked,
		});

		// 2つの選択肢を合わせた配列を作る
		choices.splice(1, 0, event.target.name);
		console.log(choices);
	};
	return (
		<div>
			<div>Lets find your MOTE-country together</div>
			<p>
				モテない。。。。。。。。。そんなあなたに！！！あなたがモテモテになる国を見つけましょう！
			</p>
			{/* TODO 2個以上、2個以下 えらー */}
			<div>
				<FormControl required error={error} component="fieldset">
					<FormLabel component="legend">１番近い体格を選んでください</FormLabel>
					<FormGroup>
						{/* ハートもできる */}
						<FormControlLabel
							control={<Checkbox onChange={handleChange} />}
							label="細め"
							name="slender"
						/>
						<FormControlLabel
							control={<Checkbox />}
							label="ぽっちゃり"
							name="chubby"
						/>
						<FormControlLabel
							control={<Checkbox />}
							label="グラマラス"
							name="glamorous"
						/>
					</FormGroup>
					{/* TODO:選択してから表示させる */}
					{error && <FormHelperText>必ず１つ選択してください</FormHelperText>}
				</FormControl>
				<FormControl component="fieldset">
					<FormLabel component="legend">１番近い性格を選んでください</FormLabel>
					<FormGroup>
						<FormControlLabel
							control={<Checkbox onChange={handleChange} />}
							label="知的"
							name="smart"
						/>
						<FormControlLabel control={<Checkbox />} label="陽気" />
						<FormControlLabel control={<Checkbox />} label="家庭的" />
					</FormGroup>
				</FormControl>
			</div>
			<Button onClick={onClick} />
		</div>
	);
};
