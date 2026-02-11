import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Layout from "../components/Layout/Layout";

import { MateriaisPage, LoginPage, HomePage, CadastroPage } from "../pages";
import VisualizarPage from "../pages/VisualizarPage";

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
            },
            {
                path: "/materiais",
                element: <MateriaisPage />
            },
            {
                path: "/visualizar",
                element: <VisualizarPage />
            }
        ]
    }
]);

export default function Routes() {
    return <RouterProvider router={router} />;
}
