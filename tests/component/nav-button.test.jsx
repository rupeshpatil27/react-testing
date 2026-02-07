import * as React from "react";

import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { NavButton } from "@/components/nav-button";
import "@testing-library/jest-dom/vitest";

describe("group", () => {
  it("should render button with when props provide", () => {
    render(
      <MemoryRouter>
        <NavButton href="/" label="test button" isActive={false} />
      </MemoryRouter>,
    );
    expect(screen.getByText("test button")).toBeInTheDocument();
  });
});
