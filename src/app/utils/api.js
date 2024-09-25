import axios from "axios";
const Base_URL = "https://openlibrary.org";

export const searchBooks = async (query) => {
  const response = await axios.get(`${Base_URL}/search.json`, {
    params: { q: query, limit: 20 },
  });
  return response.data.docs;
};

export const getBookDetails = async (id) => {
  const response = await axios.get(`${Base_URL}/works/${id}.json`);
  return response.data;
};

export const getRecentBooks = async () => {
  const response = await axios.get(`${Base_URL}/trending/daily.json`);
  return response.data.works.slice(0, 6);
};
