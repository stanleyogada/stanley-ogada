import { render, screen, cleanup } from "@testing-library/react";
import ProjectCard, { ProjectCardOptionsProps } from "./ProjectCard";

const setup = (props?: ProjectCardOptionsProps) => {
  const _props = {
    imageSrc: "/blog",
    title: "title",
    description: "description",
    ...props,
  };

  render(<ProjectCard {..._props} />);
};

describe("ProjectCard", () => {
  test("renders props data as img, heading, and paragraph", () => {
    setup();

    screen.getByAltText("title");
    screen.getByRole("heading", { level: 3, name: /title/i });
    screen.getByText(/description/i);
  });

  test("ensures website and github links", () => {
    const props = {
      githubLink: "https://github.com/sarah/sarah",
      websiteLink: "https://dev.com",
    };

    setup(props);

    let links = screen.getAllByRole("link");
    expect(links).toHaveLength(2);

    expect(links[0]).toHaveAttribute("href", props.githubLink);
    expect(links[1]).toHaveAttribute("href", props.websiteLink);

    cleanup();
    setup({ githubLink: props.githubLink });
    screen.getByRole("link", { name: /github repository/i });
    expect(
      screen.queryByRole("link", { name: /live link/i })
    ).not.toBeInTheDocument();

    cleanup();
    setup({ websiteLink: props.websiteLink });
    screen.getByRole("link", { name: /live link/i });
    expect(
      screen.queryByRole("link", { name: /github repository/i })
    ).not.toBeInTheDocument();

    cleanup();
    setup();
    expect(screen.queryAllByRole("link")).toHaveLength(0);
  });
});

export {};
