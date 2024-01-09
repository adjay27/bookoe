import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutPage from "./pages/LatestPage";
import AllBooks from "./pages/AllBooks";
import TopPicks from "./pages/TopPicks";
import TestSearch from "./pages/TestSearch";
import DetailBook from "./pages/DetailBook";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,

    children: [
      {
        path: "all",
        Component: AllBooks,
      },
      { path: "books/:bookId", Component: DetailBook },
      { path: "latest", Component: AboutPage },
      { path: "top_picks", Component: TopPicks },
      { path: "search-result", Component: TestSearch },
    ],
  },
]);

export default router;
