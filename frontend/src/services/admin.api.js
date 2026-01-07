import commonAPI from "./commonAPI";
import SERVER_URL from "./serverURL";

export const getAdminStatsAPI = async (token) => {
	return await commonAPI(
		"get",
		`${SERVER_URL}/api/admin/dashboard-stats`,
		{},
		{
			Authorization: `Bearer ${token}`,
		}
	);
};

// get all users
export const getAllUsersAPI = async (token) =>
	commonAPI(
		"get",
		`${SERVER_URL}/api/admin/users`,
		{},
		{
			Authorization: `Bearer ${token}`,
		}
	);

// delete users
export const deleteUserAPI = async (userId, token) =>
	commonAPI(
		"delete",
		`${SERVER_URL}/api/admin/users/${userId}`,
		{},
		{
			Authorization: `Bearer ${token}`,
		}
	);

// get sales history
export const getSalesHistoryAPI = async (token) => {
	return await commonAPI(
		"get",
		`${SERVER_URL}/api/admin/sales-history`,
		{},
		{
			Authorization: `Bearer ${token}`,
		}
	);
};

// manage users car listings
export const getPendingCarsAPI = async (token) => {
	return await commonAPI(
		"get",
		`${SERVER_URL}/api/admin/pending-cars`,
		{},
		{
			Authorization: `Bearer ${token}`,
		}
	);
};

export const approveCarAPI = async (id, token) => {
	return await commonAPI(
		"put",
		`${SERVER_URL}/api/admin/pending-cars/${id}/approve`,
		{},
		{
			Authorization: `Bearer ${token}`,
		}
	);
};

export const rejectCarAPI = async (id, token) => {
	return await commonAPI(
		"delete",
		`${SERVER_URL}/api/admin/pending-cars/${id}/reject`,
		{},
		{
			Authorization: `Bearer ${token}`,
		}
	);
};
