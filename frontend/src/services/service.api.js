import commonAPI from "./commonAPI";
import SERVER_URL from "./serverURL";

// get user service
export const getMyServiceRequestsAPI = async (token) => {
	return await commonAPI(
		"get",
		`${SERVER_URL}/api/services/my-requests`,
		{},
		{
			Authorization: `Bearer ${token}`,
		}
	);
};

// get all services for admin
export const getAllServiceRequestsAPI = (token) =>
	commonAPI(
		"get",
		`${SERVER_URL}/api/services`,
		{},
		{
			Authorization: `Bearer ${token}`,
		}
	);

// update service status for admin
export const updateServiceStatusAPI = (id, status, token) =>
	commonAPI(
		"put",
		`${SERVER_URL}/api/services/${id}/status`,
		{ status },
		{ Authorization: `Bearer ${token}` }
	);
