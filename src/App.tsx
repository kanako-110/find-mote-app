import React, { useMemo, useState } from 'react';
import { Result } from './components/Result';
import { FirstView } from './components/FirstView';
import { choiceCountryMap } from './data';
import { selections } from './data';

function App() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const initialValue = useMemo(() => Array(selections.length).fill('0'), []);

	const [formData, setFormData] = useState<string[]>(initialValue);

	// TODO: -, _
	const totalValue = formData.join('');

	// now: rendered on ever render => 必要な時だけレンダーされる方法は？:選択肢全てそろったときのみとか。 note:memoだとresultではレンダーされない
	const disabled = useMemo(() => {
		return formData.includes('0');
	}, [formData]);

	// ユーザーが選択した全ての値を配列に追加する関数。
	// 選択肢グループ（性格、体格など）のindexを渡し、配列のそのindexの場所にクリックした値を入れる。
	const updateSelections = (index: number, value: string) => {
		const newFormData = formData.slice();
		newFormData[index] = value;
		setFormData(newFormData);
	};

	// TODO: callback
	const resetData = () => {
		setFormData(initialValue);

		setIsSubmitted(false);
	};

	return (
		<div className="min-h-screen p-8 flex justify-center items-center text-center">
			{!isSubmitted ? (
				<FirstView
					onClick={() => setIsSubmitted(true)}
					selections={selections}
					setFormData={setFormData}
					updateSelections={updateSelections}
					disabled={disabled}
				/>
			) : (
				<Result
					//countryChoiceMapの中から、ユーザーが選択した合計値とkeyが一致するものを渡す
					result={choiceCountryMap[totalValue]}
					onReturnButtonClick={resetData}
				/>
			)}
		</div>
	);
}

export default App;
