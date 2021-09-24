import { ResultType } from '../types';

interface Props {
	result: ResultType;
}

export const ResultDescription = ({ result }: Props) => {
	return (
		<div>
			<img
				className="mx-auto w-full object-cover"
				style={{ height: 320 }}
				src={result.img}
				alt="あなたに合う国の人の写真サンプル"
			/>
			<h2 className="mt-6 text-4xl font-bold text-center text-red-600">
				{result.country}
			</h2>
			<p className="mt-6">{result.description} </p>
		</div>
	);
};
