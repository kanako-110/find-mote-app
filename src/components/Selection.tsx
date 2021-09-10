import {
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
} from '@material-ui/core';

interface Props {
	data: {
		formLabel: string;
		options: {
			label: string;
			value: string;
		}[];
	};
	onChange: (index: number, value: string) => void;
	index: number;
}

export const Selection = ({ onChange, data, index }: Props) => {
	return (
		<div className="p-4">
			<FormLabel>{data.formLabel}</FormLabel>
			<RadioGroup onChange={(e) => onChange(index, e.target.value)}>
				{data.options.map((option) => (
					<FormControlLabel
						control={<Radio />}
						label={option.label}
						value={option.value}
						id={option.value}
					/>
				))}
			</RadioGroup>
		</div>
	);
};
