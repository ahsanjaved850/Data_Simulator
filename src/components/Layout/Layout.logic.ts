import { useNavigate } from "react-router-dom";

export const useLayout = () => {
	const navigate = useNavigate();

	const goToHomePage = () => {
		navigate("/");
	};
	return {
		goToHomePage,
	};
};
