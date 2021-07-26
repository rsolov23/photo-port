import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

afterEach(cleanup);

describe("About component", () => {
  //renders About test
  //The first test will be the baseline to verify that the component is rendering.
  it("renders", () => {
    render(<About />);
  });
  //In the next test, also known as a "test case", we'll compare snapshot versions of the DOM node structure.
  it("matches snapshot DOM node structure", () => {
    const { asFragment } = render(<About />);

    expect(asFragment()).toMatchSnapshot();
  });
});
