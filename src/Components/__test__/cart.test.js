import { act } from "react";
import RestaurantsMenu from "../RestaurantsMenu";
import Header from "../Header";
import MOCK_DATA from "../../Components/mocks/resMenuMock.json";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart"

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should laod restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantsMenu />
          <Cart/>
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Garlic Bread (5)");
  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(5);

  const addButton = screen.getAllByRole("button", { name: "Add +" });

  expect(screen.getByText("Cart -(0 items)")).toBeInTheDocument();

  fireEvent.click(addButton[0]);

  expect(screen.getByText("Cart -(1 items)")).toBeInTheDocument();

  fireEvent.click(addButton[1]);

  expect(screen.getByText("Cart -(2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(7);

  fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));

  expect(screen.getAllByTestId("foodItems").length).toBe(5);

  expect(screen.getByText("Cart is empty, Add items to the cart !!!")).toBeInTheDocument();
});
  