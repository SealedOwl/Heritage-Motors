import axios from "axios";

const commonAPI = async (httpRequest, url, reqBody = {}, reqHeader = {}) => {
	try {
		const method = httpRequest.toLowerCase();

		const reqConfig = {
			method,
			url,
			headers: reqHeader,
		};

		if (httpRequest !== "get" && httpRequest !== "delete") {
			reqConfig.data = reqBody;
		}

		const response = await axios(reqConfig);

		return {
			status: "success",
			data: response.data,
			statusCode: response.status,
		};
	} catch (error) {
		return {
			status: "error",
			message: error?.response?.data?.message || error.message,
			statusCode: error?.response?.status || 500,
		};
	}
};

export default commonAPI;
