import { render, screen } from "@testing-library/react";
import RestaurantCards, { withIsOpen } from "../RestaurantCards";
import MOCK_DATA from "../Mocks/resCardMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render RestaurantCard Component with Props data", () => {
  render(<RestaurantCards resData={MOCK_DATA} />);
  const RestoCompName = screen.getByText("McDonald's");

  expect(RestoCompName).toBeInTheDocument();
});

// Home Work:
const RestoWithLabel = withIsOpen(RestaurantCards);
it("Should render RestaurantCard Component with Open label data", () => {
  render(
    <BrowserRouter>
      <RestoWithLabel resData={MOCK_DATA} />
    </BrowserRouter>
  );
  const openLabel = screen.getByText("Open");

  expect(openLabel).toBeInTheDocument();
});
// 2nd Way:
test("MOCK_DATA should have isOpen set to true", () => {
  expect(MOCK_DATA).toHaveProperty("isOpen", true);
});
