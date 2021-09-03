// TODO: 命名

import { Button } from './atmos/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import { Checkbox, FormControlLabel } from '@material-ui/core';

interface Props {
	onClick: () => void;
}

export const FirstView = ({ onClick }: Props) => {
	return (
		<div>
			<div>Lets find your MOTE-country together</div>
			<p>
				モテない。。。。。。。。。そんなあなたに！！！あなたがモテモテになる国を見つけましょう！
			</p>
			{/* TODO えらー */}
			<div>
				<FormControl component="fieldset">
					<FormLabel component="legend">一番近い体格を選んでください</FormLabel>
					<FormGroup>
						<FormControlLabel control={<Checkbox />} label="細め" />
						<FormControlLabel control={<Checkbox />} label="ぽっちゃり" />
						<FormControlLabel control={<Checkbox />} label="グラマラス" />
					</FormGroup>
				</FormControl>

				<FormControl component="fieldset">
					<FormLabel component="legend">一番近い性格を選んでください</FormLabel>
					<FormGroup>
						<FormControlLabel control={<Checkbox />} label="知的" />
						<FormControlLabel control={<Checkbox />} label="陽気" />
						<FormControlLabel control={<Checkbox />} label="家庭的" />
					</FormGroup>
				</FormControl>
			</div>
			<Button onClick={onClick} />
		</div>
	);
};
