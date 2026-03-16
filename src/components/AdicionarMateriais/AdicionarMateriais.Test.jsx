import { render, screen, fireEvent, act } from "@testing-library/react";
import AdicionarMateriais from "./AdicionarMateriais";

describe("AdicionarMateriais", () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });
    test("renderiza os campos do formulário e o botao", () => {
        render(<AdicionarMateriais adicionarMaterial={jest.fn()} />);

        expect(screen.getByLabelText(/titulo/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/descrição/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/upload arquivo/i)).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: /adicionar material/i })
        ).toBeInTheDocument();
    });
    test("ao enviar, o botão muda para 'Carregando...'", () => {
        render(<AdicionarMateriais adicionarMaterial={jest.fn()} />);
        fireEvent.change(screen.getByLabelText(/titulo/i), {
            target: { value: "Material Teste" },
        });

        fireEvent.change(screen.getByLabelText(/descrição/i), {
            target: { value: "Descrição Teste" },
        });
        const arquivo = new File(["conteudo"], "react.pdf", {
            type: "application/pdf",
        });
        const inputUpload = screen.getByLabelText(/upload arquivo/i);
        fireEvent.change(inputUpload, { target: { files: [arquivo] } });

        fireEvent.click(screen.getByRole("button", { name: /adicionar material/i }));
        expect(
            screen.getByRole("button", { name: /carregando/i })
        ).toBeInTheDocument();
    });