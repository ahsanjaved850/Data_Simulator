import { DeleteOutlineOutlined, VisibilityOutlined } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";

interface ActionButtonsProps {
	goToDetailView: () => void;
	onDelete: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
	goToDetailView,
	onDelete,
}) => {
	return (
		<Stack direction={"row"}>
			<IconButton onClick={goToDetailView}>
				<VisibilityOutlined fontSize="small" />
			</IconButton>
			<IconButton onClick={onDelete}>
				<DeleteOutlineOutlined fontSize="small" />
			</IconButton>
		</Stack>
	);
};
