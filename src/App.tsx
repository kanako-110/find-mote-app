import React, { useState } from 'react';
import { Result } from './components/Result';
import { FirstView } from './components/FirstView';
import { countryChoiceMap } from './data';
import { selections } from './data';

// ユーザーが選んだ各値を合計する関数
const sumSelections = (formData: number[]) => {
	const reducer = (previousValue: number, currentValue: number) =>
		previousValue + currentValue;
	const totalValue = formData.reduce(reducer);
	return { totalValue };
};

function App() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const initialValue = Array(selections.length).fill(0);
	const [formData, setFormData] = useState<number[]>(initialValue);

	const disabled = formData.includes(0);

	const { totalValue } = sumSelections(formData);

	// ユーザーが選択した全ての値を配列に追加する関数。
	// 選択肢グループ（性格、体格など）のindexを渡し、配列のそのindexの場所にクリックした値を入れる。
	const updateSelections = (index: number, value: number) => {
		const newFormData = formData.slice();
		newFormData[index] = value;
		setFormData(newFormData);
	};

	const handleClick = () => setIsSubmitted(true);

	return (
		<div className="min-h-screen p-8 flex justify-center items-center text-center">
			{!isSubmitted ? (
				<FirstView
					onClick={handleClick}
					selections={selections}
					setFormData={setFormData}
					updateSelections={updateSelections}
					disabled={disabled}
				/>
			) : (
				<Result
					//countryChoiceMapの中から、ユーザーが選択した合計値とkeyが一致するものを渡す
					result={countryChoiceMap[totalValue]}
					setIsSubmitted={setIsSubmitted}
					setFormData={setFormData}
					initialValue={initialValue}
				/>
			)}
		</div>
	);
}

export default App;
