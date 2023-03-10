import axios from "axios";

export const getAllCalls = (
	setCallsArray: any,
	date_start: string,
	date_end: string,
	in_out: number | null,
	allTypes: string,
	setFilteredUsers:any,
) => {
	try {
		const response = axios({
			method: "post",
			url: `https://api.skilla.ru/mango/getList${
				allTypes === "Все типы"
					? ""
					: `?date_start=${date_start}&date_end=${date_end}&in_out=${in_out}`
			}`,
			headers: {
				Authorization: "Bearer testtoken",
			},
		}).then((res) => {
			setFilteredUsers(res.data.results)
			setCallsArray(res.data.results)});
		return response;
	} catch (error) {
		console.log(error);
	}
};

export const getRecord = async (
	record: string,
	partnership_id: number,
	setUrl: any,
) => {
	try {
		const response = await axios({
			method: "post",
			responseType: "blob",
			url: `https://api.skilla.ru/mango/getRecord?record=${record}&partnership_id=${partnership_id}`,
			headers: {
				Authorization: "Bearer testtoken",
			},
		});
		const mp3 = new Blob([response.data], { type: "audio/mp3" });
		const url = window.URL.createObjectURL(mp3);
		setUrl(url);
	} catch (error) {
		console.log(error);
	}
};
