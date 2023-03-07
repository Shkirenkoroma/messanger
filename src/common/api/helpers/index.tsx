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

export const getRecord = async (record: any, partnership_id: number, setUrl:any) => {
	try {
		const response = await axios({
			method: "post",
			responseType: 'blob',
			url: `https://api.skilla.ru/mango/getRecord?record=${record}&partnership_id=${partnership_id}`,
			headers: {
				Authorization: "Bearer testtoken",
			},
		});
		const mp3 = new Blob([response.data], { type: "audio/mp3" });
		const url = window.URL.createObjectURL(mp3);
		setUrl(url) 
	} catch (error) {
		console.log(error);
	}
};
