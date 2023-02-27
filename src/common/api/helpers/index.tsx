import axios from "axios";

export const getAllCalls = (setCallsArray: any) => {
	try {
		const response = axios({
			method: "post",
			url: "https://api.skilla.ru/mango/getList",
			headers: {
				Authorization: "Bearer testtoken",
			},
		}).then((res) => setCallsArray(res.data.results));
		return response;
	} catch (error) {
		console.log(error);
	}
};
