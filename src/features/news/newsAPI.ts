import axios from "axios";
import { Article } from "./interfaces";
import sample from "./sample";

const API_KEY = "35d0a17655044817af00e526fbdf2348";

export const fetchNews = async (category?: string) => {
  let url = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`;
  if (category) {
    url += `&category=${category}`;
  }

  try {
    const response = await axios.get<{ articles: Article[] }>(url);
    return response.data.articles;
  } catch (e) {
    return sample[category || "all"] ?? [];
  }
};
