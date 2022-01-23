import { render, screen,fireEvent } from '@testing-library/react';
import Counter from "../features/counter/Counter";

describe('Counter Screen',()=>{
    test('counter render',()=>{
        render(<Counter initVal={0}/>);
        const linkElement = screen.getByText(/0/i);
        expect(linkElement).toBeInTheDocument();
    })
    test('counter increment', () => {
        render(<Counter initVal={0} />);
        fireEvent.click(screen.getByText('Tambah'));
        const linkElement = screen.getByText(/1/i);
        expect(linkElement).toBeInTheDocument();
    });
    test('counter decrement', () => {
        render(<Counter initVal={1}/>);
        fireEvent.click(screen.getByText('Kurang'));
        const linkElement = screen.getByText(/0/i);
        expect(linkElement).toBeInTheDocument();
    });
    test('counter decrement show error', () => {
        render(<Counter initVal={0}/>);
        fireEvent.click(screen.getByText('Kurang'));
        const linkElement = screen.getByText(/Tidak bole negatif/i);
        expect(linkElement).toBeInTheDocument(linkElement);
    });
    test('counter increment show error', () => {
        render(<Counter initVal={3}/>);
        fireEvent.click(screen.getByText('Tambah'));
        const linkElement = screen.getByText(/Tidak boleh lebih dari 3/i);
        expect(linkElement).toBeInTheDocument(linkElement);
    });
})

