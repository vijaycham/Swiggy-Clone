import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json";

const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

it("should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with promoted label", () => {
  render(<PromotedRestaurantCard resData={MOCK_DATA} />);
  const promotedLabel = screen.getByText(/open/i);
  expect(promotedLabel).toBeInTheDocument();
});
