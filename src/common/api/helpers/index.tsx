import axios from "axios";

export const getAllCalls =  (setCallsArray:any) => {
	try {
		const  response = axios({
			method: "post",
			url: "https://api.skilla.ru/mango/getList?date_start=2022-01-14&date_end=2022-02-22",
			headers: {
				Authorization: "Bearer testtoken",
			},
		}).then((res)=>setCallsArray(res.data.results))
		return  response;
	} catch (error) {
		console.log(error);
	}
  
};
