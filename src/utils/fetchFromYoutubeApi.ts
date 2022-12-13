import axios from 'axios';

interface IFetchDataParams {
  part: string;
  q?: string;
  id?: string;
  regionCode?: string;
  maxResults?: string;
  order?: string;
  pageToken?: string;
  type?: string;
  relatedToVideoId?: string;
}

const API_URL = process.env.REACT_APP_API_URL;
const API_HOST = process.env.REACT_APP_API_HOST;
const API_KEY = process.env.REACT_APP_API_KEY;

const defaultFetchConfig = {
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': API_HOST,
  },
  params: {
    maxResults: '1',
  },
};

export const fetchFromYoutubeApi = async (endpoint: string, params: IFetchDataParams) => {
  const config = {
    ...defaultFetchConfig,
    params,
  };

  const response = await axios.get(`${API_URL}/${endpoint}`, config);

  console.log(response);

  return response.data;
};
