import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { Greet } from "@/components/greet";
import { MemoryRouter } from "react-router";
import { ClerkProvider } from "@clerk/clerk-react";

describe("Greet", () => {
  it("should render Hello with name when logged in", () => {
    render(
      <MemoryRouter>
        <ClerkProvider publishableKey="">
          <Greet />
        </ClerkProvider>
      </MemoryRouter>,
    );
  });
});
