import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutPage from "./pages/LatestPage";
import AllBooks from "./pages/AllBooks";
import TopPicks from "./pages/TopPicks";
import TestSearch from "./pages/TestSearch";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,

    children: [
      { path: "all", Component: AllBooks },
      { path: "latest", Component: AboutPage },
      { path: "top_picks", Component: TopPicks },
      { path: "/search/:query", Component: TestSearch },
    ],
  },
]);

export default router;
