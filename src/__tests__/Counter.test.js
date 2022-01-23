import { render, screen,fireEvent } from '@testing-library/react';
import Counter from "../features/counter/Counter";

describe('Counter Screen',()=>{
    test('counter render',()=>{
        render(<Counter />);
        const linkElement = screen.getByText(/0/i);
        expect(linkElement).toBeInTheDocument();
    })
    test('counter increment', () => {
        render(<Counter />);
        fireEvent.click(screen.getByText('Tambah'));
        const linkElement = screen.getByText(/1/i);
        expect(linkElement).toBeInTheDocument();
    });
    //
    test('counter decrement', () => {
        render(<Counter />);
        fireEvent.click(screen.getByText('Kurang'));
        const linkElement = screen.getByText(/-1/i);
        expect(linkElement).toBeInTheDocument();
    });
})

