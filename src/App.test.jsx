import { render, screen, fireEvent} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import ProductForm from "./components/productForm";
import App from "./App";

describe("Coffee R Us", () => {

  test("renders navbar links", () => {
    render( <App />);

    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/shop/i)).toBeInTheDocument();
     expect(screen.getByText(/admin/i)).toBeInTheDocument();
  });

  test("renders landing page heading", () => {
    render( <App />);

    expect(
      screen.getByText(/Coffee R Us/i)
    ).toBeInTheDocument();
  });

   test("updates input value using state hook", () => {
    render(<ProductForm />);

    const input = screen.getByPlaceholderText(/image url/i);

    fireEvent.change(input, {
      target: { value: "https://coffee.com/image.jpg" },
    });

    expect(input.value).toBe("https://coffee.com/image.jpg");
  });



});