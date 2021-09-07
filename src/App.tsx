import React, { useState } from 'react';
import { Result } from './components/Result';
import { useCallback } from 'react';
import { FirstView } from './components/FirstView';

export type resultType = {
	country: string;
};

interface MapType {
	[key: string]: resultType;
}

const COUNTRY_CHOICE_MAP: MapType = {
	110: {
		country: 'China',
	},
	120: {
		country: 'Poland',
	},
	130: {
		country: 'Russia',
	},

	210: {
		country: 'Italy',
	},

	220: {
		country: 'Samoa',
	},

	230: {
		country: 'India',
	},
	310: {
		country: 'America and Canada',
	},
	320: {
		country: 'Brazil',
	},
	330: {
		country: 'Thai, Nepal',
	},
};

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const [firstNumber, setFirstNumber] = useState<string>('');
	const [secondNumber, setSecondNumber] = useState<string>('');
	const [error, setError] = React.useState(false);

	const choicesNumber = firstNumber + secondNumber;

	const handleClick = useCallback(() => {
		if (!firstNumber || !secondNumber) {
			setError(true);
			return;
		}

		setIsOpen(true);
	}, [firstNumber, secondNumber]);

	return (
		<div>
			{!isOpen ? (
				<FirstView
					onClick={handleClick}
					setFirstNumber={setFirstNumber}
					setSecondNumber={setSecondNumber}
					error={error}
				/>
			) : (
				<Result result={COUNTRY_CHOICE_MAP[choicesNumber]} />
			)}
		</div>
	);
}

export default App;
