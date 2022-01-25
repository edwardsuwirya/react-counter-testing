import {fireEvent, render, screen} from '@testing-library/react';
import Counter from "../features/counter/Counter";
import configureMockStore from 'redux-mock-store';
import {Provider} from "react-redux";
describe('Counter Screen', () => {
    let blocMock;
    let mockStore = configureMockStore()
    beforeEach(() => {
        blocMock = jest.fn();
    })
    test('counter render', () => {
        let store = mockStore({
            nilai: 0,
            isLoad: false
        })
        blocMock.mockReturnValue({
                error: "",
                handleDecrement: jest.fn(),
                handleIncrement: jest.fn(),
            }
        );
        render(<Provider store={store}><Counter bloc={blocMock}/></Provider>);
        const linkElement = screen.getByText(/0/i);
        expect(linkElement).toBeInTheDocument();
    });
    test('counter render loading', () => {
        let store = mockStore({
            nilai: 0,
            isLoad: true
        })
        blocMock.mockReturnValue({
                error: "",
                handleDecrement: jest.fn(),
                handleIncrement: jest.fn(),
                isLoad: true
            }
        );
        render(<Provider store={store}><Counter bloc={blocMock}/></Provider>);
        const linkElement = screen.getByText(/Loading.../i);
        expect(linkElement).toBeInTheDocument();
    });
    test('counter increment', () => {
        let store = mockStore({
            nilai: 1,
            isLoad: false
        })
        blocMock.mockReturnValue({
                error: "",
                handleDecrement: jest.fn(),
                handleIncrement: jest.fn(),
            }
        );
        render(<Provider store={store}><Counter bloc={blocMock}/></Provider>);
        fireEvent.click(screen.getByText('Tambah'));
        const linkElement = screen.getByText(/1/i);
        expect(linkElement).toBeInTheDocument();
    });
    test('counter decrement', () => {
        let store = mockStore({
            nilai: 0,
            isLoad: false
        })
        blocMock.mockReturnValue({
                error: "",
                handleDecrement: jest.fn(),
                handleIncrement: jest.fn(),
            }
        );
        render(<Provider store={store}><Counter bloc={blocMock}/></Provider>);
        fireEvent.click(screen.getByText('Kurang'));
        const linkElement = screen.getByText(/0/i);
        expect(linkElement).toBeInTheDocument();
    });
    test('counter decrement show error', () => {
        let store = mockStore({
            nilai: -1,
            isLoad: false
        })
        blocMock.mockReturnValue({
                error: "Tidak bole negatif",
                handleDecrement: jest.fn(),
                handleIncrement: jest.fn(),
            }
        );
        render(<Provider store={store}><Counter bloc={blocMock}/></Provider>);
        fireEvent.click(screen.getByText('Kurang'));
        const linkElement = screen.getByText(/Tidak bole negatif/i);
        expect(linkElement).toBeInTheDocument();
    });
    test('counter increment show error', () => {
        let store = mockStore({
            nilai: 4,
            isLoad: false
        })
        blocMock.mockReturnValue({
                error: "Tidak boleh lebih dari 3",
                handleDecrement: jest.fn(),
                handleIncrement: jest.fn(),
            }
        );
        render(<Provider store={store}><Counter bloc={blocMock}/></Provider>);
        fireEvent.click(screen.getByText('Tambah'));
        const linkElement = screen.getByText(/Tidak boleh lebih dari 3/i);
        expect(linkElement).toBeInTheDocument();
    });
})

