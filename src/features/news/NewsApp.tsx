import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Main from "./layout/Main";
import NewsList from "./pages/NewsList";

function NewsApp() {
  return (
    <Routes>
      <Route path="/react-news-viewer-improved" element={<Main />}>
        <Route index element={<NewsList />}></Route>
        <Route
          path="/react-news-viewer-improved/:category"
          element={<NewsList />}
        ></Route>
      </Route>
    </Routes>
  );
}

export default NewsApp;
