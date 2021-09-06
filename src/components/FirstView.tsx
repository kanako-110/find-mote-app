// TODO: 命名

import { Button } from './atoms/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { ChangeEvent } from 'react';

interface Props {
	onClick: () => void;
	onChangeFirst: (event: ChangeEvent<HTMLInputElement>) => void;
	onChangeSecond: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const FirstView = ({
	onClick,
	onChangeFirst,
	onChangeSecond,
}: Props) => {
	// const [firstChoice, setFirstChoice] = useState({
	// 	slender: false,
	// 	chubby: false,
	// 	glamorous: false,
	// });

	// const { slender, chubby, glamorous } = firstChoice;
	// const error = [slender, chubby, glamorous].filter((v) => v).length !== 1;

	return (
		<div>
			<div>Lets find your MOTE-country together</div>
			<p>
				モテない。。。。。。。。。そんなあなたに！！！あなたがモテモテになる国を見つけましょう！
			</p>
			{/* TODO 2個以上、2個以下 えらー */}
			<div>
				<FormControl component="fieldset">
					<FormLabel component="legend">１番近い体格を選んでください</FormLabel>
					<FormGroup>
						{/* ハートもできる */}
						<FormControlLabel
							control={<Checkbox onChange={onChangeFirst} />}
							label="細め"
							name="slender"
							value="1"
						/>
						<FormControlLabel
							control={<Checkbox />}
							label="ぽっちゃり"
							name="chubby"
							value="2"
						/>
						<FormControlLabel
							control={<Checkbox />}
							label="グラマラス"
							name="glamorous"
							value="3"
						/>
					</FormGroup>
					{/* TODO:選択してから表示させる */}
					{/* {error && <FormHelperText>必ず１つ選択してください</FormHelperText>} */}
				</FormControl>
				<FormControl component="fieldset">
					<FormLabel component="legend">１番近い性格を選んでください</FormLabel>
					<FormGroup>
						<FormControlLabel
							control={<Checkbox onChange={onChangeSecond} />}
							label="知的"
							name="smart"
							value="10"
						/>
						<FormControlLabel control={<Checkbox />} label="陽気" value="20" />
						<FormControlLabel
							control={<Checkbox />}
							label="家庭的"
							value="30"
						/>
					</FormGroup>
				</FormControl>
			</div>
			<Button onClick={onClick} />
		</div>
	);
};
