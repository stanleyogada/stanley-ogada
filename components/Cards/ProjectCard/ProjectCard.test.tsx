import { render, screen } from "@testing-library/react";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";

describe("ProjectCard", () => {
  test("renders props data as img and paragraph", () => {
    const props: ProjectCardProps = {
      imageSrc: "/blog",
      title: "title",
      description: "description",
    };

    render(<ProjectCard {...props} />);
    screen.getByAltText("title");
    screen.getByText(/title/);
    screen.getByText(/description/);
  });
});

export {};
