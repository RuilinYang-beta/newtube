import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const generateOptions = (url, additionalParams) => {
  return {
    method: "GET",
    url: `${BASE_URL}/${url}`,
    params: {
      ...additionalParams,
      maxResults: "50",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
};

export const fetchFromAPI = async (url, additionalParams) => {
  const options = generateOptions(url, additionalParams);
  const { data } = await axios.request(options);
  return data;
};

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
