import { createBrowserRouter } from "react-router-dom";
import { RouterProvider} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import CadastroPage from "../pages/CadastroPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "/cadastro",
                element: <CadastroPage />
            }
        ]
    }
]);

export default function Routes() {
    return <RouterProvider router={router} />;
}