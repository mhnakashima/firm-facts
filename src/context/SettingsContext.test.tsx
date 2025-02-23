import React from "react";
import { render, screen } from "@testing-library/react";
import { SettingsProvider, useSettings } from "./SettingsContext";

const TestComponent = () => {
  const { theme, toggleTheme } = useSettings();
  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

test("SettingsContext provides theme and toggle function", () => {
  render(
    <SettingsProvider>
      <TestComponent />
    </SettingsProvider>
  );

  expect(screen.getByText("Current Theme: light")).toBeInTheDocument();
});