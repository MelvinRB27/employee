import React from "react";
import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react";
import FormEmployee from "./formEmployee"
const view = () => render(<h1> HOLAAA </h1>);

// beforeEach(() => {
// });

// it("should render", () => {
//     view()
// })

test('render', () => {
    view()
    screen.getByText('HOLAAA')
})

