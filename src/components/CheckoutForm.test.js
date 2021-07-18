import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows


test('form header renders', () => {
    render(<CheckoutForm />)
    const header = screen.getByText('Checkout Form')
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);
    // Arrange
    const firstName = screen.getByLabelText(/First Name/i);
    const lastName = screen.getByLabelText(/Last Name/i);
    const address = screen.getByLabelText(/Address/i);
    const city = screen.getByLabelText(/City/i);
    const state = screen.getByLabelText(/State/i);
    const zip = screen.getByLabelText(/Zip/i);
    const checkoutButton = screen.getByRole("button", { name: /checkout/i });
    // Act
    userEvent.type(firstName, "Joe");
    userEvent.type(lastName, "Greenthumb");
    userEvent.type(address, "1976 Garden Way");
    userEvent.type(city, "Portland");
    userEvent.type(state, "Oregon");
    userEvent.type(zip, "55555");
    userEvent.click(checkoutButton);
    // Assert
    const success = screen.getByText(/Woo-hoo!/i);
    const newUser = screen.getByText(/Joe/i);

      expect(success).toBeTruthy();
      expect(success).toBeInTheDocument();
      expect(success).toBeVisible();

      expect(newUser).toBeTruthy();
      expect(newUser).toBeInTheDocument();
      expect(newUser).toBeVisible();

  });
