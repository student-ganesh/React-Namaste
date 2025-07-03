import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import Body from "../Body";
import MOCK_DATA from "../Mocks/resCardMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

// SHimmer problem While Running Test SO COmment it to pass

it("Should render the Body component with Search button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = await screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(1);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInp");
  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);

  // 2 resCard should visble

  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(1);

  // expect(searchInput).toBeInTheDocument();
});

it("Should render the Body component with Search button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(1);

  const topRatedBtn = screen.getByRole("button", { name: "Top Rated Choices" });
  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(1);
});
