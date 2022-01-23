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
    test('counter decrement', () => {
        render(<Counter />);
        fireEvent.click(screen.getByText('Tambah'));
        fireEvent.click(screen.getByText('Kurang'));
        const linkElement = screen.getByText(/0/i);
        expect(linkElement).toBeInTheDocument();
    });
    test('counter decrement show error', () => {
        render(<Counter />);
        fireEvent.click(screen.getByText('Kurang'));
        //Bagaimana kalau limit bawahnya nya -1000
        // For-Loop fireEvent ?
        // Props initial value ?
        const linkElement = screen.getByText(/Tidak bole negatif/i);
        expect(linkElement).toBeInTheDocument(linkElement);
    });
    test('counter increment show error', () => {
        render(<Counter />);
        fireEvent.click(screen.getByText('Tambah'));
        fireEvent.click(screen.getByText('Tambah'));
        fireEvent.click(screen.getByText('Tambah'));
        fireEvent.click(screen.getByText('Tambah'));
        //Bagaimana kalau limit atas nya 100
        // For-Loop fireEvent ?
        // Props initial value ?
        const linkElement = screen.getByText(/Tidak boleh lebih dari 3/i);
        expect(linkElement).toBeInTheDocument(linkElement);
    });
})

