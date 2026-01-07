import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import SERVER_URL from "../../services/serverURL";
import { updateUserProfileAPI } from "../../services/user.api";

const EditProfile = ({ close }) => {
	const { user, login } = useContext(AuthContext);
	const fileInputRef = useRef(null);

	const [username, setUsername] = useState(user?.username || "");
	const [imageFile, setImageFile] = useState(null);
	const [preview, setPreview] = useState(
		user?.profile && user.profile.trim() !== ""
			? `${SERVER_URL}${user.profile}`
			: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
	);

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
			const token = localStorage.getItem("token");

			const formData = new FormData();
			formData.append("username", username);
			if (imageFile) {
				formData.append("profile", imageFile);
			}

			const response = await updateUserProfileAPI(formData, token);

			if (response.status === "success") {
				login(response.data.user);
				close();
			} else {
				alert(response.message);
			}
		} catch (error) {
			console.error(error);
			alert("Failed to update profile");
		}
	};

	return (
		<div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
			<div className="bg-gray-900 border border-gold rounded-xl p-6 w-full max-w-md">
				<h3 className="text-xl text-gold mb-4">Edit Profile</h3>

				{/* Profile Image */}
				<div className="flex justify-center mb-4">
					<div
						onClick={handleImageClick}
						className="relative cursor-pointer group"
					>
						<img
							src={preview}
							alt="profile preview"
							className="w-24 h-24 rounded-full object-cover border border-gold"
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
				<input
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					placeholder="Username"
					className="w-full p-2 mb-4 rounded bg-gray-800 border border-gray-600"
				/>

				<div className="flex justify-end gap-3">
					<button
						onClick={close}
						className="px-4 py-2 border border-gray-500 rounded"
					>
						Cancel
					</button>
					<button
						onClick={handleSave}
						className="px-4 py-2 border border-gold rounded hover:bg-gold hover:text-black transition"
					>
						Save
					</button>
				</div>
			</div>
		</div>
	);
};

export default EditProfile;
