import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./AppLayout";
import Error from "./components/Error";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
      },
    ]
    // {
    //   basename: "/raviPortfolio", // Match your GitHub Pages subpath
    // }
  );

  return <RouterProvider router={router} />;
}

export default App;
