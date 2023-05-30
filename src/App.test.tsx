import { render, screen, fireEvent } from "@testing-library/react";
import { server } from "./mocks/server";
import { rest } from "msw";
import userEvent from "@testing-library/user-event";
import App from "./App";

// Mock the API response
const endpoint = "https://dummyjson.com/products";

server.use(
  rest.get(`${endpoint}/:productId`, (req, res, ctx) => {
    const { productId } = req.params;

    return res(
      ctx.status(200),
      ctx.delay(0),
      ctx.json({
        id: productId,
        title: "iPhone X",
        description: "SIM-Free, Model A19211 6.5-inch Super Retina ...",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        images: ["https://i.dummyjson.com/data/products/2/1.jpg"],
      })
    );
  })
);

describe("App", () => {
  beforeAll(() => server.listen());
  // beforeEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("submit does not reset form input", () => {
    render(<App />);

    const inputElement = screen.getByRole("textbox");
    const submitButton = screen.getByText("Submit");

    userEvent.clear(inputElement);
    userEvent.type(inputElement, "1111");
    expect(inputElement).toHaveValue("1111");

    userEvent.click(submitButton);
    expect(inputElement).toHaveValue("1111");
  });

  test("submit with valid product ID returns product data", async () => {
    render(<App />);

    const inputElement = screen.getByRole("textbox");
    const submitButton = screen.getByText("Submit");

    userEvent.clear(inputElement);
    userEvent.type(inputElement, "9");
    expect(inputElement).toHaveValue("9");

    userEvent.click(submitButton);

    const productData = await screen.findByText(/iPhone X/i);
    expect(productData).toBeInTheDocument();
  });
});
