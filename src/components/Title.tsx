import { motion } from 'framer-motion';

export const Title = () => {
	return (
		<div>
			<motion.div
				className="w-auto h-auto p-4"
				animate={{
					transition: { duration: 3 },
					backgroundColor: ['#c6f6d5', '#fefcbf', '#fed7d7'],
				}}
				transition={{ ease: 'easeInOut', duration: 2 }}
			>
				<h1 className="font-pacifico text-3xl uppercase text-pink-600 stroke-2 text-shadow-md sm:text-4xl ">
					Lets find your MOTE-country
				</h1>
			</motion.div>
			<p className="mt-8">
				モテない
				<br />
				なんてことは絶対ありません。質問に2つ答えてあなたのモテる国を見つけましょう。
			</p>
		</div>
	);
};
