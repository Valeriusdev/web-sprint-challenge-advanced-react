import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    expect(screen.getByText(/checkout form/i)).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);

const firstname = screen.getByLabelText(/First Name/i);
const lastname = screen.getByLabelText(/Last Name/i);
const address = screen.getByLabelText(/Address/i);
const city = screen.getByLabelText(/City/i);
const state = screen.getByLabelText(/State/i);
const zip = screen.getByLabelText(/Zip/i);
const checkout = screen.getByRole(/button/i);

userEvent.type(firstname, 'test1');
userEvent.type(lastname, 'test2');
userEvent.type(address, 'test3');
userEvent.type(city, 'test4');
userEvent.type(state, 'test5');
userEvent.type(zip, '12345');

expect(firstname).toHaveValue("test1");
expect(lastname).toHaveValue("test2");
expect(address).toHaveValue("test3");
expect(city).toHaveValue("test4");
expect(state).toHaveValue("test5");
expect(zip).toHaveValue("12345");

expect(checkout).toBeInTheDocument();
userEvent.click(checkout);

});
