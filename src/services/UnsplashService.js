// src/services/unsplashService.js
import axios from "axios";

const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const fetchImagesFromUnsplash = async (query, page = 1, perPage = 15) => {
  if (!accessKey) {
    console.error("⚠ Unsplash API key is missing! Hãy kiểm tra file .env.");
    return [];
  }

  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query,
        page,
        per_page: perPage,
        client_id: accessKey
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("❌ Lỗi khi fetch ảnh từ Unsplash:", error);
    return [];
  }
};
