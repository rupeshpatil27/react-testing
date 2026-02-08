import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router";
import * as matchers from "@testing-library/jest-dom/matchers";
import { UserList } from "@/components/user-list";


expect.extend(matchers);

describe("UserList", () => {
  it("should render 'No users available' when users array is empty", () => {
    render(
      <MemoryRouter>
        <UserList users={[]} />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/no users available/i)
    ).toBeInTheDocument();
  });

  it("should render a list of users when users are provided", () => {
    const users = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ];

    render(
      <MemoryRouter>
        <UserList users={users} />
      </MemoryRouter>
    );

    // Assert user names
    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Jane")).toBeInTheDocument();

    // Assert links
    expect(
      screen.getByRole("link", { name: "John" })
    ).toHaveAttribute("href", "/users/1");

    expect(
      screen.getByRole("link", { name: "Jane" })
    ).toHaveAttribute("href", "/users/2");
  });
});
