import commonAPI from "./commonAPI";
import SERVER_URL from "./serverURL";

export const registerUserAPI = async (reqBody) => {
	return await commonAPI("post", `${SERVER_URL}/api/auth/register`, reqBody);
};

export const loginUserAPI = async (reqBody) => {
	return await commonAPI("post", `${SERVER_URL}/api/auth/login`, reqBody);
};
