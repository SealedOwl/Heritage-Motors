import { createContext, useEffect, useState } from "react";
import commonAPI from "../services/commonAPI";
import SERVER_URL from "../services/serverURL";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const fetchProfile = async () => {
		const token = localStorage.getItem("token");

		if (!token) {
			setLoading(false);
			return;
		}

		const response = await commonAPI(
			"get",
			`${SERVER_URL}/api/auth/profile`,
			{},
			{
				Authorization: `Bearer ${token}`,
			}
		);

		if (response.status === "success") {
			setUser(response.data);
		} else {
			localStorage.removeItem("token");
			setUser(null);
		}

		setLoading(false);
	};

	useEffect(() => {
		fetchProfile();
	}, []);

	const logout = () => {
		localStorage.removeItem("token");
		setUser(null);
	};

	const login = (userData) => {
		setUser(userData);
	};

	return (
		<AuthContext.Provider value={{ user, loading, logout, login }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
