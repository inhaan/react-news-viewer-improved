import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import NewsHeadline from "../components/NewsHeadline";
import { fetchNewsAsync } from "../newsSlice";

interface URLParams extends Record<string, string> {
  category: string;
}

const NewsList = () => {
  const { category } = useParams<URLParams>();
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.news.status);
  const articles = useAppSelector((state) => state.news.articles);

  useEffect(() => {
    dispatch(fetchNewsAsync(category));
  }, [dispatch, category]);

  if (status === "loading") {
    return <div>loading...</div>;
  } else if (status === "failed") {
    return <div>뉴스를 가져오는데 실패했습니다</div>;
  }
  return (
    <ul>
      {articles?.map((article) => (
        <NewsHeadline key={article.title} article={article} />
      ))}
    </ul>
  );
};

export default NewsList;
