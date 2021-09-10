import React, { useState } from 'react';
import { Result } from './components/Result';
import { useCallback } from 'react';
import { FirstView } from './components/FirstView';
import { countryChoiceMap } from './data';
import { selections } from './data';

function App() {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [error, setError] = useState(false);
	const [formData, setFormData] = useState<string[]>([]);
	const totalNumber = formData.join('');
	// const [formData, setFormData] = useState<string[]>(
	// 	Array(selections.length).fill(0)
	// );

	const updateSelections = (index: number, value: string) => {
		const newFormData = formData.slice();
		newFormData[index] = value;
		console.log({ index });
		setFormData(newFormData);
	};

	//TODO:エラーハンドリング
	const handleClick = useCallback(() => {
		// if (!firstNumber || !secondNumber) {
		// 	setError(true);
		// 	return;
		// }

		setIsSubmitted(true);
		// 以前エラーになっていた場合は、そのstateが残っているのでリセットする
		error && setError(false);
	}, [error]);

	return (
		<div className="px-16 py-6 flex justify-center align-middle text-center sm:py-16 ">
			{!isSubmitted ? (
				<FirstView
					onClick={handleClick}
					error={error}
					selections={selections}
					setFormData={setFormData}
					updateSelections={updateSelections}
				/>
			) : (
				<Result
					result={countryChoiceMap[totalNumber]}
					setIsSubmitted={setIsSubmitted}
					setFormData={setFormData}
				/>
			)}
		</div>
	);
}

export default App;
