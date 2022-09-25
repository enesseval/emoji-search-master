import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Header from "./Header";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("Emoji App Tests", () => {
  beforeEach(() => {
    render(<App />);
  });

  let items;

  test("Header render", () => {
    const baslik = screen.getByText(/Emoji Search/i);
    expect(baslik).toBeInTheDocument();
  });
  test("emoji listesi render edilmedi", () => {
    items = screen.getAllByText("Click to copy emoji");
    expect(items.length).toEqual(20);
  });
  test("search düzgn çalışıyor mu", () => {
    const input = screen.getByLabelText("Search");
    userEvent.type(input, "100");
    expect(screen.getByText("100")).toBeInTheDocument();
  });
  test("kopyalama düzgün çalışmalı", () => {
    const click = screen.getAllByText("Click to copy emoji").at(0);
    const parent = click.parentElement;
    expect(parent.getAttribute("data-clipboard-text").length).toBeGreaterThan(
      0
    );
  });
});
