import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "react";
import MOCK_DATA from "../mocks/resListMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("should filter Top Restaraunts", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );


  
    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(20);

    const TopRatedBtn = screen.getByRole("button" , {name : "Top Rated restaurant"})

    expect(TopRatedBtn).toBeInTheDocument();

    fireEvent.click(TopRatedBtn);
    
    const cardsAfterFilter = screen.getAllByTestId("resCard")
    
    expect(cardsAfterFilter.length).toBe(5)
});
