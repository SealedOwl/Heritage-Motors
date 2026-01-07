import commonAPI from "./commonAPI";
import SERVER_URL from "./serverURL";

export const updateUserProfileAPI = async (formData, token) => {
	return await commonAPI("put", `${SERVER_URL}/api/users/profile`, formData, {
		Authorization: `Bearer ${token}`,
		"Content-Type": "multipart/form-data",
	});
};

export const addFavoriteAPI = (carId, token) =>
	commonAPI(
		"post",
		`${SERVER_URL}/api/users/favorites/${carId}`,
		{},
		{
			Authorization: `Bearer ${token}`,
		}
	);

export const removeFavoriteAPI = (carId, token) =>
	commonAPI(
		"delete",
		`${SERVER_URL}/api/users/favorites/${carId}`,
		{},
		{
			Authorization: `Bearer ${token}`,
		}
	);

export const getFavoritesAPI = (token) =>
	commonAPI(
		"get",
		`${SERVER_URL}/api/users/favorites`,
		{},
		{
			Authorization: `Bearer ${token}`,
		}
	);
