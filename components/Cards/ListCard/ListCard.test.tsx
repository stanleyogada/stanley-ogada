import ListCard from "@components/Cards/ListCard";
import { render, screen } from "@testing-library/react";

describe("ListCard", () => {
  test("renders props as an image, heading and content", () => {
    const props = {
      image: { src: "/blog", alt: "blog", dimension: 30 },
      title: "test title",
    };
    render(<ListCard {...props}>test content</ListCard>);

    screen.getByTestId("image: <src=/blog>, <alt=blog>");
    screen.getByTestId("listCard: <dimension=30>");
    screen.getByRole("heading", { level: 2, name: /test title/i });
    screen.getByText(/test content/i);
  });
});
