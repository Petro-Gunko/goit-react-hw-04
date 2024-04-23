import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";
const API_KEY = "GuU5XV2k1F_bQ5ZM3mA63aL6pfdx2dc642nPx9Yk_3k";
export const fetchImages = async (
    searchQuery, currentPage) => {
  
    const response = await axios.get("", {
        params: {
            client_id: API_KEY,
            query: searchQuery,
            per_page: 10,
            page: currentPage,
        },
    });
   
    return response.data.results;
}