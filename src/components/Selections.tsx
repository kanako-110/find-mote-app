import {
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
} from '@material-ui/core';

interface Props {
	setFirstNumber: React.Dispatch<React.SetStateAction<string>>;
	selection: {
		formLabel: string;
		options: {
			label: string;
			value: string;
		}[]; //型他でも使うならそこ？
	};
}

export const Selections = ({ setFirstNumber, selection }: Props) => {
	return (
		<>
			<FormLabel component="legend" className="mt-2">
				{selection.formLabel}
			</FormLabel>
			<RadioGroup onChange={(e) => setFirstNumber(e.target.value)}>
				{selection.options.map((option) => (
					<FormControlLabel
						control={<Radio />}
						label={option.label}
						value={option.value}
					/>
				))}
			</RadioGroup>
		</>
	);
};
