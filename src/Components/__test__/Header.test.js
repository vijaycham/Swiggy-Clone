import Header from "../Header";
import { fireEvent, render , screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom"

it("should render Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", {name : /login/i});
  expect(loginButton).toBeInTheDocument();
});

it("should change Login Button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
 
  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name : "Logout"});
  
  expect(logoutButton).toBeInTheDocument();
});

it("should render Header Component with a Cart item 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText("Cart -(0 items)");
  expect(cartItems).toBeInTheDocument();
});

it("should render Header Component with a Cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText(/Cart/)
  expect(cartItems).toBeInTheDocument();
});


