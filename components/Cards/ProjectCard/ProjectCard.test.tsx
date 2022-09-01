import { render, screen } from "@testing-library/react";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";

describe("ProjectCard", () => {
  test("renders props data as img, heading, and paragraph", () => {
    const props: ProjectCardProps = {
      imageSrc: "/blog",
      title: "title",
      description: "description",
    };

    render(<ProjectCard {...props} />);
    screen.getByAltText("title");
    screen.getByRole("heading", { level: 3, name: /title/i });
    screen.getByText(/description/i);
  });
});

export {};
