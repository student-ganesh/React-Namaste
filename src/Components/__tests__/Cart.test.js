import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import RestaurantMenuPage from "../RestaurantMenuPage";
import appStore from "../../utils/appStore";
import MOCK_DATA from "../Mocks/resMenuMock.json";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should load and expand the 'Coffee & Beverages' section", async () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
        <RestaurantMenuPage />
      </Provider>
    </BrowserRouter>
  );

  // Find the accordion header with regex (simple and flexible)
  const accordionHeader = await screen.findByText(/coffee & beverages/i);

  // Click to expand the section
  fireEvent.click(accordionHeader);

  // Wait for food items to render
  const foodItems = await screen.findAllByTestId("foodItems");
  expect(foodItems.length).toBe(35); //

  const addBtn = await screen.findAllByRole("button", { name: "Add+" });
  fireEvent.click(addBtn[0]);
});
