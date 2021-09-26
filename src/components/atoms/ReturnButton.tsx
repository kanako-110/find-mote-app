import { IconButton } from '@material-ui/core';
import { default as BackIcon } from '@material-ui/icons/Replay';
import { motion } from 'framer-motion';

interface Props {
	onClick: () => void;
	label?: string;
}

export const ReturnButton = ({ onClick, label }: Props) => {
	return (
		<div className="flex mt-6 justify-center">
			<motion.div
				whileHover={{
					rotate: -30,
				}}
			>
				<IconButton
					onClick={onClick}
					aria-label="戻るボタン"
					color="primary"
					className="w-6 h-6"
				>
					<BackIcon />
				</IconButton>
			</motion.div>
			{label && <div className="ml-1">{label}</div>}
		</div>
	);
};
