import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./AppLayout";
import Error from "./components/Error";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Experience from "./components/Experience";
import Awards from "./components/Awards";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/articles",
            element: <Articles />,
          },
          {
            path: "/experience",
            element: <Experience />,
          },
          {
            path: "/awards",
            element: <Awards />,
          },
        ],
      },
    ],
    {
      basename: "/raviPortfolio", // Match your GitHub Pages subpath
    }
  );

  return <RouterProvider router={router} />;
}

export default App;
