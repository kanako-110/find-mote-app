import {
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
} from '@material-ui/core';

interface Props {
	onChange: React.Dispatch<React.SetStateAction<string>>;
	data: {
		formLabel: string;
		options: {
			label: string;
			value: string;
		}[]; //型他でも使うならそこ？
	};
}

export const Selection = ({ onChange, data }: Props) => {
	return (
		<>
			<FormLabel component="legend" className="mt-2">
				{data.formLabel}
			</FormLabel>
			<RadioGroup onChange={(e) => onChange(e.target.value)}>
				{data.options.map((option) => (
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
