import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutPage from "./pages/LatestPage";
import Home from "./pages/Home";
import TopPicks from "./pages/TopPicks";
import TestSearch from "./pages/TestSearch";
import DetailBook from "./pages/DetailBook";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: '',
        Component: Home,
      },
      { path: 'books/:bookId', Component: DetailBook },
      { path: "latest", Component: AboutPage },
      { path: "top_picks", Component: TopPicks },
      {
        path: "books/search/:keyword",
        Component: TestSearch,
      },
    ],
  },
]);

export default router;
