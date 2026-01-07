import React, { useEffect, useState } from "react";
import { getAllUsersAPI, deleteUserAPI } from "../../services/admin.api";

const ManageUsers = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		const token = localStorage.getItem("token");
		const response = await getAllUsersAPI(token);

		if (response.status === "success") {
			setUsers(response.data);
		}

		setLoading(false);
	};

	const deleteUser = async (userId) => {
		const confirmDelete = window.confirm(
			"Are you sure you want to delete this user?"
		);

		if (!confirmDelete) return;

		const token = localStorage.getItem("token");
		const response = await deleteUserAPI(userId, token);

		if (response.status === "success") {
			setUsers((prev) => prev.filter((u) => u._id !== userId));
		} else {
			alert(response.message);
		}
	};

	if (loading) {
		return <p className="text-gold">Loading users...</p>;
	}

	if (users.length === 0) {
		return <p className="text-gray-400">No users found.</p>;
	}

	return (
		<div>
			<h2 className="text-2xl text-gold mb-6">Manage Users</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{users.map((user) => (
					<div
						key={user._id}
						className="bg-gray-900 border border-gold rounded-xl p-5"
					>
						<p className="text-sm text-gray-400 mb-2">
							ID: <span className="break-all">{user._id}</span>
						</p>

						<p className="text-xl text-gold font-semibold">{user.username}</p>

						<p className="text-gray-300 mt-1">{user.email}</p>

						<p className="mt-3">
							Status:{" "}
							<span
								className={`px-3 py-1 rounded text-sm ${
									user.isPremium
										? "bg-gold text-black"
										: "bg-gray-700 text-white"
								}`}
							>
								{user.isPremium ? "Premium" : "Standard"}
							</span>
						</p>

						<button
							onClick={() => deleteUser(user._id)}
							className="mt-5 w-full border border-red-600 text-gold py-2 rounded hover:bg-red-600 hover:text-white transition cursor-pointer"
						>
							Delete User
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default ManageUsers;
