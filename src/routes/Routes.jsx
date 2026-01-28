import { createBrowserRouter } from "react-router-dom";
import { RouterProvider} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import PaginaMateriais from "../components/PaginaMateriais/PaginaMateriais";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/materiais",
                element: <PaginaMateriais />
            }
        ]
    }
]);

export default function Routes() {
    return <RouterProvider router={router} />;
}