import commonAPI from "./commonAPI";
import SERVER_URL from "./serverURL";

export const getAllCarsAPI = () => commonAPI("get", `${SERVER_URL}/api/cars`);

export const getCarByIdAPI = (id) =>
	commonAPI("get", `${SERVER_URL}/api/cars/${id}`);

export const getCarsByCollectionAPI = (collection) =>
	commonAPI("get", `${SERVER_URL}/api/cars/collection/${collection}`);

// user -> sell car
export const sellCarAPI = async (formData, token) => {
	return await commonAPI("post", `${SERVER_URL}/api/cars`, formData, {
		Authorization: `Bearer ${token}`,
	});
};

// get user uploaded car
export const getMyCarsAPI = async (token) => {
	return await commonAPI(
		"get",
		`${SERVER_URL}/api/cars/my-cars`,
		{},
		{
			Authorization: `Bearer ${token}`,
		}
	);
};
