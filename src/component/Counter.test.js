import { render, fireEvent, screen } from '@testing-library/react';
import Counter from "./Counter";


test("increase counter", () => {
    render(<Counter />);


    const counter = screen.getByTestId("counter");
    const increamentBtn = screen.getByTestId("increament");


    fireEvent.click(increamentBtn);

    expect(counter).toHaveTextContent("1")
});

describe("counter component", () => {
    test("renders initial counter value of 0", () =>{
        render(< Counter />);
        const counterElement = screen.getByTestId("counter");
        expect(counterElement).toHaveTextContent("0");
    });
});