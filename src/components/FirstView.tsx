// TODO: 命名

import { Button } from './atoms/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import { Radio, FormControlLabel, RadioGroup } from '@material-ui/core';

interface Props {
	onClick: () => void;
	setFirstNumber: React.Dispatch<React.SetStateAction<string>>;
	setSecondNumber: React.Dispatch<React.SetStateAction<string>>;
}

export const FirstView = ({
	onClick,
	setFirstNumber,
	setSecondNumber,
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
			{/* フォームで囲むべきか */}
			<div>
				<FormControl component="fieldset">
					<FormLabel component="legend">１番近い体格を選んでください</FormLabel>
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
					{/* TODO:選択してから表示させる */}
					{/* {error && <FormHelperText>必ず１つ選択してください</FormHelperText>} */}
				</FormControl>
				<FormControl component="fieldset">
					<FormLabel component="legend">１番近い性格を選んでください</FormLabel>
					<RadioGroup onChange={(e) => setSecondNumber(e.target.value)}>
						<FormControlLabel
							control={<Radio />}
							label="知的"
							name="smart"
							value="10"
						/>
						<FormControlLabel control={<Radio />} label="陽気" value="20" />
						<FormControlLabel control={<Radio />} label="家庭的" value="30" />
					</RadioGroup>
				</FormControl>
			</div>
			<Button onClick={onClick} />
		</div>
	);
};
