import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "react";
import MOCK_DATA from "../../Components/mocks/resListMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("should Search Restaraunt List for burger input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(20);

  const searchButton = screen.getByRole("button", { name: "Search" });

  expect(searchButton).toBeInTheDocument();

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "Pizza" } });

  fireEvent.click(searchButton);

  const cardsafterSearch = screen.getAllByTestId("resCard");

  expect(cardsafterSearch.length).toBe(3);
});
