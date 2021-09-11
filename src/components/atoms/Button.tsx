import {
	AnimationControls,
	TargetAndTransition,
	VariantLabels,
	motion,
} from 'framer-motion';

interface Props {
	label: string;
	onClick?: () => void;
	disabled?: boolean;
	animate?: boolean | AnimationControls | TargetAndTransition | VariantLabels;
}

const buttonCss =
	'rounded text-white text-sm p-2 h-auto w-full mx-auto font-medium';

export const Button = ({ label, onClick, disabled, ...props }: Props) => {
	return (
		<>
			{disabled ? (
				<motion.button className={`bg-gray-300 ${buttonCss}`} {...props}>
					{label}
				</motion.button>
			) : (
				<motion.button
					className={`bg-blue-600 ${buttonCss}`}
					whileTap={{ scale: 0.9 }}
					onTap={onClick}
					{...props}
				>
					{label}
				</motion.button>
			)}
		</>
		// <motion.button
		// 	className={`${
		// 		disabled ? 'bg-gray-300' : 'bg-blue-600'
		// 	}  rounded text-white text-sm p-2 h-auto w-full mx-auto font-medium`}
		// 	whileTap={disabled ? undefined : { scale: 0.9 }}
		// 	onTap={disabled ? undefined : onClick}
		// 	disabled
		// 	{...props}
		// >
		// 	{label}
		// </motion.button>
	);
};
