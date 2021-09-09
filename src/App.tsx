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
		// 以前エラーになっていた場合は、そのstateが残っているのでリセットする
		error && setError(false);
	}, [error, firstNumber, secondNumber]);

	return (
		<div className="px-16 py-6 flex justify-center align-middle text-center sm:py-16 ">
			{!isOpen ? (
				<FirstView
					onClick={handleClick}
					setFirstNumber={setFirstNumber}
					setSecondNumber={setSecondNumber}
					error={error}
				/>
			) : (
				<Result
					result={COUNTRY_CHOICE_MAP[choicesNumber]}
					setIsOpen={setIsOpen}
					setFirstNumber={setFirstNumber}
					setSecondNumber={setSecondNumber}
				/>
			)}
		</div>
	);
}

export default App;
