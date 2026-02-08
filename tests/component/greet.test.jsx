import { it, expect, describe, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Greet } from "@/components/greet";
import { MemoryRouter } from "react-router";
import { useUser } from "@clerk/clerk-react"; 

import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

vi.mock("@clerk/clerk-react", () => ({
  useUser: vi.fn(),
  ClerkLoaded: ({ children }) => <>{children}</>,
  ClerkLoading: () => null,
  SignedIn: ({ children }) => {
    const { isSignedIn } = vi.mocked(useUser)();
    return isSignedIn ? <>{children}</> : null;
  },
  SignedOut: ({ children }) => {
    const { isSignedIn } = vi.mocked(useUser)();
    return !isSignedIn ? <>{children}</> : null;
  },
  UserButton: () => <button>UserButton</button>,
}));

describe("Greet", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render Hello with name when logged in", () => {
    // Setup mock for logged in
    vi.mocked(useUser).mockReturnValue({
      isSignedIn: true,
      user: { firstName: "John" },
    });

    render(
        <MemoryRouter>
          <Greet />
        </MemoryRouter>
    );

    // Assert "Hello" is there
    expect(screen.getByText(/Hello, John!/i)).toBeInTheDocument();
    
    // Assert Login button is NOT there
    expect(screen.queryByRole("link", { name: /login/i })).not.toBeInTheDocument();
  });

  it("should render Login button when not signed in", () => {
    // Setup mock for logged out
    vi.mocked(useUser).mockReturnValue({
      isSignedIn: false,
      user: null,
    });

    render(
        <MemoryRouter>
          <Greet />
        </MemoryRouter>
    );

    // Assert Login button is there
    expect(screen.getByRole("link", { name: /login/i })).toBeInTheDocument();
    
    // Assert "Hello" is NOT there
    expect(screen.queryByText(/Hello,/i)).not.toBeInTheDocument();
  });
});