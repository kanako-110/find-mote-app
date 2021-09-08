import React, { useState } from 'react';
import { Result } from './components/Result';
import { useCallback } from 'react';
import { FirstView } from './components/FirstView';
import { COUNTRY_CHOICE_MAP } from './data';

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
		<div className="p-16 flex justify-center align-middle text-center">
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
