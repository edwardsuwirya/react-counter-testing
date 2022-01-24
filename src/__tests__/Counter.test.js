import {fireEvent, render, screen} from '@testing-library/react';
import Counter from "../features/counter/Counter";

describe('Counter Screen', () => {
    let blocMock;
    beforeEach(() => {
        blocMock = jest.fn();
    })
    test('counter render', () => {
        blocMock.mockReturnValue({
                count: 0,
                error: "",
                handleDecrement: jest.fn(),
                handleIncrement: jest.fn()
            }
        );
        render(<Counter bloc={blocMock}/>);
        const linkElement = screen.getByText(/0/i);
        expect(linkElement).toBeInTheDocument();
    })
    test('counter increment', () => {
        blocMock.mockReturnValue({
                count: 1,
                error: "",
                handleDecrement: jest.fn(),
                handleIncrement: jest.fn()
            }
        );
        render(<Counter initVal={0} bloc={blocMock}/>);
        fireEvent.click(screen.getByText('Tambah'));
        const linkElement = screen.getByText(/1/i);
        expect(linkElement).toBeInTheDocument();
    });
    test('counter decrement', () => {
        blocMock.mockReturnValue({
                count: 0,
                error: "",
                handleDecrement: jest.fn(),
                handleIncrement: jest.fn()
            }
        );
        render(<Counter initVal={1} bloc={blocMock}/>);
        fireEvent.click(screen.getByText('Kurang'));
        const linkElement = screen.getByText(/0/i);
        expect(linkElement).toBeInTheDocument();
    });
    test('counter decrement show error', () => {
        blocMock.mockReturnValue({
                count: -1,
                error: "Tidak bole negatif",
                handleDecrement: jest.fn(),
                handleIncrement: jest.fn()
            }
        );
        render(<Counter initVal={0} bloc={blocMock}/>);
        fireEvent.click(screen.getByText('Kurang'));
        const linkElement = screen.getByText(/Tidak bole negatif/i);
        expect(linkElement).toBeInTheDocument();
    });
    test('counter increment show error', () => {
        blocMock.mockReturnValue({
                count: 4,
                error: "Tidak boleh lebih dari 3",
                handleDecrement: jest.fn(),
                handleIncrement: jest.fn()
            }
        );
        render(<Counter initVal={3} bloc={blocMock}/>);
        fireEvent.click(screen.getByText('Tambah'));
        const linkElement = screen.getByText(/Tidak boleh lebih dari 3/i);
        expect(linkElement).toBeInTheDocument();
    });
})

