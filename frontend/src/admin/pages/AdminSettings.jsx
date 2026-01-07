import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import SERVER_URL from "../../services/serverURL";
import { updateAdminProfileAPI } from "../../services/admin.api";

const AdminSettings = () => {
	const { user, login } = useContext(AuthContext);
	const fileInputRef = useRef(null);

	const [username, setUsername] = useState(user?.username || "");
	const [imageFile, setImageFile] = useState(null);
	const [preview, setPreview] = useState(
		user?.profile && user.profile.trim() !== ""
			? `${SERVER_URL}${user.profile}`
			: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
	);
	const [loading, setLoading] = useState(false);

	const handleImageClick = () => {
		fileInputRef.current.click();
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (!file) return;

		setImageFile(file);
		setPreview(URL.createObjectURL(file));
	};

	const handleSave = async () => {
		try {
			setLoading(true);
			const token = localStorage.getItem("token");

			const formData = new FormData();
			formData.append("username", username);
			if (imageFile) {
				formData.append("profile", imageFile);
			}

			const response = await updateAdminProfileAPI(formData, token);

			if (response.status === "success") {
				login({
					...user,
					...response.data.user,
				});
				alert("Admin profile updated successfully");
			} else {
				alert(response.message || "Update failed");
			}
		} catch (error) {
			console.error(error);
			alert("Failed to update admin profile");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="max-w-xl bg-[#111]/60 border border-[#222] rounded-xl p-6">
			<h2 className="text-2xl text-gold mb-6 text-center">Admin Settings</h2>

			{/* Profile Image */}
			<div className="flex justify-center mb-6">
				<div
					onClick={handleImageClick}
					className="relative cursor-pointer group"
				>
					<img
						src={preview}
						alt="admin profile"
						className="w-28 h-28 rounded-full object-cover border border-gold"
					/>
					<div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
						<span className="text-sm text-white">Change</span>
					</div>
				</div>
			</div>

			{/* Hidden File Input */}
			<input
				type="file"
				accept="image/*"
				ref={fileInputRef}
				onChange={handleImageChange}
				className="hidden"
			/>

			{/* Username */}
			<div className="mb-4">
				<label className="block text-gray-400 mb-1">Username</label>
				<input
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className="w-full p-2 rounded bg-gray-800 border border-gray-600"
				/>
			</div>

			<div className="flex justify-end">
				<button
					onClick={handleSave}
					disabled={loading}
					className="cursor-pointer px-6 py-2 border border-gold rounded hover:bg-gold hover:text-black transition disabled:opacity-50"
				>
					{loading ? "Saving..." : "Save Changes"}
				</button>
			</div>
		</div>
	);
};

export default AdminSettings;
