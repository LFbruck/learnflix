import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import VisualizarPage from "./VisualizarPage";

describe("VisualizarPage", () => {
    test("renderiza a lista de disciplinas na tela inicial", () => {
        render(<VisualizarPage />);

        expect(
            screen.getByRole("heading", { name: /disciplinas/i })
        ).toBeInTheDocument();

        expect(screen.getByText(/frontend com react/i)).toBeInTheDocument();
        expect(screen.getByText(/javascript avançado/i)).toBeInTheDocument();
        expect(screen.getByText(/ux e ui design/i)).toBeInTheDocument();
        expect(screen.getByText(/banco de dados/i)).toBeInTheDocument();
        expect(screen.getByText(/engenharia de software/i)).toBeInTheDocument();

        const botoesAcessar = screen.getAllByRole("button", { name: /acessar/i });
        expect(botoesAcessar).toHaveLength(5);
    });