import { createBrowserRouter } from "react-router-dom";
import { RouterProvider} from "react-router-dom";
import Layout from "../components/Layout/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [

        ]
    }
]);

export default function Routes() {
    return <RouterProvider router={router} />;
}