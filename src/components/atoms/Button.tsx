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
	'p-2 h-auto w-full mx-auto rounded text-white text-sm font-medium outline-none';

export const Button = ({ label, onClick, disabled, ...props }: Props) => {
	return (
		<>
			{disabled ? (
				<motion.button
					className={`bg-green-900 bg-opacity-25 text-opacity-40 ${buttonCss}`}
					{...props}
				>
					{label}
				</motion.button>
			) : (
				<motion.button
					className={` bg-green-500 ${buttonCss}`}
					whileTap={{ scale: 0.9 }}
					onTap={onClick}
					{...props}
				>
					{label}
				</motion.button>
			)}
		</>
	);
};
