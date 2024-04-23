import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const accessKey = "GuU5XV2k1F_bQ5ZM3mA63aL6pfdx2dc642nPx9Yk_3k";
export const fetchImages = async (
    searchQuery, currentPage) => {
    const response = await axios.get("/photos", {
        params: {
            client_id: accessKey,
            query: searchQuery,
            per_page: 10,
            page: currentPage,
        },
    });
    return response.data;
}