import axios from "axios";

const ACCESS_KEY = "A1UJotyoLfr-ymnVj3Dg2EWgw-9Fce6mDaBedZH-sWQ"; // Hardcoded API Key

export const fetchImages = async (query: string, page = 1, perPage = 30) => {
  if (!query.trim()) return [];

  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query,
        page,
        per_page: perPage,
        client_id: ACCESS_KEY, // Sử dụng API Key trực tiếp
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Lỗi khi gọi API Unsplash:", error);
    return [];
  }
};
