import { RouterProvider, createHashRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Workspace from "./pages/Workspace";

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Workspace />
      },
    ], 
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
