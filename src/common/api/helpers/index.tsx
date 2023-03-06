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

export const getRecord = async (record: any, partnership_id: number) => {
	try {
		console.log(
			"adad",
			`https://api.skilla.ru/mango/getRecord?record=${record}&partnership_id=${partnership_id}`,
		);
		const response = await axios({
			method: "post",
			url: `https://api.skilla.ru/mango/getRecord?record=${record}&partnership_id=${partnership_id}`,
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
				" Access-Control-Max-Age": "1000",
				"Access-Control-Allow-Headers ":
					"x-requested-with, Content-Type, origin, authorization, accept, x-access-token",
				responseType: "blob",
			},
		});
		console.log("response.data", response.data);
		const mp3 = new Blob([response.data], { type: "audio/mp3" });
		console.log("mp3", mp3);
		const url = window.URL.createObjectURL(mp3);
		console.log("url", url);
		// 	const audio = new Audio(url)
		// 	audio.load()
		//   await audio.play()
	} catch (error) {
		console.log(error);
	}
};

// const playAudio = async (id) => {
// 	try {
// 	  const response = await axiosClient.get(`api/getaudio/id/${id}`)

// 	  const mp3 = new Blob([response.data], { type: 'audio/mp3' })
// 	  const url = window.URL.createObjectURL(mp3)
// 	  const audio = new Audio(url)
// 	  audio.load()
// 	  await audio.play()
// 	} catch (e) {
// 	  console.log('play audio error: ', e)
// 	}
//  }
//  return (
// 	<ul>
// 	  {props.topList.map(item => (
// 		 <li onClick={() => playAudio(item.id)}>{item.title}</li>
// 	  ))}
// 	</ul>
//  )
