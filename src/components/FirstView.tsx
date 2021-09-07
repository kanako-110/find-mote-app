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
		<div>
			<div>Lets find your MOTE-country together</div>
			<p>
				モテない。。。。。。。。。そんなあなたに！！！あなたがモテモテになる国を見つけましょう！
			</p>
			<form>
				<FormControl component="fieldset" error={error}>
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
						{error && (
							<FormHelperText>
								必ず体格と性格を１つずつ選択してください
							</FormHelperText>
						)}
					</RadioGroup>
					<Button onClick={onClick} />
				</FormControl>
			</form>
		</div>
	);
};
