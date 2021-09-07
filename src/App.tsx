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
		country: 'America and Canada',
	},

	210: {
		country: 'Italy',
	},

	220: {
		country: 'Samoa',
	},

	230: {
		country: 'Brazil',
	},
	310: {
		country: 'Russia',
	},
	320: {
		country: 'India',
	},
	330: {
		country: 'Thai, Nepal',
	},
};

function App() {
	const [isSubmtted, setIsSubmitted] = useState(false);
	const [firstNumber, setFirstNumber] = useState<string>('');
	const [secondNumber, setSecondNumber] = useState<string>('');
	console.log({ firstNumber });
	console.log({ secondNumber });

	const choicesNumber = firstNumber + secondNumber;
	console.log(COUNTRY_CHOICE_MAP[choicesNumber]);

	const handleClick = useCallback(() => {
		setIsSubmitted(true);
	}, []);

	return (
		<div>
			{!isSubmtted ? (
				<FirstView
					onClick={handleClick}
					setFirstNumber={setFirstNumber}
					setSecondNumber={setSecondNumber}
				/>
			) : (
				<Result result={COUNTRY_CHOICE_MAP[choicesNumber]} />
			)}
		</div>
	);
}

export default App;
