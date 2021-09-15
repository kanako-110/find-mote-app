import {
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
} from '@material-ui/core';
import { SelectionType } from '../data';

interface Props {
	data: SelectionType;
	onChange: (index: number, value: number) => void;
	index: number;
}

export const Selection = ({ onChange, data, index }: Props) => {
	return (
		<div>
			<FormLabel>{data.formLabel}</FormLabel>
			<RadioGroup onChange={(e) => onChange(index, +e.target.value)}>
				{data.options.map((option) => (
					<FormControlLabel
						key={option.value}
						control={<Radio />}
						label={option.label}
						value={option.value}
					/>
				))}
			</RadioGroup>
		</div>
	);
};
