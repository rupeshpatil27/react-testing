import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as matchers from '@testing-library/jest-dom/matchers';
import { TermsAndConditions } from "@/components/terms-and-conditions";

expect.extend(matchers);

describe("TermsAndConditions", () => {
  it("should render with checkbox unchecked and button disabled initially", () => {
    render(<TermsAndConditions />);

    const checkbox = screen.getByRole("checkbox", { name: /i accept/i });
    const button = screen.getByRole("button", { name: /submit/i });

    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });

  it("should enable the button when checkbox is clicked", async () => {
    const user = userEvent.setup();
    render(<TermsAndConditions />);

    const checkbox = screen.getByRole("checkbox", { name: /i accept/i });
    const button = screen.getByRole("button", { name: /submit/i });

    // Act: Click the checkbox
    await user.click(checkbox);

    // Assert
    expect(checkbox).toBeChecked();
    expect(button).toBeEnabled();
  });

  it("should disable the button again if checkbox is unchecked", async () => {
    const user = userEvent.setup();
    render(<TermsAndConditions />);

    const checkbox = screen.getByRole("checkbox", { name: /i accept/i });
    const button = screen.getByRole("button", { name: /submit/i });

    // Act: Toggle on then off
    await user.click(checkbox);
    expect(button).toBeEnabled();
    
    await user.click(checkbox);
    // Assert
    expect(button).toBeDisabled();
  });
});
