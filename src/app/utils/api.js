import axios from "axios";
const BASE_URL = "https://openlibrary.org";
// search books
export const searchBooks = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search.json`, {
      params: { q: query, limit: 20 },
    });
    return response.data.docs;
  } catch (error) {
    console.error("Error searching books:", error);
    throw error;
  }
};
// get book details
export const getBookDetails = async (work_id) => {
  try {
    const response = await axios.get(`${BASE_URL}/works/${work_id}.json`);
    return response.data;
  } catch (error) {
    console.error("Error getting book details:", error);
    throw error;
  }
};
// get recent books
export const getRecentBooks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/daily.json`);
    return response.data.works.slice(0, 6);
  } catch (error) {
    console.error("Error getting recent books:", error);
    throw error;
  }
};
